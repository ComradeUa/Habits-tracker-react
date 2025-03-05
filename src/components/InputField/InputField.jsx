import React from 'react';
import './InputField.scss';
import useHabit from '../../hooks/useHabit';

const InputField = () => {
  const { inputRef, habitsText, setHabitsText, handleAddHabits } = useHabit();
  return (
    <div className="parent-container">
      <div className="container">
        <div className="container-input">
          <input
            ref={inputRef}
            type="text"
            className="input-txt"
            placeholder="Skriv en vana"
            value={habitsText}
            onChange={(e) => setHabitsText(e.target.value)}
          />
          <button className="button-add" onClick={handleAddHabits}>
            Lägg till
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
