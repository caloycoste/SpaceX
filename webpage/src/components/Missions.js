import React, { useState, useEffect } from 'react'

function Missions() {

    const [data, setData] = useState([])

    useEffect ( () => {
        fetch('https://api.spacexdata.com/v3/missions')
        .then((response) => response.json())
        .then((data) => setData(data));

    }
    )

    function firstObject() {

    }

    
    return (
        <div>
            <div>
                <ol>
                {data.map((mission) => { return <li>{mission.mission_name}</li>})}
                </ol>
            </div>

            <div>
                
            </div>
            
        </div>
    )
}

export default Missions
