import './App.css';
import { GreetUser } from './components/GreetUser';

function App() {
  return (
    <div className='App'>
      <GreetUser name='Saiful' count={30} />
    </div>
  );
}

export default App;
