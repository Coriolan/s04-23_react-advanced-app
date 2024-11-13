import './App.css';
import Counter from './Counter';
import NewCounter from './NewCounter';
import NewUserInfo from './NewUserInfo';
import UserInfo from './UserInfo';

function App() {
  return (
    <div className="App">
      <Counter />
      <NewCounter />
      <UserInfo />
      <NewUserInfo />
    </div>
  );
}

export default App;
