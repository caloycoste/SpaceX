/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchHistory from './search-history'

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
                backgroundColor: 'teal',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <text style={{ color: 'white', fontSize: 40 }}>History</text>
            </div>
            {loading ? <div>LOADING</div> :
                <div>
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
                <SearchHistory/>
                
        </div>
    )
}

export default History
