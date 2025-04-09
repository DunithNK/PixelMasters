import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.jsx";
import ProfilePage from "./pages/ProfilePage";
import ExplorePage from "./pages/ExplorePage";
import Navbar from "./components/navbar";
import CourseManagementPage from "./pages/CourseManagement.jsx";
import SkillSharePage from "./pages/SkillSharePage.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/course-management" element={<CourseManagementPage/>}/>
        <Route path="/skill-share" element = {<SkillSharePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
