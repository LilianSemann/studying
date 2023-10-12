"use client"

import Link from "next/link"
import { useState } from "react"

export default function Fifth() {

    const [text, setText] = useState("Olá!")

    let newText = ""

    function changeText() {
        setText(newText)
    }

    return (
        <section className="flex justify-center items-center min-h-screen">
            <div className="bg-white text-black p-5 rounded-lg w-[30%] flex flex-col gap-4 items-center">
                <h1 className="mb-3 text-center">COMEÇANDO SIMPLES: MUDANDO O TEXTO DO BOTÃO</h1>
                <div className="border border-black rounded-xl px-2 py-1 flex gap-1">
                    <input type="text" onChange={(e) => {newText = (e.target.value)}} className="outline-none"/>
                    <button onClick={changeText} className="">Clique aqui!</button>
                </div>
                <p>{text}</p>
                <Link href={"/"} className="text-xs text-zinc-700">Voltar</Link>
            </div>
        </section>
    )
}