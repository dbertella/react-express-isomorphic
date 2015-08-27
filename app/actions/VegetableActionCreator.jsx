import dispatcher from './../dispatcher';
import actionTypes from './../constants/actionTypes';

const VegetableActions = {
  add: function(item) {
    dispatcher.dispatch({
      type: actionTypes.ADD_VEGETABLE,
      vegetable: item,
    });
  },
  delete: function(item) {
    dispatcher.dispatch({
      type: actionTypes.DELETE_VEGETABLE,
      vegetable: item,
    });
  },
};

export default VegetableActions;
