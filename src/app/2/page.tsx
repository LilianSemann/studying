import Link from "next/link"

interface IUsers {
    id: number,
    name: string,
    age: number
    }

export default function Second() {

    // ARRAY NOVA COM INTERFACE
    const users:IUsers[] = [
        {id: 1, name: "Angelo", age: 20},
        {id: 2, name: "Bruno", age: 23},
        {id: 3, name: "dasa", age: 30},
        {id: 4, name: "basda", age: 40},
        {id: 5, name: "dfsgdf", age: 50}
    ]

    // ARRAY ANTIGA
    // const users = [
    //     {id: 1, name: "Angelo", age: 20},
    //     {id: 2, name: "Bruno", age: 23},
    //     {id: 3, age: 30},
    //     {id: 3, name: "basda", age: 40},
    //     {id: 3, name: "dfsgdf", age: "dfdf"},
    //     {id: 3, name: "basda", age: 40}
    // ]

    return (
        <section className="flex justify-center items-center min-h-screen">
            <div className="bg-white text-black p-5 rounded-lg w-[30%]">
                <h1 className="mb-3 text-center">PORQUE TYPAGEM É IMPORTANTE</h1>
                {users.map((u) => (
                    <ul key={u.id} className="flex justify-between px-2 py-1 odd:bg-zinc-200">
                        <li>{u.name}</li>
                        <li>{u.age}</li>
                    </ul>
                ))}
                <Link href={"/"} className="text-xs text-zinc-700">Voltar</Link>
            </div>
        </section>
    )
}