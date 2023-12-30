import React, { useState } from "react";
import { Box, Paper, Card, CardContent, TextField, Typography, Button , CircularProgress} from "@mui/material";
import NavBar from "./NavBar";
import Resume from "./Resume";
import ProfileResume from "./ProfileResume";
import axios from 'axios';
import { responsiveProperty } from "@mui/material/styles/cssUtils";

const Profile = () => {
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


  const question = "Provide a brief description of my experience working at Google as a software engineer for 3 years for my resume (30 words)";




  const [Tech1, setTech1] = useState("");
  const [Tech2, setTech2] = useState("");
  const [Tech3, setTech3] = useState("");

  const [ExperienceDescription2, setExperienceDescription2] = useState("");
  const [ExperienceDescription1, setExperienceDescription1] = useState("");
  const [ProjectDescription1, setProjectDescription1] = useState("");
  const [ProjectDescription2, setProjectDescription2] = useState("");
  const [ProjectDescription3, setProjectDescription3] = useState("");


  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [loading5, setLoading5] = useState(false);



  const askGPT1 = async (question) => {
    setLoading1(true);
    try {
      const response = await axios.post(' /ask-gpt', { question });
      setProjectDescription1(response.data.answer);
      console.log(response.data.answer);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setLoading1(false);
    }, 2000);
  };


  const askGPT2 = async (question) => {
    setLoading2(true);
    try {
      const response = await axios.post(' /ask-gpt', { question });
      setProjectDescription2(response.data.answer);
      console.log(response.data.answer);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      setLoading2(false);
    }, 2000);
  };

  const askGPT = async (question) => {
    setLoading3(true);
    try {
      const response = await axios.post(' /ask-gpt', { question });
      setProjectDescription3(response.data.answer);
      console.log(response.data.answer);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      setLoading3(false);
    }, 2000);
  };



  const askGPT3 = async (question) => {
    setLoading4(true);
    try {
      const response = await axios.post(' /ask-gpt', { question });
      setExperienceDescription1(response.data.answer);
      console.log(response.data.answer);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setLoading4(false);
    }, 2000);
  };

  const askGPT4 = async (question) => {
    setLoading5(true);
    try {
      const response = await axios.post(' /ask-gpt', { question });
      setExperienceDescription2(response.data.answer);
      console.log(response.data.answer);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setLoading5(false);
    }, 2000);
  };






  return (
    <>
      <NavBar />
      <div style={{
        background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)',
        fontFamily: "'Roboto Slab', serif",
      }}>
        <Card  style={{
            marginTop: 0,
            padding: "10px",
            maxWidth: 1000,
            // maxHeight:1400,
            width: "100%",
            marginLeft: -10,
            height: 2000, // Set a fixed height for the scrollable area
            overflowY: "auto",
         // Allow vertical scrolling
          }}>
          <CardContent>
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
              marginLeft: 10,
              fontSize: 20
            }}
          >
            PERSONAL DETAILS
          </Paper>
        </Box>
        <Card style={{ marginTop: -20, padding: "10px", maxWidth: 900, width: "100%", marginLeft: 30 }}>
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
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Phone</Typography>
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
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>GitHub</Typography>
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
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>LinkedIn</Typography>
                <TextField
                  label="LinkedIn"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.linkedin}
                  onChange={(e) => handleChange("linkedin", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Twitter</Typography>
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
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Facebook</Typography>
                <TextField
                  label="Facebook"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.facebook}
                  onChange={(e) => handleChange("facebook", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Instagram</Typography>
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
              marginLeft: 10,
              fontSize: 20
            }}
          >
            EDUCATIONAL DETAILS
          </Paper>
        </Box>

        <Card style={{ marginTop: -20, padding: "10px", maxWidth: 900, width: "100%", marginLeft: 30 }}>
          <CardContent>



            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>College</Typography>
                <TextField
                  label="College"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.college}
                  onChange={(e) => handleChange("college", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>From year</Typography>
                <TextField
                  label="From year1"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.fromyear1}
                  onChange={(e) => handleChange("fromyear1", e.target.value)}
                />
              </div>
            </div>







            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>To Year</Typography>
                <TextField
                  label="To year1"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.toyear1}
                  onChange={(e) => handleChange("toyear1", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Qualification</Typography>
                <TextField
                  label="Qualification"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.qualification1}
                  onChange={(e) => handleChange("qualification1", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Description</Typography>
                <TextField
                  label="Description"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.description1}
                  onChange={(e) => handleChange("description1", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>School</Typography>
                <TextField
                  label="School"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.school}
                  onChange={(e) => handleChange("school", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>From Year</Typography>
                <TextField
                  label="From Year"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.fromyear2}
                  onChange={(e) => handleChange("fromyear2", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>To Year</Typography>
                <TextField
                  label="To Year"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.toyear2}
                  onChange={(e) => handleChange("toyear2", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Qualification</Typography>
                <TextField
                  label="Qualification"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.qualification2}
                  onChange={(e) => handleChange("qualification2", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Description</Typography>
                <TextField
                  label="Description"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.description2}
                  onChange={(e) => handleChange("description2", e.target.value)}
                />
              </div>
            </div>


          </CardContent>
        </Card>
        




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
              marginLeft: 10,
              fontSize: 20
            }}
          >
            PROJECTS
          </Paper>
        </Box>

        <Card style={{ marginTop: -20, padding: "10px", maxWidth: 900, width: "100%", marginLeft: 30 }}>
          <CardContent>



            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Title</Typography>
                <TextField
                  label="Title"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.title1}
                  onChange={(e) => handleChange("title1", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Link</Typography>
                <TextField
                  label="Link"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.link1}
                  onChange={(e) => handleChange("link1", e.target.value)}
                />
              </div>
            </div>







            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -200 }}>Project Description</Typography>
                <TextField
                  label="Project Description"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.projectDescription1}
                  onChange={(e) => handleChange("projectDescription1", e.target.value)}
                />
              </div>

              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -200 }}>Technologies Used</Typography>
                <TextField
                  label="Technologies used"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={Tech1}
                  onChange={(e) => setTech1(e.target.value)}
                />
              </div>
            </div>

            
            <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -30 }}>AI Description</Typography>
            <TextField
              label="output"
              variant="outlined"
              style={{ width: 800 }}
              multiline
              rows={4}
              value={ProjectDescription1}
              // onChange={(e) => handleChange("experienceDescription2", e.target.value)}
              onChange={(e) => setProjectDescription1(e.target.value)}
            />
            <Button  style={{backgroundColor:'#4C667E' ,marginTop:10,color: 'white' ,marginLeft:-15}} onClick={() => askGPT1(`Can you provide a concise description of my project named ${values.title1} using ${Tech1} for my resume? Highlight key achievements and skills in about 30 words.`)} >
            {loading1 ? <CircularProgress size={24} style={{color:'white'}} /> : 'MAGIC'}
            </Button>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" ,marginTop:20}}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Title</Typography>
                <TextField
                  label="Title"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.title2}
                  onChange={(e) => handleChange("title2", e.target.value)}
                />
              </div>

              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Link</Typography>
                <TextField
                  label="Link"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.link2}
                  onChange={(e) => handleChange("link2", e.target.value)}
                />
              </div>


            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -200 }}>Project Description</Typography>
                <TextField
                  label="Project Description"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.projectDescription2}
                  onChange={(e) => handleChange("projectDescription2", e.target.value)}
                />
              </div>

              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -200 }}>Technologies Used</Typography>
                <TextField
                  label="Technologies used"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={Tech2}
                  onChange={(e) => setTech2(e.target.value)}
                />
              </div>
            </div>

            <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -30 }}>AI Description</Typography>
            <TextField
              label="output"
              variant="outlined"
              style={{ width: 800 }}
              multiline
              rows={4}
              value={ProjectDescription2}
              // onChange={(e) => handleChange("experienceDescription2", e.target.value)}
              onChange={(e) => setProjectDescription2(e.target.value)}
            />
            <Button style={{backgroundColor:'#4C667E' ,marginTop:10,color: 'white',marginLeft:-15}} onClick={() => askGPT2(`Can you provide a concise description of my project named ${values.title2} using ${Tech2} for my resume? Highlight key achievements and skills in about 30 words.`)} >
            {loading2 ? <CircularProgress size={24} style={{color:'white'}} /> : 'MAGIC'}
            </Button>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px",marginTop:20 }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Title</Typography>
                <TextField
                  label="Title"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.title3}
                  onChange={(e) => handleChange("title3", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Link</Typography>
                <TextField
                  label="Link"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.link3}
                  onChange={(e) => handleChange("link3", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -200 }}>Project Description</Typography>
                <TextField
                  label="Project Description"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.projectDescription3}
                  onChange={(e) => handleChange("projectDescription3", e.target.value)}
                />
              </div>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -200 }}>Technologies Used</Typography>
                <TextField
                  label="Technologies used"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={Tech3}
                  onChange={(e) => setTech3(e.target.value)}
                />
              </div>
            </div>
            <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -30 }}>AI Description</Typography>
            <TextField
              label="output"
              variant="outlined"
              style={{ width: 800 }}
              multiline
              rows={4}
              value={ProjectDescription3}
              // onChange={(e) => handleChange("experienceDescription2", e.target.value)}
              onChange={(e) => setProjectDescription3(e.target.value)}
            />
            <Button style={{backgroundColor:'#4C667E',marginTop:10,color: 'white',marginLeft:-15}} onClick={() => askGPT(`Can you provide a concise description of my project named ${values.title3} using ${Tech3} for my resume? Highlight key achievements and skills in about 30 words.`)}>
            {loading3 ? <CircularProgress size={24} /> : 'MAGIC'}
            </Button>

          </CardContent>
        </Card>
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
              marginLeft: 10,
              fontSize: 20
            }}
          >
            WORK EXPERINCE
          </Paper>
        </Box>

        <Card style={{ marginTop: -20, padding: "10px", maxWidth: 900, width: "100%", marginLeft: 30 }}>
          <CardContent>



            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Company</Typography>
                <TextField
                  label="Company"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.institute1}
                  onChange={(e) => handleChange("institute1", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Position</Typography>
                <TextField
                  label="Position"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.position1}
                  onChange={(e) => handleChange("position1", e.target.value)}
                />
              </div>
            </div>







            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Duration</Typography>
                <TextField
                  label="Duration"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.duration1}
                  onChange={(e) => handleChange("duration1", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -200 }}>Experince Description</Typography>
                <TextField
                  label="Experince Description"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.experienceDescription1}
                  onChange={(e) => handleChange("experienceDescription1", e.target.value)}
                />
              </div>
            </div>

            <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -30 }}>AI Description</Typography>
            <TextField
              label="output"
              variant="outlined"
              style={{ width: 800 }}
              multiline
              rows={4}
              value={ExperienceDescription1}
              // onChange={(e) => handleChange("experienceDescription2", e.target.value)}
              onChange={(e) => setExperienceDescription1(e.target.value)}
            />
            <Button style={{backgroundColor:'#4C667E' ,marginTop:10,color: 'white',marginLeft:-15}} onClick={() => askGPT3(`Can you provide a concise description of my ${values.duration1} experience as a ${values.position1} at ${values.institute1} for my resume? Highlight key achievements and skills in about 30 words.`)}>
            {loading4 ? <CircularProgress size={24}  style={{color:'white'}}/> : 'MAGIC'}
            </Button>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px",marginTop:20 }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Company</Typography>
                <TextField
                  label="Company"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.institute2}
                  onChange={(e) => handleChange("institute2", e.target.value)}
                />
              </div>
              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Position</Typography>
                <TextField
                  label="Position"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.position2}
                  onChange={(e) => handleChange("position2", e.target.value)}
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Duration</Typography>
                <TextField
                  label="Duration"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.duration2}
                  onChange={(e) => handleChange("duration2", e.target.value)}
                />
              </div>
              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -200 }}>Experience Description</Typography>
                <TextField
                  label="Experince Description"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.experienceDescription2}
                  onChange={(e) => handleChange("experienceDescription2", e.target.value)}
                />
              </div>
            </div>
            <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -30 }}>AI Description</Typography>
            <TextField
              label="output"
              variant="outlined"
              style={{ width: 800 }}
              multiline
              rows={4}
              value={ExperienceDescription2}
              // onChange={(e) => handleChange("experienceDescription2", e.target.value)}
              onChange={(e) => setExperienceDescription2(e.target.value)}
            />
            <Button  style={{backgroundColor: '#4C667E',marginTop:10,color: 'white',marginLeft:-15}} onClick={() => askGPT4(`Can you provide a concise description of my ${values.duration2} experience as a ${values.position2} at ${values.institute2} for my resume? Highlight key achievements and skills in about 30 words.`)}>
            {loading5 ? <CircularProgress size={24} style={{color:'white'}} /> : 'MAGIC'}
            </Button>
          </CardContent>
        </Card>
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
              marginLeft: 10,
              fontSize: 20
            }}
          >
            EXTRA DETAILS
          </Paper>
        </Box>

        <Card style={{ marginTop: -20, padding: "10px", maxWidth: 900, width: "100%", marginLeft: 30 }}>
          <CardContent>



            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Skill1</Typography>
                <TextField
                  label="Skill1"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.skill1}
                  onChange={(e) => handleChange("skill1", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Skill2</Typography>
                <TextField
                  label="Skill2"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.skill2}
                  onChange={(e) => handleChange("skill2", e.target.value)}
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Skill3</Typography>
                <TextField
                  label="Skill3"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.skill3}
                  onChange={(e) => handleChange("skill3", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Skill4</Typography>
                <TextField
                  label="Skill4"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.skill4}
                  onChange={(e) => handleChange("skill4", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Skill5</Typography>
                <TextField
                  label="Skill5"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.skill5}
                  onChange={(e) => handleChange("skill5", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Skill6</Typography>
                <TextField
                  label="Skill6"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.skill6}
                  onChange={(e) => handleChange("skill6", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Intrest1</Typography>
                <TextField
                  label="Intrest1"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.interest1}
                  onChange={(e) => handleChange("interest1", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Intrest2</Typography>
                <TextField
                  label="Intrest2"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.interest2}
                  onChange={(e) => handleChange("interest2", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Intrest3</Typography>
                <TextField
                  label="Intrest3"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.interest3}
                  onChange={(e) => handleChange("interest3", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Intrest4</Typography>
                <TextField
                  label="Intrest4"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.interest4}
                  onChange={(e) => handleChange("interest4", e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Intrest5</Typography>
                <TextField
                  label="Intrest5"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.interest5}
                  onChange={(e) => handleChange("interest5", e.target.value)}
                />
              </div>

              <div>
                <Typography variant="h6" style={{ marginBottom: "10px", marginLeft: -300 }}>Intrest6</Typography>
                <TextField
                  label="Intrest6"
                  variant="outlined"
                  style={{ width: 400 }}
                  value={values.interest6}
                  onChange={(e) => handleChange("interest6", e.target.value)}
                />
              </div>
            </div>


          </CardContent>
        </Card>
        </CardContent>
        </Card>


        {/* <Resume firstName={values.firstname}/> */}
        <ProfileResume values={values} />
      </div>
    </>
  );
};

export default Profile;


