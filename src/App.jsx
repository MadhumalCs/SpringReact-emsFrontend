import './App.css';
import EmployeeComp from './componenets/EmployeeComp';
import FooterComp from './componenets/FooterComp';
import HeaderComp from './componenets/HeaderComp';
import ListEmpComp from './componenets/ListEmpComp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComp />
        <Routes>
          <Route path='/' element={<ListEmpComp />}></Route>
          <Route path='/employees' element={<ListEmpComp />}></Route>
          <Route path='/add-employee' element={<EmployeeComp />}></Route>
          <Route path='/edit-employee/:id' element={<EmployeeComp />}></Route>
        </Routes>
    
        <FooterComp />
      </BrowserRouter>
    </>
  );
}

export default App;
