
import './App.css';
import React, { useState, useEffect } from 'react';
const App = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const dummyData = [
      { id: 1, name: 'Rahul', number: '9876567856' },
      { id: 2, name: 'Aman', number: '9876543556' },
    ];
    setItems(dummyData);
  }, []);

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: items.length + 1,
      name,
      number,
    };
    setItems([...items, newItem]);
    setName('');
    setNumber('');
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>

      <h2 style={{textAlign:"center"}}>Phone Book</h2>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={number}
        placeholder="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleAddItem}>Save Number</button>

      <h2 style={{textAlign:"center"}}>Contect list</h2>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id} </td>
            <td>{item.name}</td>
            <td>{item.number}</td>
          <td>  <button onClick={() => handleDeleteItem(item.id)}>Delete</button></td>
          </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default App;

