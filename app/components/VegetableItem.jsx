import React from 'react';

class VegetableItem extends React.Component {
  render() {
    return (
      <div>
        <a href="#" onClick={this.props.deleteItem}>&times; </a>
        {this.props.item.name}
      </div>
    );
  }
}

VegetableItem.propTypes = {
  item: React.PropTypes.object,
  deleteItem: React.PropTypes.func,
};

export default VegetableItem;
