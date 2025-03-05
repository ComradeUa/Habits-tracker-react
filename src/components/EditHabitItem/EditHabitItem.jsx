import '../HabitList/HabitList.scss';
import React from 'react';
const EditHabitItem = React.memo(({ newText, setNewText, handleSaveEdit }) => {
  return (
    <div className="edit-container">
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        className="edit-input"
        placeholder="Skriv det nya namnet på vanan"
      />
      <button onClick={handleSaveEdit} className="save-button">
        Spara
      </button>
    </div>
  );
});
export default EditHabitItem;
