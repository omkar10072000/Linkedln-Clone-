import { MdSearch } from 'react-icons/md';
import './searchstyle.css';
function SearchBar() {
  return (
    <div className='search'>
      <MdSearch />
      <input type='text' /> 
    </div>
  );
}

export default SearchBar;
