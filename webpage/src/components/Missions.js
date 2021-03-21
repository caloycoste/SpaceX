import React, { useState, useEffect } from 'react'
import MissionsTable from './MissionsTable'

function Missions() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/missions')
            .then((response) => response.json())
            .then((data) => setData(data));
    })

    const styles = {

        dataContainer: {
            marginLeft: 60,
            marginRight: 80,
            paddingTop: 10,
            borderBottom: '3px solid rgb(212, 212, 212)',
            textAlign: 'justify',
        },
    }

    return (
        <div>
            <div style={{
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <text style={{ fontSize: 40, fontWeight:'bold', }}>Missions</text>
            </div>
            <div>
                <div>
                    {data.map((mission) => {
                        return <div style={styles.dataContainer}><b>{mission.mission_name}</b>
                            <p>{mission.description}</p>
                            <p>Visit their website: {mission.website}</p></div>
                    })}
                </div>
            </div>
            <MissionsTable data={data} />


        </div>
    )
}

export default Missions
