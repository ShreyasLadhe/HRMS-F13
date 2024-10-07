import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';
import HomeButton from '../components/Button';

function EmployeeInfo() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeInfo, setEmployeeInfo] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    department: '',
    position: '',
  });

  const dummyData = {
    '101': { name: 'John Doe', department: 'Engineering', position: 'Software Engineer' },
    '102': { name: 'Jane Smith', department: 'Marketing', position: 'Marketing Manager' },
  };

  const handleFetchInfo = () => {
    const info = dummyData[employeeId];
    if (info) {
      setEmployeeInfo(info);
    } else {
      setEmployeeInfo(null);
      alert('Employee not found');
    }
  };

  const handleAddEmployee = () => {
    if (newEmployee.id && newEmployee.name && newEmployee.department && newEmployee.position) {
      dummyData[newEmployee.id] = {
        name: newEmployee.name,
        department: newEmployee.department,
        position: newEmployee.position,
      };
      alert('Employee added successfully');
      setNewEmployee({ id: '', name: '', department: '', position: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Container
      maxWidth="md"
      className="my-8 p-6 bg-gradient-to-r from-blue-300 to-green-300 shadow-lg rounded-lg"
      style={{ overflow: 'hidden' }}
    >
      <Typography variant="h4" className="font-semibold mb-4 text-center text-white">
        Employee Information Management
      </Typography>

      <form>
        <Box display="grid" gap={2} className="mb-6">
          <TextField
            fullWidth
            label="Employee ID"
            variant="outlined"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleFetchInfo}>
            Fetch Information
          </Button>
          {employeeInfo && (
            <Box mt={2} p={2} bgcolor="white" borderRadius={2}>
              <Typography variant="h6">Employee Details:</Typography>
              <Typography>Name: {employeeInfo.name}</Typography>
              <Typography>Department: {employeeInfo.department}</Typography>
              <Typography>Position: {employeeInfo.position}</Typography>
            </Box>
          )}
        </Box>

        <Typography variant="h5" className="font-semibold mb-4 text-center text-white">
          Add New Employee
        </Typography>
        <Box display="grid" gap={2} className="mb-6">
          <TextField
            fullWidth
            label="New Employee ID"
            variant="outlined"
            value={newEmployee.id}
            onChange={(e) => setNewEmployee({ ...newEmployee, id: e.target.value })}
          />
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          />
          <TextField
            fullWidth
            label="Department"
            variant="outlined"
            value={newEmployee.department}
            onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
          />
          <TextField
            fullWidth
            label="Position"
            variant="outlined"
            value={newEmployee.position}
            onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
          />
        </Box>
        
        <Box className="flex justify-center mb-4">
          <Button variant="contained" color="success" onClick={handleAddEmployee} style={{ marginRight: '10px' }}>
            Add Employee
          </Button>
        </Box>
      </form>

      <Box className="flex justify-center">
        <HomeButton color="#FFD700" />
      </Box>
    </Container>
  );
}

export default EmployeeInfo;