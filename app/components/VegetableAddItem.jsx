import React from 'react';

class VegetableAddItem extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addItem}>
          <input type="text" value={this.props.input} onChange={this.props.handleInputName} />
          <button> Add Vegetable </button>
        </form>
      </div>
    );
  }
}

VegetableAddItem.propTypes = {
  input: React.PropTypes.string,
  addItem: React.PropTypes.function,
  handleInputName: React.PropTypes.function,
};

export default VegetableAddItem;
