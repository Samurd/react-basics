import './App.css'
import { CountCard } from './components/CountCard';
import { CountCardHook } from './components/CountCardHook';
import { CountCardReducer } from './counter-reducer/CountCardReducer';

function App() {

  return (
    <main>
      <CountCard />
      <CountCardHook />
      <CountCardReducer />
    </main>
  )
}

export default App
