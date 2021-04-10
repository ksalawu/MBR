import './styles.css';
import { useRef } from 'react'
import { string } from 'yup/lib/locale';
import ReactGA from 'react-ga'

export const Residents = ({residents}:{residents?: any[]}) => {
    const shows = residents || []
    const showsAlpha = shows.reduce((acc: { 
        [key: string] : {
            name: string
            description: string
            imageUrl: string
            clickout: string
    }[]}, cur: {
        name: string
        description: string
        imageUrl: string
        clickout: string
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
                            <div className="top">
                                <h5 className="name">{show.name}</h5>
                                <ReactGA.OutboundLink to={show.clickout} target="_blank" eventLabel={`residents-more-${show.name}`}>
                                    more {'>'}
                                </ReactGA.OutboundLink>
                            </div>
                            <div className="descr">{show.description}</div>
                        </div>
                </div>)}
            </div>)}
        </div>
    </div>
}