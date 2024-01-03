import { useState } from 'react';

const Content = () => {
    const [ name, setName ] = useState('Ivar');
    const [ count, setCount ] = useState(0);

    const handleNameChange = () => {
        const names = ["Ivar", "Eivind", "Gunnar", "Siri"];
        const rndInt = Math.floor(Math.random() * names.length);
        setName(names[rndInt]);
    }

    const handleCount = () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }

    const getCount = () => {
        console.log(count);
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleNameChange} type="button">
                Change name
            </button>
            <button onClick={handleCount} type="button">
                Increase Count
            </button>
            <button onClick={getCount} type="button">
                Get Count
            </button>
        </main>
    )
}

export default Content;
