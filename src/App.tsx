import './App.css';
import Button from './components/Button';
import { GreetUser } from './components/GreetUser';
import { Header } from './components/Header';
import { Oscar } from './components/Oscar';
import Person from './components/Person';
import { ProductList } from './components/ProductList';
import Status from './components/Status';
import StyleComponent from './components/StyleComponent';
import UseState from './components/UseState';

function App() {
  const personName = {
    firstName: 'Saiful Islam',
    lastName: 'Shaon',
  };
  const allProduct = [
    { title: 'Rice', price: 10 },
    { title: 'Vegetable', price: 5 },
    { title: 'Fish', price: 6 },
  ];
  const handleClick = () => {
    console.log('Handle click function is working');
  };
  const btnStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '5px',
  };
  return (
    <div className='App'>
      {/* This component shows a basi props */}
      <GreetUser name='Shaon' messaggeCount={10} isLoggedIn={true} />
      <GreetUser name='Shaon' messaggeCount={10} isLoggedIn={false} />

      {/* This component shows an object props */}
      <Person personName={personName} />

      {/* This component shows an array props */}
      <ProductList allProduct={allProduct} />

      {/* This component shows a conditional props */}
      <Status status='success' />

      {/* This component shows a children text props */}
      <Header>This is Header</Header>

      {/* This component shows a children component props */}
      <Oscar>
        <Header>This is oscar!</Header>
      </Oscar>

      {/* This component shows a if i don't want to pass a prop | optional props */}
      <GreetUser name='Saiful' isLoggedIn={true} />

      {/* passing style as a props */}
      <StyleComponent btnStyle={btnStyle} />

      {/* event handler is passing as props without parameter */}
      <Button handleClick={handleClick} />

      <UseState />
    </div>
  );
}

export default App;
