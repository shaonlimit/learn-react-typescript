import './App.css';
import { GreetUser } from './components/GreetUser';
import Person from './components/Person';
import { ProductList } from './components/ProductList';

function App() {
  const personName = {
    firstName: 'Saiful',
    lastName: 'Shaon',
  };
  const allProduct = [
    { title: 'Rice', price: 10 },
    { title: 'Vegetable', price: 5 },
    { title: 'Fish', price: 6 },
  ];
  return (
    <div className='App'>
      <GreetUser name='Saiful' messaggeCount={10} isLoggedIn={false} />
      <Person personName={personName} />
      <ProductList allProduct={allProduct} />
    </div>
  );
}

export default App;
