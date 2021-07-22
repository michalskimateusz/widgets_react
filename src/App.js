import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
    label: 'The color Red',
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


  return (
    <div className="ui container">
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label={'Choose a color'}
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
  )
};

export default App;