import React, { useState } from 'react'

function MissionsTable({ data }) {

    const [searchItem, setSearchItem] = useState('');

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
            textAlign: 'center',
        },

        tableRow: {
            backgroundColor: '#f2f5f3',
            height: 50,
            paddingLeft: 50,
            paddingRight: 50,
            textAlign: 'center',
        },

        tableText: {
            padding: 15,

        }
    }
    return (
        <div>
            <div style={styles.container}>
                <div>
                    <input type='text' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
                    <label> Filter ID</label>
                </div>

            </div>
            <div style={styles.container}>
                <table>
                    <thead>
                        <tr style={styles.tableRowHeader}>
                            <th style={styles.tableText}>Mission ID</th>
                            <th style={styles.tableText}>Mission Name</th>
                            <th style={styles.tableText}>Manufacturers</th>
                            <th style={styles.tableText}>Payload IDs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter((value) => {
                            if (searchItem == '') {
                                return value
                            } else if (value.mission_id.toLowerCase()
                                .includes(searchItem.toLowerCase())) {
                                return value
                            }
                        }).map((mission) => (
                            <tr key={mission.mission_id} style={styles.tableRow}>
                                <td style={styles.tableText}>{mission.mission_id}</td>
                                <td style={styles.tableText}>{mission.mission_name}</td>
                                <td style={styles.tableText}>{mission.manufacturers}</td>
                                <td style={styles.tableText}>{mission.payload_ids[0]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MissionsTable
