import {BrowserRouter, Route, Routes} from'react-router-dom'
import MortgageRepaymentCalculator from './components/MortgageRepaymentCalculator'
import HomePage from './components/HomePage';
import NoPage from './components/NoPage';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/mortgage-repayment-calculator" element={<MortgageRepaymentCalculator />} />
      <Route path='/' element={<HomePage/>}></Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  )
}
