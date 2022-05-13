import React, { Component } from 'react';
import Planets from '../data/planets';
import Planetcard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="planets">
          {Planets.map(({ name, image }) => (
            <Planetcard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
