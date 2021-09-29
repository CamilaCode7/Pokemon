import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
};
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
  }),
  image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;