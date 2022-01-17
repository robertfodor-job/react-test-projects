import React, { useState, useEffect, useRef } from 'react';

const AutoComplete = ({ options = ['Oranges', 'Bananas', 'Apples'] }) => {
  const [value, setValue] = useState('');
  const [showSuggestion, setShowSuggestions] = useState(false);

  const autoCompleteRef = useRef();
  const liRef = useRef();
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
    console.log(liRef);
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

  useEffect(() => {
    if (!ulRef) ulRef.current.style.height = `0px`;
    if (ulRef === 0) ulRef.current.style.height = `${16 * length}px`;
    console.log(ulRef);

    console.log(length);
  }, [showSuggestion, length]);

  // useEffect(() => {
  //   console.log(liRef);
  // }, [liRef]);

  // useEffect(() => {
  //   const linksHeight = liRef.current.getBoundingClientRect().height;
  //   if (linksHeight) {
  //     ulRef.current.style.height = `${linksHeight}px`;
  //   } else ulRef.current.style.height = 0;
  // }, [showSuggestion]);

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
              <li
                key={sug}
                onClick={() => handleSuggestionClick(sug)}
                onLoad={e => console.log(e)}
                ref={liRef}
              >
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
