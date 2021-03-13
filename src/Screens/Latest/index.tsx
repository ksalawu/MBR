import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import './styles.css';
import months from '../../Util/months'
export const Latest = ({setPlayingShow}:{setPlayingShow: Dispatch<SetStateAction<string | undefined>>}) => {
    const mixcloud = require('mixcloud');
    const [shows, setShows] = useState<any>()
    const [mixcloudObject, setMixcloudObject] = useState<any>()
    useEffect(() => {
        mixcloud.cloudcasts(process.env.REACT_APP_MIXCLOUD_PROFILE_NAME, { limit: 100 })
        .then((data: any) => {
            setMixcloudObject(data)
            const shows = data.results.map((show: any) => {
                const splitName = show.name.split(' - ');
                const date = splitName[splitName.length-1].split(' ').filter((d:any) => !!d)
                const day = date[1].replace(/\D/g,'')
                const month = months.indexOf(date[2]) 
                const year = date[3]
                return {
                    key: show.key,
                    url: show.url,
                    name:splitName[0],
                    imageUrl: show.pictures.medium || "./MBR.png",
                    tags: show.tags.map((t:any) =>t.name).slice(0,3),
                    date: `${day} - ${month+1} - ${year}`,
                    dateObject : new Date(year, month, day)
                }
            })
                    // @ts-ignore
            shows.sort((a:any, b: any) => {
                // @ts-ignore
                return b.dateObject - a.dateObject
            })
            setShows(shows)
        })
    }, [])

    return <div className="latest" onScroll={(e) => {
        const target = e?.target;
        // @ts-ignore
        if (target.scrollHeight - target.scrollTop === (target.clientHeight)) {
            mixcloudObject.pagination.next().then((data: any) => {
                setShows(shows.concat(data.results.map((show: any)=> ({
                    key: show.key,
                    url: show.url,
                    name: show.name,
                    imageUrl: show.pictures.medium || "./MBR.png",
                    tags: show.tags.map((t:any) =>t.name).slice(0,3),
                    date: '01 - 01 - 01'
                }))))
            })
        }
    }}>
        {shows && shows?.map((show: any) => {
            return <div className="show" 
            onClick={() => show?.key && setPlayingShow(show?.key)}
            >
                <div className="top">
                    <div className="image" style={{backgroundImage: `url(${show.imageUrl})`}}/>
                    <div className="right">
                        <div className="date">{show.date}</div>
                        <div className="tags">{show.tags.map((t: any) => `#${t}`).join(" ")}</div>
                    </div>
                </div>
                <div className="desc">{show.name}</div>
            </div>
        })}
    </div>
}