import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SearchHistory() {
    const [data, setData] = useState({});
    const [id, setId] = useState(1);
    const [idFromClick, setIdFromClick] = useState(1);

    const handleClick = () => {
        setIdFromClick(id)
    };

    useEffect(() => {
        axios.get(`https://api.spacexdata.com/v3/history/${idFromClick}`)
            .then(res => { console.log(res); setData(res.data) })
            .catch(err => { console.log(err) })
    }, [idFromClick])

    return (
        <div style={{ marginBottom: 20, marginLeft: 50 }}>
            <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={handleClick}>Read More</button>
            <div>
                {data.title}
            </div>
        </div>
    )
}

export default SearchHistory
