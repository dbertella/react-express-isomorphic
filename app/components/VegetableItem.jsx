import React from 'react';

class VegetableItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.item.name}
      </div>
    );
  }
}

VegetableItem.propTypes = {
  item: React.PropTypes.object,
};

export default VegetableItem;
