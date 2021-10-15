
import './App.css';
import CalendarPage from './components/CalendarPage/CalendarPage';
import WeekPage from './components/WeekPage/WeekPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1> meal planner</h1>
      <WeekPage />
    </div>
  );
}

export default App;
