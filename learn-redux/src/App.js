import './App.css';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  return (
    <section className='container'>
      <Profile/>
      <Login/>
      <ChangeColor/>
    </section>
  );
}

export default App;
