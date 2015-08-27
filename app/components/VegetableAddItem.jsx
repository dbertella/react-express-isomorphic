import React from 'react';

class VegetableAddItem extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
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
