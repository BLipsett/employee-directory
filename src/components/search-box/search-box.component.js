import React from 'react'

export default function SearchBox({ placeholder, handleChange }) {
    return (
        <div>
            <input 
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
            />
            
        </div>
    )
}
