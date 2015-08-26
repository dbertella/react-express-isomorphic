import React from 'react';
import VegetableList from './components/VegetableList.jsx';

const initial = [
  {
    name: 'Carote',
  },
  {
    name: 'Patate',
  },
  {
    name: 'Peperoni',
  },
  {
    name: 'Melanzane',
  },
  {
    name: 'Lattuga',
  },
  {
    name: 'Zucchine',
  },
];

React.render(<VegetableList items={initial} />, app);
