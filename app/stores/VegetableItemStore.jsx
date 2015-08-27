import dispatcher from './../dispatcher';
import actionTypes from './../constants/actionTypes';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';
const items = [
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
class VegetableItemStore extends EventEmitter {

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAllVegetables() {
    return items;
  }
}

const vegetableIstance = new VegetableItemStore;

dispatcher.register(function(action) {
  switch (action.type) {
  case actionTypes.ADD_VEGETABLE:
    items.push(action.vegetable);
    vegetableIstance.emitChange();
    break;
  default:
  }
});

export default vegetableIstance;
