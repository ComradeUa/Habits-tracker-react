import React from 'react';
import './ActionButtons.scss';
const ActionButtons = React.memo(function ActionButtons({ onEdit, onDelete }) {
  return (
    <div className="actions-buttons-container">
      <button className="redigera-button" onClick={onEdit}>
        Redigera
      </button>
      <button className="ta-bort-button" onClick={onDelete}>
        Ta bort
      </button>
    </div>
  );
});

ActionButtons.displayName = 'ActionButtons';

export default ActionButtons;
