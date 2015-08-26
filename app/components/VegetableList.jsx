import React from 'react';
import VegetableItem from './VegetableItem.jsx';

class VegetableList extends React.Component {

  render() {
    const vegetableListItem = this.props.items.map((el, i) => <VegetableItem item={el} key={i} />);
    return (
      <div>
        <h1>Verdure</h1>
        { vegetableListItem }
      </div>
    );
  }
}

VegetableList.propTypes = {
  items: React.PropTypes.array,
};

export default VegetableList
