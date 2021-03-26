import './App.css';
import Main from './Main';
import { TransactionProvider } from './globalContext';
function App() {
  return (
    <TransactionProvider>
      <div>
        <Main />
      </div>
    </TransactionProvider>

  );
}

export default App;
