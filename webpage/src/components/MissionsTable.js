import React from 'react'

function MissionsTable({ data }) {
    return (
        <div>
            <table>
                <tbody>
                    {data.map((mission) => (
                        <tr key={mission.mission_id}>
                            <td>{mission.missin_id}</td>
                            <td>{mission.mission_name}</td>
                            <td>{mission.manufacturers}</td>
                            <td>{mission.payload_ids[0]}</td>
                        </tr>
                    )
                    )}


                </tbody>



            </table>

        </div>
    )
}

export default MissionsTable
