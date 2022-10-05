import './App.css';
import CartCounting from './Hook-State-1';
import RandomGift from './Hook-State-2';
import FormSubmitting from './Hook-State-3';
import RadioCheck from './Hook-State-4';
import TodoList from './Hook-State-6';
import Toggle from './Hook-State-7';
import TitleSetting from './Hook-Effect-1';

function App() {
  return (
    <div className="App">
      <h1>Learning React Hooks!</h1>
      <CartCounting />
      <RandomGift />
      <FormSubmitting />
      <RadioCheck />
      <TodoList />
      <Toggle />
      <TitleSetting />
    </div>
  );
}

export default App;
