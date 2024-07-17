import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from'react-router-dom'
import App from './App.jsx'
import MortgageRepaymentCalculator from './components/MortgageRepaymentCalculator.jsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/mortgage-repayment-calculator' element={<MortgageRepaymentCalculator/>}></Route>
    </Routes>
  </BrowserRouter>
)
