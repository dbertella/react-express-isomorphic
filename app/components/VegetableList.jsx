import React from 'react';
import VegetableItem from './VegetableItem.jsx';
import VegetableAddItem from './VegetableAddItem.jsx';
import action from './../actions/VegetableActionCreator.jsx';
import VegetableItemStore from './../stores/VegetableItemStore.jsx';

class VegetableList extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputName = this.handleInputName.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.componentWillMount = this.componentWillMount.bind(this);
    // this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = {
      input: '',
      items: VegetableItemStore.getAllVegetables(),
    };
  }
  componentWillMount() {
    VegetableItemStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    VegetableItemStore.removeChangeListener(this._onChange);
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
  deleteItem(el, e) {
    e.preventDefault();
    action.delete(el);
    this._onChange();
  }
  _onChange() {
    this.setState({
      items: VegetableItemStore.getAllVegetables(),
    });
  }

  render() {
    const vegetableListItem = this.state.items.map((el, i) => <VegetableItem item={el} key={i} deleteItem={this.deleteItem.bind(this, el)} />);
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
