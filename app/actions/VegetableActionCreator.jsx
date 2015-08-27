import dispatcher from './../dispatcher';
import actionTypes from './../constants/actionTypes';

const VegetableActionCreator = {
  add: function(item) {
    dispatcher.dispatch({
      type: actionTypes.ADD_VEGETABLE,
      vegetable: item,
    });
  },
};

export default VegetableActionCreator;
