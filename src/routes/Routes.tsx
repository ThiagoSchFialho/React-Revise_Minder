import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Dashboard from '../pages/Dashboard/Dashboard';
import StudyFormHandler from '../pages/StudyFormHandler/StudyFormHandler';
import MyStudies from '../pages/MyStudies/MyStudies';
import PastReviews from '../pages/PastReviews/PastReviews';
import Profile from '../pages/Profile/Profile';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/studyForm' element={<StudyFormHandler />} />
          <Route path='/studyForm/:id' element={<StudyFormHandler />} />
          <Route path='/myStudies' element={<MyStudies />} />
          <Route path='/pastReviews' element={<PastReviews />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;