import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function Search({handleSearchNote}){
    return (
        <div className="search">
            <SearchIcon className="search-icons" size="1.3em"/>
            <input 
            onChange={(e)=> handleSearchNote(e.target.value)}
            type="text" placeholder="Search here..."
            />
        </div>
    )
}

export default Search