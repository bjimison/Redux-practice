import React, { Componenet } from "react";

class Shelf extends Componenet {
  state = {
    shelfItems: ["Bananas", "Frozen Pizza", "Flamin' Hot Cheetos", "Arugula"]
  };

  render() {
    const shelfItems = this.state.shelfItems.map((item, id) => {
      return (
        <li key={id}>
          {item}
          <button onClick={() => this.props.addItem(item)}> + </button>
        </li>
      );
    });
    return (
      <div>
        <h2>Store Inventory</h2>
        <ul>{shelfItems}</ul>
      </div>
    );
  }
}

export default Shelf;
