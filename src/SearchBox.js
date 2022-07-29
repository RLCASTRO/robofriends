import React from "react";

const SearchBox = ( {searchfield, searchChange} ) => {
    return (
        <div >
            <input 
                type="search" 
                className='pa3 b--green bg-lightest-blue' 
                placeholder="Search Robots"
                onChange={searchChange}
                />
        </div>

    );
}

export default SearchBox;