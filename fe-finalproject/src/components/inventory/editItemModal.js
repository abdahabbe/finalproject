import React, { useState } from "react";
import axios from "axios";
import "../../App.css";

const EditItemModal = ({ product, onClose }) => {
  const [itemName, setItemName] = useState(product.name);
  const [itemPrice, setItemPrice] = useState(product.price);
  const [itemStock, setItemStock] = useState(product.quantity);

  const handleEditItem = async () => {
    try {
      if (itemName && itemPrice && itemStock) {
        const response = await axios.put(
          `http://localhost:3000/api/inventory/${product.product_id}`,
          {
            name: itemName,
            price: itemPrice,
            stock: itemStock,
          }
        );
        console.log(response.data);
        onClose();
      } else {
        onClose();
        alert("You don't make any changes");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Edit Item</h2>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={{ marginRight: 10 }}
         // placeholder={product.name}
        />
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          style={{ marginRight: 10 }}
        //  placeholder={product.price}
        />
        <input
          type="number"
          value={itemStock}
          onChange={(e) => setItemStock(e.target.value)}
          style={{ marginRight: 10 }}
       //   placeholder={product.quantity}
        />
        <button onClick={handleEditItem} style={{ marginRight: 10 }}>
          Save
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditItemModal;
