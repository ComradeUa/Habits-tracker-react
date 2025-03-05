import ActionButtons from '../ActionButtons/ActionButtons';
import '../HabitList/HabitList.scss';
import React from 'react';
const HabitItem = React.memo(
  ({ habit, editId, handleToggleHabit, handleStartEdit, handleDeleteHabit }) => {
    return (
      <div className="days-container">
        <div className="habit-container">
          <span>{habit.text}</span>
          <div className="toggle-container">
            {Object.keys(habit.days).map((day) => (
              <label className="day-label" key={day}>
                <input
                  type="checkbox"
                  checked={habit.days[day]}
                  onChange={() => handleToggleHabit(habit.id, day)}
                />
                <span className="days-span">{day}</span>
              </label>
            ))}
          </div>
        </div>
        <ActionButtons
          onEdit={() => handleStartEdit(habit.id, habit.text)}
          onDelete={() => handleDeleteHabit(habit.id)}
        />
      </div>
    );
  },
);

export default HabitItem;
