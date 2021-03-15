import React, { useState, useEffect } from 'react'

function UpcomingCapsules() {

    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);
    const columns = data[0] && Object.keys(data[0]);

    const styles = {

        container: {
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },

        tableRowHeader: {
            backgroundColor: '#dae0db',
            height: 50,
            paddingLeft: 50,
            paddingRight: 50,
            textAlign:'center',
        },

        tableRow: {
            backgroundColor: '#f2f5f3',
            height: 50,
            paddingLeft: 50,
            paddingRight: 50,
            textAlign:'center',
        }
    }


    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/capsules/upcoming')
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
                <text style={{ color: 'white', fontSize: 40 }}>Upcoming Capsules</text>
            </div>

            {loading ? <div>LOADING</div> :
                <div style={styles.container}>
                    <div>
                        <table>
                            <thead>
                                <tr style={styles.tableRowHeader}>
                                    <th>Serial</th>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Launch</th>
                                    <th>Launch Unix</th>
                                    <th>Missions</th>
                                    <th>Landing</th>
                                    <th>Type</th>
                                    <th>Details</th>
                                    <th>Reuse Count</th>
                                </tr>

                            </thead>

                            <tbody>
                                {data.map(row =>
                                    <tr style={styles.tableRow}>{columns.map(column =>
                                        <td>{row[column]}</td>)}</tr>)}
                            </tbody>
                        </table>
                    </div>

                </div>}
        </div>
    )
}

export default UpcomingCapsules

