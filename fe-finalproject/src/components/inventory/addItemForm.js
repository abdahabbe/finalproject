import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const AddItemForm = ({ addItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageUrl] = useState("");
  const [stock, setStock] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && price && stock) {
        const response = await axios.post(
          "http://localhost:3000/api/inventory/add",
          {
            name,
            price,
            stock,
            imageURL,
          }
        );
        console.log(response.data);
        // Reset form fields
        setName("");
        setPrice("");
      } else {
        alert("Item name and price can't be empty!");
      }
    } catch (error) {
      console.error("There was an error adding the item!", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formImageURL" style={{ marginTop: 10 }}>
        <Form.Label>Image Url</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image url"
          value={imageURL}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPrice" style={{ marginTop: 10 }}>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formQuantity" style={{ marginTop: 10 }}>
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter quantity"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ marginTop: 10 }}>
        Add Item
      </Button>
    </Form>
  );
};

export default AddItemForm;
