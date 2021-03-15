import React, { useState, useEffect } from 'react'

function Rockets() {

    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/rockets')
            .then((response) => response.json())
            .then((data => setData(data)));
        isLoading(false)
    }, []);

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
                <text style={{ color: 'white', fontSize: 40 }}>Rockets</text>
            </div>

            {loading ? <div>LOADING</div> :
                <div style={{ marginLeft: 50 }}>
                    <ol style={{ fontSize: 20, textAlign: 'left' }}>
                        {data.map((rocket) => {
                            return <div>
                                <li key={rocket.id}>{rocket.country}</li>
                            </div>
                        })}
                    </ol>
                </div>}

        </div>
    )
}

export default Rockets

