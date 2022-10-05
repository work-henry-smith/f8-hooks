import './App.css';
import CartCounting from './Hook-State-1';
import RandomGift from './Hook-State-2';
import FormSubmitting from './Hook-State-3';
import RadioCheck from './Hook-State-4';
import CheckBox from './Hook-State-5';

function App() {
  return (
    <div className="App">
      <h1>Learning React Hooks!</h1>
      <CartCounting />
      <RandomGift />
      <FormSubmitting />
      <RadioCheck />
      <CheckBox />
    </div>
  );
}

export default App;
