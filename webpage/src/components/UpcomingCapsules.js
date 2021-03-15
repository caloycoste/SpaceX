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
        },

        tableText: {
            padding:15,
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
                <div>
                    <div style={styles.container}>
                        <table>
                            <thead>
                                <tr style={styles.tableRowHeader}>
                                    <th style={styles.tableText}>Serial</th>
                                    <th style={styles.tableText}>ID</th>
                                    <th style={styles.tableText}>Status</th>
                                    <th style={styles.tableText}>Launch</th>
                                    <th style={styles.tableText}>Launch Unix</th>
                                    <th style={styles.tableText}>Missions</th>
                                    <th style={styles.tableText}>Landing</th>
                                    <th style={styles.tableText}>Type</th>
                                    <th style={styles.tableText}>Details</th>
                                    <th style={styles.tableText}>Reuse Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(row =>
                                    <tr style={styles.tableRow}>{columns.map(column =>
                                        <td style={styles.tableText}>{row[column]}</td>)}</tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>}
        </div>
    )
}

export default UpcomingCapsules

