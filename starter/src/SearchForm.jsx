import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);

    console.log('form', searchTerm);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
