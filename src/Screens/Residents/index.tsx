import './styles.css';
import { useRef } from 'react'
import { string } from 'yup/lib/locale';

export const Residents = () => {
    const shows = [
        {
            name: "A TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
        },
        {
            name: "B TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
        },
        {
            name: "R TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
        },
        {
            name: "S TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
        },
        {
            name: "T TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
        },
        {
            name: "1 TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
        },
    ]
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
                {showsAlpha[letter] && showsAlpha[letter].map(show => <div className="show">
                        <div className="image" style={{backgroundImage: `url(${show.imageUrl})`}}/>
                        <div className="right">
                            <h5 className="name">{show.name}</h5>
                            <div className="descr">{show.description}</div>
                        </div>
                </div>)}
            </div>)}
        </div>
    </div>
}