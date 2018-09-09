import React from 'react'

const SearchBox = ({ searchChange, onSearchChangeHandler }) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type="search" 
            placeholder="find a contact"
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox