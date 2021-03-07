import './styles.css';
const arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
export const Schedule = ({calendar}:{calendar?: any }) => {
    const formattedShows = calendar && calendar?.items.reduce((acc: any[], cur: any) => {
        const start = new Date(cur.start.dateTime)
        const end = new Date(cur.end.dateTime)
        const date = `${start.getDate()} - ${start.getMonth()+1} - ${start.getFullYear()}`
          // @ts-ignore
        if (!acc[date]) acc[date] = {
            // @ts-ignore
            day:arrayOfWeekdays[start.getDay()].toLowerCase(),
            date:date,
            dateObject: start,
            shows: []
        }
          // @ts-ignore
        acc[date].shows.push({
            name:cur.summary,
            description: cur.description,
            imageUrl: "./MBR.png", //replaceme
            time: `${new Date(cur?.start.dateTime).toLocaleTimeString().replace(':','').slice(0,4)} - ${new Date(cur?.end.dateTime).toLocaleTimeString().replace(':','').slice(0,4)}`
        })
        return acc
    }, {})
    // @ts-ignore
    const shows = formattedShows && Object.keys(formattedShows).map(key => formattedShows[key]).sort((a, b) => a.dateObject - b.dateObject)


    return <div className="schedule">
        {
            shows && shows.map((day: any) => <div className="day">
                    <div className="head">
                        <div className="dayword">{day.day}</div>
                        <div className="date">{day.date}</div>
                        <div/>
                    </div>
                    <div className="shows">
                        {day.shows.map((show: any) => <div className="show">
                                    <div className="image" style={{backgroundImage: `url(${show.imageUrl})`}}/>
                                    <div className="right">
                                        <div>
                                            <div className="name">{show.name}</div>
                                            <div className="time">{show.time}</div>
                                        </div>
                                        <div className="descr" dangerouslySetInnerHTML={{__html: show.description}} ></div>
                                    </div>
                            </div>
                        )}
                    </div>
                </div>
            )
        }
    </div>
}