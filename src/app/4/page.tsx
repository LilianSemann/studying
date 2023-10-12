"use client"

import Link from "next/link"
import { useState } from "react"

export default function Fourth() {

    const [text, setText] = useState("Olá!")

    function changeText() {
        setText("Adeus!")
    }

    // CÓDIGO ANTIGO - NÃO ATUALIZANDO TELA
    // let text = "Olá!"

    // function changeText() {
    //     text = "Adeus!"
    //     console.log(text)
    // }

    return (
        <section className="flex justify-center items-center min-h-screen">
            <div className="bg-white text-black p-5 rounded-lg w-[30%] flex flex-col gap-4 items-center">
                <h1 className="mb-3 text-center">COMEÇANDO SIMPLES: MUDANDO O TEXTO DO BOTÃO</h1>
                <p>{text}</p>
                <button onClick={changeText} className="border-b bg-orange-500 text-white rounded-lg px-3 py-2 w-fit border-orange-900 shadow-md">Clique aqui!</button>
                <Link href={"/"} className="text-xs text-zinc-700">Voltar</Link>
            </div>
        </section>
    )
}