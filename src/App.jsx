import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {

    const [ items, setItems ] = useState([
        {
            id: 1,
            checked: false,
            item: "Go for a walk", 
        },
        {
            id: 2,
            checked: false,
            item: "Buy groceries",
        },
        {
            id: 3,
            checked: false,
            item: "Coding practice",
        },
    ]);

    const handleCheck = (id) => {
        const listItems = items.map(i => i.id === id
            ? { ...i, checked: !i.checked } : i);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter(i => i.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    return (
        <div className="App">
            <Header title="ToDo List" />
            <Content
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete} />
            <Footer
                length={items.length}/>
        </div>
    )
}

export default App
