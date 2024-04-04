import { FaSearch } from "react-icons/fa";

function Search (){
    return (
        <div className="flex mb-5">
            <input placeholder='Search' className='p-2 search-bar text-center text-lg transform translate-x-[10px]'></input>
            <FaSearch size={20} className="translate translate-x-[-25px] translate-y-[14px]"/>
      </div>
    );
}

export default Search