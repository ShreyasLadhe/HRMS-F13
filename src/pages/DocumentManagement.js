import React from 'react';
import { Container, Typography, Button, Box, TextField } from '@mui/material';
import HomeButton from '../components/Button';

function DocumentManagement() {
  return (
    <Container
      maxWidth="md"
      className="my-8 p-6 bg-gradient-to-r from-blue-300 to-purple-300 shadow-lg rounded-lg"
      style={{ overflow: 'hidden' }}
    >
      <Typography variant="h4" className="font-semibold mb-4 text-white text-center">
        Document Management
      </Typography>

      <Typography variant="h6" className="mb-2 text-white text-center">
        Manage Your Essential Documents
      </Typography>

      <Typography variant="body1" className="mb-4 text-white text-center">
        Welcome to the Document Management System. Here, you can securely upload and manage documents 
        essential for your HR operations. This system is designed to handle various document types, 
        including but not limited to:
      </Typography>

      <Box 
        component="ul" 
        className="mb-4 text-white" 
        style={{ paddingLeft: '20px', textAlign: 'left' }} // Left align with padding
      >
        <Typography variant="subtitle1" component="li">
          - PDF files for policies and guidelines
        </Typography>
        <Typography variant="subtitle1" component="li">
          - Word documents for employee contracts and reports
        </Typography>
        <Typography variant="subtitle1" component="li">
          - Spreadsheets for performance evaluations and payroll data
        </Typography>
      </Box>

      <Typography variant="body1" className="mb-4 text-white text-center">
        The purpose of storing these documents is to ensure easy access, improved organization, and 
        enhanced security of critical HR information. Please upload documents in the formats specified 
        below to ensure compatibility with the system.
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="bg-white rounded-lg shadow-md p-4"
        style={{ border: '2px solid #ffcc00', padding: '20px' }} // Added border and padding
      >
        <TextField
          type="file"
          variant="outlined"
          className="mb-4"
          inputProps={{ accept: '.pdf,.doc,.docx' }} 
          fullWidth
          style={{ marginBottom: '16px' }} 
        />
        <Button
          variant="contained"
          color="primary"
          className="w-full mb-4"
        >
          Upload Document
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" mt={4}>
        <HomeButton color="#ffcc00" />
      </Box>
    </Container>
  );
}

export default DocumentManagement;
