const Content = () => {

    const handleNameChange = () => {
        const names = ["Ivar", "Eivind", "Gunnar", "Siri"];
        const rndInt = Math.floor(Math.random() * names.length);
        return names[rndInt];
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content;
