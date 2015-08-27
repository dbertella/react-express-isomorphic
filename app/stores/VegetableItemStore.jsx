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

  addVegetable(action) {
    items.push(action.vegetable);
    this.emitChange();
  }
  deleteVegetable(action) {
    const index = items.indexOf(action.vegetable);
    items.splice(index, 1);
    this.emitChange();
  }
}

const vegetableStoreIstance = new VegetableItemStore;

dispatcher.register(function(action) {
  switch (action.type) {
  case actionTypes.ADD_VEGETABLE:
    vegetableStoreIstance.addVegetable(action);
    break;
  case actionTypes.DELETE_VEGETABLE:
    vegetableStoreIstance.deleteVegetable(action);
    break;
  default:
  }
});

export default vegetableStoreIstance;
