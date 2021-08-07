import React, { Component } from 'react'

class Ninja extends Component {
    render() {
    console.log(this.props)

    const {ninjas} = this.props

    const ninjasList = ninjas.map(ninja => {
        return(
            <div key={ninja.Id}>
              <h1>Name{ninja.name}</h1>
              <h1>Age{ninja.age}</h1>
              <h1>Belt{ninja.belt}</h1>
            </div>
        )
    })
        return (
            <div className="ninja">
{ninjasList}

            </div>
        )
    }
}



export default  Ninja;
