import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import Select from './components/Select';
import Table from './components/Table';

function App() {
  // State for the Input component
  const [inputValue, setInputValue] = useState('');

  // State for the Select component
  const [selectedOption, setSelectedOption] = useState('');

  // Sample data for the Table component
  const tableColumns = ['Name', 'Age', 'Location'];
  const tableData = [
    ['ahmed', 28, 'kar'],
    ['usaid', 32, 'kar'],
    ['abdullah', 45, 'isl'],
  ];

  return (
    <div className="App">
      <h1>Dynamic Components Example</h1>
      
      {/* Input Component */}
      <Input
        type="text"
        placeholder="Enter something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      {/* Button Component */}
      <Button
        label="Click me"
        onClick={() => alert('Button clicked!')}
      />
      
      {/* Card Component */}
      <Card
        title="Card Title"
        content="This is a card component."
      />
      
      {/* Select Component */}
      <Select
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      
      {/* Table Component */}
      <Table columns={tableColumns} data={tableData} />
    </div>
  );
}

export default App;
