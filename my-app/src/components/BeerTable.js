import React from 'react'

export const Beers = ({beers}) => {

    if (beers.length === 0) return null

    const BeerRow = (beer,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{beer.category}</td>
                  <td>{beer.name}</td>
                  <td>{beer.currentTemperature} °C</td>
                  <td>{beer.range.start} - {beer.range.end} °C</td>
              </tr>
          )
    }

    const beerTable = beers.map((beer,index) => BeerRow(beer,index))

    return(
        <div className="container">
            <h2>Sensor Data</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Current Temperature</th>
                    <th>Range</th>
                </tr>
                </thead>
                <tbody>
                    {beerTable}
                </tbody>
            </table>
        </div>
    )
}