import React, { useState, useEffect } from 'react';
import "./customSelect.css"

export default function CustomSelect({ options, placeholder, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  useEffect(function () {
    function handleOutsideClick(event) {
      if (isOpen && !event.target.closest('.custom-select')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return function() {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  function handleSelect(option) {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  return (
    <div className="custom-select-wrapper">
      <div className={`custom-select ${isOpen ? 'opened' : ''} ${className}`}>
        <span className="custom-select-trigger" onClick={() => setIsOpen(!isOpen)}>
          {selectedOption}
        </span>
        <div className="custom-options">
          {options.map((option, index) => (
            <span
              key={index}
              className={`custom-option ${option.label === selectedOption ? 'selection' : ''}`}
              onClick={() => handleSelect(option)}
              data-value={option.value}
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
