import React from 'react';
import VegetableList from './components/VegetableList.jsx';
import VegetableItemStore from './stores/VegetableItemStore.jsx';

const initial = VegetableItemStore.getAllVegetables();

React.render(<VegetableList items={initial} />, app);

