import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className="pokemon">
        <div>
          <h2>{ name }</h2>
          <p>{ type }</p>
        </div>
        <p>{ `Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    )
  }
}

export default Pokemon;