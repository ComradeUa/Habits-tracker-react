import { useSelector } from 'react-redux';
import './ProgressBar.scss';
function ProgressBar() {
  const habits = useSelector((state) => state.habits);
  const calculateOverallProgress = () => {
    const totalDays = habits.reduce((acc, habit) => acc + Object.keys(habit.days).length, 0);
    const completedDays = habits.reduce(
      (acc, habit) => acc + Object.values(habit.days).filter(Boolean).length,
      0,
    );
    return (completedDays / totalDays) * 100;
  };
  if (habits.length === 0) {
    return null;
  }
  const progress = calculateOverallProgress();
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
export default ProgressBar;
