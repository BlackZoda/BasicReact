import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Content = () => {
    const [ items, setItems ] = useState([
        {
            id: 1,
            checked: false,
            item: "Bread", 
        },
        {
            id: 2,
            checked: false,
            item: "Milk",
        },
        {
            id: 3,
            checked: false,
            item: "Pasta",
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
        <main>
            {items.length ? (
                <ul>
                    {items.map(i => (
                        <li className="item" key={i.id}>
                        <input
                        type="checkbox"
                        onChange={() => handleCheck(i.id)}
                        checked={i.checked}
                        />
                        <label
                        onDoubleClick={() => handleCheck(i.id)}
                        style={i.checked
                            ? { textDecoration: 'line-through' }
                            : null }>
                        {i.item}
                        </label>
                        <FaTrash
                        onClick={() => handleDelete(i.id)}
                        role="button"
                        tabIndex="0" />
                        </li>
                    )
                    )}
                </ul>
            ) : (
                <p style={{ marginTop: '1rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content;
