import { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import * as Yelp from '../../util/Yelp';

export default function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const response = await Yelp.search(term, location, sortBy);
    setBusinesses(response);
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={ searchYelp } />
      <BusinessList businesses={ businesses } />
    </div>
  );
}
