import React from "react";
import image from "../bg.jpg";

export default function Home(){
    return (
        <main>
            <img src= {image} alt="" className="absolute objects-cover w-full h-full"/>
            <section className="relative flex justify-end min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-800 font-bold cursive leading-none lg:leading-snug home-name">Hola! I'm Disha</h1>
            </section>
        </main>
    )
}