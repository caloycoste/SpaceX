import React, { useState, useEffect } from 'react'

function UpcomingCapsules() {

    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);
    const columns = data[0] && Object.keys(data[0]);

    const tableStyle = {
        body: {
            padding: 20,
            height: 50,
        },

        container: {
            maxWidth: 3000,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 100,
        },


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
                <div style={tableStyle.container}>
                    <table>
                        <thead>
                            <tr>
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

                        <tbody style={tableStyle.body}>
                            {data.map(row =>
                                <tr>{columns.map(column =>
                                    <td>{row[column]}</td>)}</tr>)}
                        </tbody>
                    </table>
                </div>}
        </div>
    )
}

export default UpcomingCapsules

