import React from 'react'

function MissionsTable({ data }) {
    return (
        <div>
            <table>
                <tbody>
                    {data.map((mission) => (
                        <tr key={mission.mission_id}>
                            <td>{mission.mission_id}</td>
                            <td>{mission.mission_name}</td>
                            <td>{mission.manufacturers}</td>
                        </tr>
                    )
                    )}


                </tbody>



            </table>

        </div>
    )
}

export default MissionsTable
