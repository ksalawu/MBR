import './styles.css';
import { useRef } from 'react'
import { string } from 'yup/lib/locale';

export const Residents = ({residents}:{residents?: any[]}) => {
    const shows = residents || []
    const showsAlpha = shows.reduce((acc: { 
        [key: string] : {
            name: string
            description: string
            imageUrl: string
    }[]}, cur: {
        name: string
        description: string
        imageUrl: string
    }) => {
        let firstLetter = cur.name[0].toLowerCase()
        const number = new RegExp(/[0-9]/g)
        if (number.test(firstLetter)) firstLetter = '#'
        if (!acc[firstLetter]) acc[firstLetter] = []
        acc[firstLetter].push(cur)
        return acc
    }, {})

    const alphabet = "abcdefghijklmnopqrstuvwxyz#".split('');
    return <div className="residents">
        <div className="letters">
            {alphabet.map((letter) => <a onClick={() => {
                document.getElementById(`#${letter}`)?.scrollIntoView({ behavior: 'smooth' })
            }}>{letter}</a>)}
        </div>
        <div className="all">
            {alphabet.map((letter) => <div id={`#${letter}`} className="letterPage">
                {showsAlpha[letter] && showsAlpha[letter].map((show: any) => <div className="show">
                        <div className="image" style={{backgroundImage: `url(${show.imageUrl || "./MBR.png"})`}}/>
                        <div className="right">
                            <h5 className="name">{show.name}</h5>
                            <div className="descr">{show.description}</div>
                        </div>
                </div>)}
            </div>)}
        </div>
    </div>
}