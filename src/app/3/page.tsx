"use client"

import Link from "next/link"

interface IUsers {
    id: number,
    name: string,
    age: number
    }

export default function Third() {

    let users:IUsers[] = [
        {id: 1, name: "Angelo", age: 20},
        {id: 2, name: "Bruno", age: 23},
        {id: 3, name: "Carol", age: 30},
    ]

    const newUser:IUsers = {
        id: 4,
        name: "Duda",
        age: 31        
    }

    function addUser() {
        users = ([...users, newUser])
        console.log(users)
    }

    return (
        <section className="flex justify-center items-center min-h-screen">
            <div className="bg-white text-black p-5 rounded-lg w-[30%]">
                <h1 className="mb-3 text-center">ADICIONANDO NOVO ITEM PARA ARRAY</h1>
                <button onClick={addUser}>Adicionar novo usuário</button>
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