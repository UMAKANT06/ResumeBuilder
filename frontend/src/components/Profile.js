import React, { useState } from "react";
import { Box, Paper, Card, CardContent, TextField, Typography, Button } from "@mui/material";
import NavBar from "./NavBar";
import Resume from "./Resume";

const Profile = () => {
  // Local state to store personal details
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [GitHub, setGitHub] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [Location, setLocation] = useState("");


  const [image, setImage] = useState(null);
  // Function to handle form submission
  const handleSubmit = () => {
    // You can save the values locally or use them in other components
    console.log("First Name:", firstName);
    console.log("Middle Name:", middleName);
    console.log("Last Name:", lastName);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // You can also preview the image if needed
    const reader = new FileReader();
    reader.onload = (event) => {
      const previewUrl = event.target.result;
      // Do something with the previewUrl, such as displaying it in an <img> tag
      console.log("Image Preview URL:", previewUrl);
    };
    reader.readAsDataURL(selectedImage);
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
            fontSize:20
          }}
        >
          PERSONAL DETAILS
        </Paper>
      </Box>
      <Card style={{ marginTop: -20, padding: "10px", maxWidth: 900, width: "100%", marginLeft: 50 }}>
        <CardContent>
          <Typography variant="h6" style={{ marginBottom: "10px",marginLeft:-700 }}>First Name</Typography>
          <TextField
            label="First Name"
            variant="outlined"
            style={{ marginBottom: "10px" ,width:800}}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Typography variant="h6" style={{ marginBottom: "10px",marginLeft:-700 }}>Phone</Typography>
          <TextField
            label="(123)456-789"
            variant="outlined"
            style={{ marginBottom: "10px",width:800 }}
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft:-700}}>Email</Typography>
          <TextField
            label="abc@gmail.com"
            variant="outlined"
            style={{ marginBottom: "10px",width:800 }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft:-700}}>LinkedIn</Typography>
          <TextField
            label="https://www.linkedin.com/in/"
            variant="outlined"
            style={{ marginBottom: "10px",width:800 }}
            value={LinkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
          <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft:-700}}>GitHub</Typography>
          <TextField
            label="https://GITHUB.com"
            variant="outlined"
            style={{ marginBottom: "10px",width:800 }}
            value={GitHub}
            onChange={(e) => setGitHub(e.target.value)}
          />
          <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft:-700}}>Twitter</Typography>
          <TextField
            label="https://www.twitter.com/"
            variant="outlined"
            style={{ marginBottom: "10px",width:800 }}
            value={Twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
          {/* <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft:-700}}>Instagram</Typography>
          <TextField
            label="https://Instagaram.com"
            variant="outlined"
            style={{ marginBottom: "10px",width:800 }}
            value={Instagram}
            onChange={(e) => setInstagram(e.target.value)}
          /> */}
          <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft:-700}}>Location</Typography>
          <TextField
            label="Delhi,India"
            variant="outlined"
            style={{ marginBottom: "10px",width:800 }}
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Typography variant="h6" style={{ marginBottom: "10px" ,marginLeft:-700}}>Image</Typography>
          <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginBottom: "10px",marginLeft:-300 }}
            />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained" color="error" onClick={handleSubmit} style={{marginLeft:100,marginTop:10}}>
                Prev
              </Button>
              <Button variant="contained" color="error" onClick={handleSubmit} style={{marginRight:100,marginTop:10}}>
                Next
              </Button>
            </Box>
          
        </CardContent>
      </Card>
      <Resume firstName={firstName} middleName={middleName} lastName={lastName}  image={image} Location={Location} LinkedIn={LinkedIn} GitHub={GitHub} Twitter={Twitter} />
      </div>
    </>
  );
};

export default Profile;
