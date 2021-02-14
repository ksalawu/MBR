import './styles.css';

export const Latest = () => {
    const shows = [
        {
            name: "TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
            tags: ["house", "techno", "test"],
            date: '01 - 01 - 01'
        },
        {
            name: "TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
            tags: ["house", "techno", "test"],
            date: '01 - 01 - 01'
        },
        {
            name: "TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
            tags: ["house", "techno", "test"],
            date: '01 - 01 - 01'
        },
        {
            name: "TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
            tags: ["house", "techno", "test"],
            date: '01 - 01 - 01'
        },
        {
            name: "TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
            tags: ["house", "techno", "test"],
            date: '01 - 01 - 01'
        },
        {
            name: "TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
            tags: ["house", "techno", "test"],
            date: '01 - 01 - 01'
        },
        {
            name: "TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
            tags: ["house", "techno", "test"],
            date: '01 - 01 - 01'
        },
        {
            name: "TEST long ad apojd paosjd poasjd poasj dpajdpoapasopdjapoisdpijsapdijasijojas",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            imageUrl: "./MBR.png",
            tags: ["house", "techno", "test"],
            date: '01 - 01 - 01'
        },
    ]
    return <div className="latest">
        {shows.map((show) => {
            return <div className="show">
                <div className="top">
                    <div className="image" style={{backgroundImage: `url(${show.imageUrl})`}}/>
                    <div className="right">
                        <div className="date">{show.date}</div>
                        <div className="tags">{show.tags.map(t => `#${t}`).join(" ")}</div>
                    </div>
                </div>
                <div className="desc">{show.description}</div>
                
            </div>
        })}
    </div>
}