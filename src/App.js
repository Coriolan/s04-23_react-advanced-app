import './App.css';
import Counter from './Counter';
import Layout from './Layout';
import MainContent from './MainContent';
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
      <Layout>
        <MainContent />
      </Layout>
    </div>
  );
}

export default App;
