const SearchItem = ({ search, setSearch }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='seach'>Seach</label>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Seach Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
        </form>
    )
}

export default SearchItem;
