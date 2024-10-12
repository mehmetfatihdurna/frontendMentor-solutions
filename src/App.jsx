import {BrowserRouter, Route, Routes} from'react-router-dom'
import MortgageRepaymentCalculator from './components/MortgageRepaymentCalculator'
import HomePage from './components/HomePage';
import NoPage from './components/NoPage';
import GithubUserSearchApp from './components/GithubUserSearchApp';
import PlanetFactSite from './components/planetfactsite/PlanetFactSite';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/mortgage-repayment-calculator" element={<MortgageRepaymentCalculator />} />
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/github-user-search-app' element={<GithubUserSearchApp/>}></Route>
      <Route path='/planet-fact-site' element={<PlanetFactSite/>}></Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  )
}
