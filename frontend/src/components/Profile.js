import React, { useState } from "react";
import { Box, Paper, Card, CardContent, TextField, Typography, Button } from "@mui/material";
import NavBar from "./NavBar";
import Resume from "./Resume";
import ProfileResume from "./ProfileResume";

const Profile = () => {

  const handleSubmit = () => {

  };


  const [values, setValues] = useState({
    // Profile-Information
    firstname: "john",
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
  });

  const handleChange = (field, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };




  return (
    <>
      <NavBar />
      <div style={{
        background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)',
        fontFamily: "'Roboto Slab', serif",
      }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="15vh"
        >
          <Paper
            style={{
              backgroundColor: '#4C667E',
              color: "white",
              padding: "10px",
              maxWidth: 900,
              width: "100%",
              marginLeft: -900,
              fontSize: 20
            }}
          >
            PERSONAL DETAILS
          </Paper>
        </Box>
        <Card style={{ marginTop: -20, padding: "10px", maxWidth: 900, width: "100%", marginLeft: 50 }}>
          <CardContent>



            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>First Name</Typography>
                <TextField
                  label="First Name"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.firstname}
                  onChange={(e) => handleChange("firstname", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Last Name</Typography>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.lastname}
                  onChange={(e) => handleChange("lastname", e.target.value)}
                />
              </div>
            </div>







            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Email</Typography>
                <TextField
                  label="Email"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px",marginLeft: -300 }}>Phone</Typography>
                <TextField
                  label="Phone"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Website</Typography>
                <TextField
                  label="Website"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft: -300}}>GitHub</Typography>
                <TextField
                  label="GitHub"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.github}
                  onChange={(e) => handleChange("github", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px",marginLeft: -300 }}>LinkedIn</Typography>
                <TextField
                  label="LinkedIn"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.linkedin}
                  onChange={(e) => handleChange("linkedin", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft: -300}}>Twitter</Typography>
                <TextField
                  label="Twitter"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.twitter}
                  onChange={(e) => handleChange("twitter", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px",marginLeft: -300}}>Facebook</Typography>
                <TextField
                  label="Facebook"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.facebook}
                  onChange={(e) => handleChange("facebook", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft: -300}}>Instagram</Typography>
                <TextField
                  label="Instagram"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.instagram}
                  onChange={(e) => handleChange("instagram", e.target.value)}
                />
              </div>
            </div>


          </CardContent>
        </Card>
        {/* <Resume firstName={values.firstname}/> */}
        <ProfileResume values={values} />
      </div>
    </>
  );
};

export default Profile;


