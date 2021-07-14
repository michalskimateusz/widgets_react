import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'A shade of Blue',
    value: 'blue'
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);


  return (
    <div className="ui container">
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle DropDown</button>
      {showDropdown ? 
        <Dropdown
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        /> : null
      }
    </div>
  )
};

export default App;