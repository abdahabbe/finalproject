import React, { useState, useEffect } from "react";
import NavigationBar from "../components/navbar";
import InventoryList from "../components/inventory/inventoryList";
import AddItemForm from "../components/inventory/addItemForm";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { fetchData } from "../handler/handlerInventory";

function Home() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const handleDelete = async (productId) => {
    let answer = window.confirm("Are you sure to delete this data?");
    try {
      if (answer === true) {
        await axios.delete(`http://localhost:3000/api/inventory/${productId}`);
        alert("Data has been deleted succesfully!")
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      // Handle error
    }
  };

  const fetchDataInventory = async () => {
    const url = "http://localhost:3000/api/inventory"; //change localhost/baseUrl into variable
    const data = await fetchData(url);
    setItems(data);
  };

  useEffect(() => {
    fetchDataInventory();
  }, [items]);

  return (
    <div>
      <NavigationBar />
      <Container>
        <Row className="mt-4">
          <Col>
            <h2>Add New Item</h2>
            <AddItemForm addItem={addItem} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Item List</h2>
            <InventoryList items={items} deleteItem={handleDelete} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
