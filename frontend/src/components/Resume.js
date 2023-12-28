import React from "react";
import { Paper, Typography, Button, Box } from "@mui/material";
import { Page, Image, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import jsPDF from "jspdf";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginRight: -800,
    marginTop: -350 // Set the desired margin-right value
  },
});

const Resume = ({ firstName, middleName, lastName, image, Instagram, Twitter, Location, LinkedIn, GitHub }) => {
  const generatePdf = async () => {
    const doc = new jsPDF();



    doc.text(`Name: ${firstName}`, 20, 20);
    doc.text(`Phone: ${middleName}`, 20, 30);
    doc.text(`Email: ${lastName}`, 20, 40);
    doc.text(`LinkedIn: ${LinkedIn}`, 20, 50);
    doc.text(`GitHub: ${GitHub}`, 20, 60);
    doc.text(`Twitter: ${Twitter}`, 20, 70);
    doc.text(`Location: ${Location}`, 20, 80);
    doc.text(`Instagram: ${Instagram}`, 20, 90);
    doc.setLineWidth(0.6);
    doc.rect(20, 120, 170, 30); 
    doc.text("Education Details", 30, 135);

    doc.save("resume.pdf");
  };

  // Function to convert image to base64
  const getBase64Image = (img) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.src = img.src;

      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
        const base64String = canvas.toDataURL("image/jpeg").split(",")[1];
        resolve(base64String);
      };

      image.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Paper
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "10px",
        maxWidth: 800,
        marginLeft: 1050,
        marginTop: -1000
      }}
    >
      <Typography style={{ textAlign: 'left' }}>{`Name: ${firstName}`}</Typography>
      <Typography style={{ textAlign: 'left' }}>{`Email: `}
        <a href={lastName} target="_blank" rel="noopener noreferrer">{lastName}</a>
      </Typography>
      <Typography style={{ textAlign: 'left' }}>{`LinkedIn: `}
        <a href={LinkedIn} target="_blank" rel="noopener noreferrer">{LinkedIn}</a>
      </Typography>
      <Typography style={{ textAlign: 'left' }}>{`GitHub: `}
        <a href={GitHub} target="_blank" rel="noopener noreferrer">{GitHub}</a>
      </Typography>
      <Typography style={{ textAlign: 'left' }}>{`Twitter: `}
        <a href={GitHub} target="_blank" rel="noopener noreferrer">{Twitter}</a>
      </Typography>
      <Typography style={{ textAlign: 'left' }}>{`Location: ${Location}`}</Typography>

      {/* Display the image in the component */}
      {/* {image && <img src={image.src} alt="Profile" style={styles.image} />} */}
      

      <Button variant="contained" color="primary" onClick={generatePdf} style={{ alignContent: 'center' }}>
        Download PDF
      </Button>
    </Paper>
  );
};

export default Resume;
