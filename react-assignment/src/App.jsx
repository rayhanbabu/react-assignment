import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import PackingList from './components/PackingList';
import { useState } from 'react';


function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
      setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
      setItems((items) => items.filter((item) => item.id !== id));
}

function handleToggleItem(id) {
    setItems((items) =>
        items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
        )
    );
}

function handleClearList() {
    const confirmed = window.confirm(
        "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
}


  return (
         <div>
               <Header name="School Software"/>
               <Content/>
               <Form onAddItems={handleAddItems} />
               <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}/>
               <Footer items={items} />
              
              
          
         </div>
  )
}

export default App
