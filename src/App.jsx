import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import MoneyDashboard from './components/MoneyDashboard'
import MoneyDesc from './components/MoneyDesc'
import MoneyInput from './components/MoneyInput'
import TotalMoney from './components/TotalMoney'

function App() {
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const localData = localStorage.getItem('transactions')
    if (localData) {
      setData(JSON.parse(localData))
    }
  }, [toggle])

  return (
    <main className="mw">
      <Header />
      <div className="sub-header">
        <TotalMoney data={data} />
        <MoneyDashboard data={data} />
      </div>
      <div className="content">
        <MoneyInput setToggle={setToggle} />
        <MoneyDesc data={data} setToggle={setToggle} />
      </div>
    </main>
  )
}

export default App
