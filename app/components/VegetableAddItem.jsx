import React from 'react';

class VegetableAddItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputName = this.handleInputName.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = {};
  }
  handleInputName(e) {
    this.setState({
      input: e.target.value,
    });
  }
  addItem(e) {
    e.preventDefault();
    console.log(this.state.input);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input type="text" onChange={this.handleInputName} />
          <button> Add Vegetable </button>
        </form>
      </div>
    );
  }
}

// VegetableAddItem.propTypes = {
//   item: React.PropTypes.object,
// };

export default VegetableAddItem;
