import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValueRef = useRef('');

  const searchCocktailHandler = () => {
    setSearchTerm(searchValueRef.current.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  React.useEffect(() => {
    searchValueRef.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValueRef}
            onChange={searchCocktailHandler}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
