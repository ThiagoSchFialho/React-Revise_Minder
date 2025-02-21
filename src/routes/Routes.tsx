import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Dashboard from '../pages/Dashboard/Dashboard';
import StudyForm from '../pages/StudyForm/StudyForm';
import MyStudies from '../pages/MyStudies/MyStudies';
import PastReviews from '../pages/PastReviews/PastReviews';

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
        <Route path='/myStudies' element={<MyStudies />} />
        <Route path='/pastReviews' element={<PastReviews />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;