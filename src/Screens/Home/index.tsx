import './styles.css';

export const Home = () => {
    return <div className="home">
        <video 
            src='./video.mp4'
            autoPlay
            controls={false}
            loop
            muted
        />
    </div>
}