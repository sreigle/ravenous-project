import { useState } from 'react';
import './SearchBar.css';


export default function SearchBar(props) {
  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const getSortByClass = (sortByOption) => {
    return sortBy === sortByOption ? 'active' : '';
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption)
  }

  const handleTermChange = ({target}) => {
    setTerm(target.value);
  };

  const handleLocationChange = ({target}) => {
    setLocation(target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.searchYelp(term, location, sortBy);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={ sortByOptionValue }
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          { sortByOption }
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          { renderSortByOptions() }
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={ handleTermChange } value={ term } />
        <input placeholder="Where?" onChange={ handleLocationChange } value={ location }  />
      </div>
      <div className="SearchBar-submit">
        <a onClick={ handleSearch }>Let's Go</a>
      </div>
    </div>
  );
}
