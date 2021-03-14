import React, { useState, useEffect } from 'react'

function UpcomingCapsules() {

    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);
    const columns = data[0] && Object.keys(data[0])

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
            <table>
                <thead>
                    <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}

                    </tr>

                </thead>

                <tbody>
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

