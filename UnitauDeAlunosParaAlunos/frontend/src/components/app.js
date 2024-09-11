import React, {Component} from "react";
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('app');
const root = createRoot(domNode);

export default function App(props){
    return (
        <>
            <main className=" w-96 h-20 bg-slate-500">
                <h1 className="bg-indigo-500 text-8xl teste">Testing    React App</h1>
                <h2>{props.name}</h2>
            </main>
        </>
    )
}

root.render(<App name="Renozixx" />);