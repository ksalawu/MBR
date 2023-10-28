import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import ReactGA from 'react-ga'
import './styles.css';
import months from '../../Util/months'
export const Latest = ({setPlayingShow}:{setPlayingShow: Dispatch<SetStateAction<string | undefined>>}) => {
    const mixcloud = require('mixcloud');
    const [shows, setShows] = useState<any>()
    const [mixcloudObject, setMixcloudObject] = useState<any>()
    const [loading, setLoading] =  useState(false)
    useEffect(() => {
        setLoading(true)
        mixcloud.cloudcasts(process.env.REACT_APP_MIXCLOUD_PROFILE_NAME, { limit: 100 })
        .then((data: any) => {
            setLoading(false)
            setMixcloudObject(data)
            const shows = data.results.map((show: any) => {
                const splitName = show.name.split(' - ') || '';
                let date, day, month, year;
                try {
                    date = splitName[splitName.length-1]?.split(' ')?.filter((d:any) => !!d) || ''
                    day = date[1].replace(/\D/g,'') || 1
                    month = months.indexOf(date[2])  || 1
                    year = date[3] || 1
                } catch {
                    day = 1;
                    month = 1;
                    year = 1;
                }

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
        .catch((e: Error) => {
            console.log('error', e)
            setLoading(false)
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
        { loading && <div className="loading" />}
        {shows && shows?.map((show: any) => {
            return <div className="show" 
            onClick={() => {
                ReactGA.event({
                    category: 'Click',
                    action: 'Play From Latest',
                    label: show.name
                });
                show?.key && setPlayingShow(show?.key)
            }}
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
