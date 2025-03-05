import './HabitList.scss';
import useHabits from '../../hooks/useHabit';
import EditHabitItem from '../EditHabitItem/EditHabitItem';
import HabitItem from '../HabitItem/HabitItem';
function HabitList() {
  const {
    habits,
    editId,
    newText,
    setNewText,
    handleStartEdit,
    handleSaveEdit,
    handleToggleHabit,
    handleDeleteHabit,
  } = useHabits();

  return (
    <div className="main-container">
      <ul>
        {habits.map((habit) => (
          <li key={habit.id} className="list-container">
            {editId === habit.id ? (
              <EditHabitItem
                newText={newText}
                setNewText={setNewText}
                handleSaveEdit={handleSaveEdit}
              />
            ) : (
              <HabitItem
                habit={habit}
                editId={editId}
                handleToggleHabit={handleToggleHabit}
                handleStartEdit={handleStartEdit}
                handleDeleteHabit={handleDeleteHabit}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitList;
