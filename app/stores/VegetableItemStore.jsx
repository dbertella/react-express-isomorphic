import dispatcher from './../dispatcher';
import actionTypes from './../constants/actionTypes';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';
let _items = [];

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
    console.log('getAll', _items);
    return _items;
  }

  addVegetable(action) {
    _items.push(action.vegetable);
    this.emitChange();
  }
  deleteVegetable(action) {
    const index = _items.indexOf(action.vegetable);
    _items.splice(index, 1);
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

fetch('/api/items')
.then(function(response) {
  return response.json();
})
.then(function(j) {
  _items = j;
  console.log(_items);
  vegetableStoreIstance.emitChange();
});
export default vegetableStoreIstance;
