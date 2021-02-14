import './styles.css';
import {useRef } from 'react'

export const Residents = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz#".split('');
    return <div className="residents">
        <div className="letters">
            {alphabet.map((letter) => <a onClick={() => {
                document.getElementById(`#${letter}`)?.scrollIntoView({ behavior: 'smooth' })
            }}>{letter}</a>)}
        </div>
        <div className="all">
            {alphabet.map((letter) => <div id={`#${letter}`} className="page">
                {letter}
            </div>)}
        </div>
    </div>
}