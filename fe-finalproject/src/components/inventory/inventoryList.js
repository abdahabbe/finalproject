import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import EditItemModal from "./editItemModal";
import axios from "axios";

const InventoryList = ({ items, deleteItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchDataById = async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/inventory?${productId}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching the inventory items:", error);
    }
  };

  const openPopup = (item) => {
    setSelectedItem(item);
    setIsOpen(true);

    fetchDataById(item.product_id);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {});

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Name</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center align-middle">{item.name}</td>
              <td className="text-center align-middle">Rp. {item.price}</td>
              <td className="text-center align-middle">{item.quantity} pcs</td>
              <td className="text-center align-middle">
                <Button
                  variant="secondary"
                  onClick={() => openPopup(item)}
                  style={{ marginLeft: 10 }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteItem(item.product_id)}
                  style={{ marginLeft: 10 }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {isOpen && <EditItemModal product={selectedItem} onClose={closePopup} />}
    </>
  );
};

export default InventoryList;
