/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function History() {
    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/history')
            .then(res => { console.log(res); setData(res.data) })
            .catch(err => { console.log(err) })
        isLoading(false)
    }, []);

    const styles = {

        container: {
            marginTop: 10,
            width: 1500,
            marginLeft: 'auto',
            marginRight: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#dae0db',
            borderRadius:20,

        },
        dataContainer: {
            marginLeft:50,
            marginRight:50,
            paddingTop:10,
            borderBottom: '3px solid rgb(212, 212, 212)',
            textAlign:'justify',

        },
    }

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
                <div style={styles.container}>
                    <ol>
                    {data.map(history => (
                        <div style={styles.dataContainer}>
                                <li key={history.id}><b>{history.title}</b>
                                    <p>{history.details}</p>
                                </li>
                        </div>
                    ))}
                    </ol>
                </div>}

        </div>
    )
}

export default History
