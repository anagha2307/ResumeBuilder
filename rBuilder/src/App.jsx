
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route ,BrowserRouter} from 'react-router-dom'; 

import LandingPage from './pages/LandingPage';
import ResumeGen from './pages/ResumeGen';
import UserForm from './pages/UserForm';
import History from './pages/History';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path ='/' element={<LandingPage/>} />
        <Route path ='/resume' element={<ResumeGen/>} />
        <Route path ='/UserForm' element={<UserForm/>} />
        <Route path ='/History' element={<History/>} />
        <Route path ='/*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

