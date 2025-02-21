import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Dashboard from '../pages/Dashboard/Dashboard';
import StudyForm from '../pages/StudyForm/StudyForm';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/studyForm' element={<StudyForm />} />
        <Route path='/studyForm/:id' element={<StudyForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;