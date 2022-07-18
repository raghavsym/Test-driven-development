import React from 'react'

export const OutOfRange = ({beers}) => {

    if (beers.length === 0) return null

    const BeerRow = (beer,index) => {

        if(beer.status === 'Out of range!'){
            return(
                <tr key = {index} className={index%2 === 0?'odd':'even'}>
                    <td>{beer.name}</td>
                    <td>{beer.currentTemperature} °C</td>
                    <td>{beer.status}</td>
                </tr>
            )
        }
        
    }

    const beerTable = beers.map((beer,index) => BeerRow(beer,index))

    return(
        <div style={{backgroundColor:'#fa6060'}} className="container display-board">
            <h2>Out of Range</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Current Temperature</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {beerTable}
                </tbody>
            </table>
        </div>
    )
}