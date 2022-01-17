import React, { useState, useEffect, useRef } from 'react';

const AutoComplete = ({ options = ['Oranges', 'Bananas', 'Apples'] }) => {
  const [value, setValue] = useState('');
  const [showSuggestion, setShowSuggestions] = useState(false);

  const autoCompleteRef = useRef();
  const ulRef = useRef();

  const suggestions = options.filter(option =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  const { length } = suggestions;

  const handleChange = event => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSuggestionClick = suggestion => {
    setValue(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        autoCompleteRef.current &&
        !autoCompleteRef.current.contains(event.target)
      )
        setShowSuggestions(false);
    };
    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="autocomplete" ref={autoCompleteRef}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={value}
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestion && (
        <ul className="suggestions" ref={ulRef}>
          {suggestions.map(sug => {
            return (
              <li key={sug} onClick={() => handleSuggestionClick(sug)}>
                {sug}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
