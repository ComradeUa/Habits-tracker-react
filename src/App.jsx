import './App.scss';
import Header from './components/Header/Header';
import InputField from './components/InputField/InputField';
import HabitList from './components/HabitList/HabitList';
import ProgressBar from './components/ProgressBar/ProgressBar';

function App() {
  return (
    <>
      <Header />
      <InputField />
      <HabitList />
      <ProgressBar />
    </>
  );
}

export default App;
