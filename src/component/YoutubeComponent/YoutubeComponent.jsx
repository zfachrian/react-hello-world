import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/QkRRH21AYQo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLC0gPvmoqUXVyTUBJ1csVvy4IEJ9Q" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time: '00.00',
    title: 'Unknown',
    desc: 'Unknown'
}

export default YoutubeComponent;