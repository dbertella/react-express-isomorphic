import React from 'react';
import VegetableItem from './VegetableItem.jsx';
import VegetableAddItem from './VegetableAddItem.jsx';
import action from './../actions/VegetableActionCreator.jsx';

class VegetableList extends React.Component {
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
    action.add({
      name: this.state.input,
    });
    this.setState({
      input: '',
    });
  }

  render() {
    const vegetableListItem = this.props.items.map((el, i) => <VegetableItem item={el} key={i} />);
    return (
      <div>
        <h1>Verdure</h1>
        { vegetableListItem }
        <VegetableAddItem input={this.state.input} handleInputName={this.handleInputName} addItem={this.addItem} />
      </div>
    );
  }
}

VegetableList.propTypes = {
  items: React.PropTypes.array,
};

export default VegetableList;
