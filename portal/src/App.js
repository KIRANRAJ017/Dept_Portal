import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StuLogin from './components/Student/Stu_Login';
import FacLogin from './components/Faculty/Fac_Login';
import AdmLogin from "./components/Admin/Adm_Login"
import AdmHome from './components/Admin/Admhome/Adm_Home';
import FacHome from './components/Faculty/Fachome/Fac_Home';
import StuHome from './components/Student/Stuhome/Stu_Home';
import StuInternal from "./components/Student/Stuhome/Stu_Internal"
import StuReport from "./components/Student/Stuhome/Stu_Report"
import StuQuery from "./components/Student/Stuhome/Stu_Query"
import StuAchivement from "./components/Student/Stuhome/Stu_Achivements"
import FacInternal from "./components/Faculty/Fachome/Fac_Internal"
import FacReport from "./components/Faculty/Fachome/Fac_Report"
import FacQuery from "./components/Faculty/Fachome/Fac_Query"
import FacAchivement from "./components/Faculty/Fachome/Fac_Achivements"
import Academics from './components/Home/Academics';
import Sports from './components/Home/Sports';
import Events from './components/Home/Events';
import Gallery from './components/Home/Gallery';
import Staffs from './components/Home/Staffs';
import EventPortal from './components/Home/Events';
import Members from "./components/Admin/Admhome/Members";
import AdmReport from "./components/Admin/Admhome/AdmReport"
import Queries from './components/Admin/Admhome/AdmQueries';

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/student_login' element={<StuLogin/>}></Route>
      <Route path='/faculty_login' element={<FacLogin/>}></Route>
      <Route path='/admin_login' element={<AdmLogin/>}></Route>
      <Route path='/admin_home' element={<AdmHome/>}></Route>
      <Route path='/faculty_home' element={<FacHome/>}></Route>
      <Route path='/student_home' element={<StuHome/>}></Route>
      <Route path='/student_internal' element={<StuInternal/>}></Route>
      <Route path='/student_report' element={<StuReport/>}></Route>
      <Route path='/student_query' element={<StuQuery/>}></Route>
      <Route path='/student_achivement' element={<StuAchivement/>}></Route>
      <Route path='/faculty_internal' element={<FacInternal/>}></Route>
      <Route path='/faculty_report' element={<FacReport/>}></Route>
      <Route path='/faculty_query' element={<FacQuery/>}></Route>
      <Route path='/faculty_achivement' element={<FacAchivement/>}></Route>
      <Route path='/admin_members' element={<Members/>}></Route>
      <Route path='/admin_report' element={<AdmReport/>}></Route>
      <Route path='/admin_query' element={<Queries/>}></Route>
      <Route path='/academics' element={<Academics/>}></Route>
      <Route path='/sports' element={<Sports/>}></Route>
      <Route path='/events' element={<EventPortal/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/staffs' element={<Staffs/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;