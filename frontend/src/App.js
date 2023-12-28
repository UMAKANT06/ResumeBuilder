import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // Placeholder data, replace with actual data
  const values = {
    // Profile-Information
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    website: "https://example.com",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    facebook: "https://www.facebook.com/johndoe",
    instagram: "https://www.instagram.com/johndoe",

    // Education Information
    college: "University of Example",
    fromyear1: "2010",
    toyear1: "2014",
    qualification1: "Bachelor's Degree",
    description1: "Some description",
    school: "High School Example",
    fromyear2: "2006",
    toyear2: "2010",
    qualification2: "High School Diploma",
    description2: "Some description",

    // Project Information...
    title1: "Project 1",
    link1: "https://project1.example.com",
    projectDescription1: "Description of Project 1",
    title2: "Project 2",
    link2: "https://project2.example.com",
    projectDescription2: "Description of Project 2",
    title3: "Project 3",
    link3: "https://project3.example.com",
    projectDescription3: "Description of Project 3",

    // Experience Information
    institute1: "Company 1",
    position1: "Software Engineer",
    duration1: "2 years",
    experienceDescription1: "Worked on various projects...",
    institute2: "Company 2",
    position2: "Web Developer",
    duration2: "1 year",
    experienceDescription2: "Developed web applications...",

    // Extra Information
    skill1: "JavaScript",
    skill2: "React",
    skill3: "Node.js",
    skill4: "HTML",
    skill5: "CSS",
    skill6: "Git",
    interest1: "Reading",
    interest2: "Traveling",
    interest3: "Cooking",
    interest4: "Music",
    interest5: "Photography",
    interest6: "Gaming",
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
