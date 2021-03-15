import React, { useState, useEffect } from 'react'

function Missions() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/missions')
            .then((response) => response.json())
            .then((data) => setData(data));

    }
    )

    return (
        <div>
            <div style={{
                height: 100,
                backgroundColor: 'teal',
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <text style={{ color: 'white', fontSize: 40 }}>Missions</text>
            </div>
            <div>
                    {data.map((mission) => { return <div>{mission.mission_name} <p>{mission.description}</p></div> })}
            </div>

        </div>
    )
}

export default Missions
