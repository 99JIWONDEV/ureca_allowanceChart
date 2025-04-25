import './App.css'
import Header from './components/Header'
import MoneyDashboard from './components/MoneyDashboard'
import MoneyDesc from './components/MoneyDesc'
import MoneyInput from './components/MoneyInput'
import TotalMoney from './components/TotalMoney'

function App() {
  return (
    <main className="mw">
      <Header />
      <div className="sub-header">
        <TotalMoney />
        <MoneyDashboard />
      </div>
      <div className="content">
        <MoneyInput />
        <MoneyDesc />
      </div>
    </main>
  )
}

export default App
