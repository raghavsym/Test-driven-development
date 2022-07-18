import React from 'react'

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "#6458be",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>Sensor Tech</h1>
        </div>
    )
}