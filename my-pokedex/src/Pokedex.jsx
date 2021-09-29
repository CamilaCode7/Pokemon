import React, { Component } from 'react'
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map(p => <Pokemon key={p.id}pokemon={p}/>)}
      </div>
    )
  }
}

export default Pokedex;