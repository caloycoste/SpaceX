/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function History() {
    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/history')
            .then(res => { console.log(res); setData(res.data)})
            .catch(err => { console.log(err) })
        isLoading(false)
    }, [])

    return (
        <div>
            <div style={{
                height: 100,
                backgroundColor: 'teal',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <text style={{ color: 'white', fontSize: 40 }}>History</text>
            </div>
            {loading ? <div>LOADING</div> :
                <div style={{ marginLeft: 50 }}>
                    <ol style={{ fontSize: 20, textAlign: 'left' }}>
                        {data.map(history => (
                            <div><li key={history.id}><b>{history.title}</b><br/>
                            {history.details}<br/>
                            </li>
                            </div>
                        ))}
                    </ol>
                </div>}

        </div>
    )
}

export default History
