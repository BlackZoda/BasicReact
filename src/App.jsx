import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {

    const [ items, setItems ] = useState(
        JSON.parse(localStorage.getItem('shoppinglist')));

    const [newItem, setNewItem] = useState('');

    const [search, setSearch] = useState('');

    const setAndSaveItems = (items) => {
        setItems(items);
        localStorage.setItem('shoppinglist', JSON.stringify(items));
    }

    const addItem = (item) => {
        const id = items.length ? items[items.length-1].id + 1 : 1;
        const tempNewItem = { id, checked: false, item };
        const listItems = [...items, tempNewItem];
        setAndSaveItems(listItems);
    }

    const handleCheck = (id) => {
        const listItems = items.map(i => i.id === id
            ? { ...i, checked: !i.checked } : i);
        setAndSaveItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter(i => i.id !== id);
        setAndSaveItems(listItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    }

    return (
        <div className="App">
            <Header title="ToDo List" />
            <SearchItem search={search} setSearch={setSearch} />
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}/>
            <Content
                items={items.filter(i => i.item.toLowerCase()
                    .includes(search.toLowerCase()))}
                handleCheck={handleCheck}
                handleDelete={handleDelete} />
            <Footer
                length={items.length}/>
        </div>
    )
}

export default App
