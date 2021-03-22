import React from 'react'

function HeaderSection({
    welcomeText,
    welcomeDesc,
    welcomeImg
}) {
    return (
        <>
            <div className='container'>
                <div className='row'>
                <div className='col'>
                        <div className='imgWrapper'>
                            <img src={welcomeImg} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='textWrapper'>
                            <h1>{welcomeText}</h1>
                            <p>{welcomeDesc}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default HeaderSection
