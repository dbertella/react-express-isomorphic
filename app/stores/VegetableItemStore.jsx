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
    return _items;
  }

  addVegetable(vegetable) {
    _items.push(vegetable);
    // console.log(JSON.stringify(vegetable));
    this.emitChange();
    // fetch('/api/items', {
    //   method: 'post',
    //   body: {
    //     name: vegetable,
    //   },
    // });
    fetch('/api/items', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: vegetable.name,
      }),
    });
  }
  deleteVegetable(vegetable) {
    const index = _items.indexOf(vegetable);
    _items.splice(index, 1);
    this.emitChange();
  }
}

const vegetableStoreIstance = new VegetableItemStore;

dispatcher.register(function(action) {
  switch (action.type) {
  case actionTypes.ADD_VEGETABLE:
    vegetableStoreIstance.addVegetable(action.vegetable);
    break;
  case actionTypes.DELETE_VEGETABLE:
    vegetableStoreIstance.deleteVegetable(action.vegetable);
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
  vegetableStoreIstance.emitChange();
});
export default vegetableStoreIstance;
