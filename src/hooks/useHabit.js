import { useState, useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  habitsChangeName,
  habitsToggle,
  habitsDelete,
  habitsAdd,
} from '../features/habits/habitsSlice';
import { v4 as uuidv4 } from 'uuid';

const useHabits = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState('');
  const [habitsText, setHabitsText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem('habits'));
    if (storedHabits) {
      storedHabits.forEach((habit) => {
        dispatch(habitsAdd(habit));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const handleAddHabits = useCallback(() => {
    if (habitsText.trim()) {
      const habitsExists = habits.some((habit) => habit.text === habitsText);
      if (habitsExists) {
        alert(`En vana med ett namn som det finns redan`);
        return;
      }
      dispatch(
        habitsAdd({
          id: uuidv4(),
          text: habitsText,
          days: {
            Må: false,
            Tl: false,
            On: false,
            Tu: false,
            Fr: false,
            Lö: false,
            Sö: false,
          },
        }),
      );
      setHabitsText('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [habitsText, habits, dispatch]);

  const handleToggleHabit = useCallback(
    (id, day) => {
      dispatch(habitsToggle({ id, day }));
    },
    [dispatch],
  );

  const handleStartEdit = useCallback((id, currentText) => {
    setEditId(id);
    setNewText(currentText);
  }, []);

  const handleSaveEdit = useCallback(() => {
    if (newText.trim() && editId !== null) {
      dispatch(habitsChangeName({ id: editId, newText }));
      setEditId(null);
      setNewText('');
    }
  }, [newText, editId, dispatch]);

  const handleDeleteHabit = useCallback(
    (id) => {
      dispatch(habitsDelete({ id }));
    },
    [dispatch],
  );

  return {
    habits,
    editId,
    newText,
    inputRef,
    habitsText,
    setHabitsText,
    setNewText,
    handleToggleHabit,
    handleStartEdit,
    handleSaveEdit,
    handleDeleteHabit,
    handleAddHabits,
  };
};

export default useHabits;
