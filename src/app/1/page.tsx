import Link from "next/link"

export default function First() {

    // CRIAÇÃO DE ARRAY (sem typagem)
    const users = [
        {id: 1, name: "Angelo", age: 20},
        {id: 2, name: "Bruno", age: 23},
        {id: 3, name: "Carol", age: 30}
    ]
    return (
        <section className="flex justify-center items-center min-h-screen">
            <div className="bg-white text-black p-5 rounded-lg w-[30%]">
                <h1 className="mb-3 text-center">MAPEANDO UM ARRAY</h1>
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