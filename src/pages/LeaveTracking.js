import React, { useState } from 'react';
import { Container, Typography, Button, Box, Select, MenuItem, FormControl, InputLabel, TextField, Snackbar} from '@mui/material';
import HomeButton from '../components/Button';
import Alert from '@mui/material/Alert';

function LeaveTracking() {
  const [leaveType, setLeaveType] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [leaveId, setLeaveId] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [leaveDetails, setLeaveDetails] = useState('');

  const handleLeaveTypeChange = (event) => {
    setLeaveType(event.target.value);
  };

  const handleViewLeaveStatus = () => {
    setShowDetails(true);
    setStatusMessage('Please enter the Leave ID and Employee Name to check the status.');
    setOpenSnackbar(true);
  };

  const handleRequestLeave = () => {
    const uniqueLeaveId = `LEAVE-${Math.floor(Math.random() * 10000)}`;
    setLeaveId(uniqueLeaveId);
    setStatusMessage(`Leave requested successfully! Your Leave ID is ${uniqueLeaveId}.`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container
      maxWidth="sm"
      className="my-8 p-6 bg-gradient-to-r from-indigo-300 to-pink-300 shadow-lg rounded-lg"
      style={{ overflow: 'hidden' }}
    >
      <Typography variant="h4" className="font-semibold mb-4 text-white text-center">
        Leave Tracking
      </Typography>

      <Typography variant="body1" className="mb-6 text-white text-center">
        Manage your leave requests and track your status effectively.
      </Typography>

      <FormControl fullWidth variant="outlined" className="mb-4">
        <InputLabel>Leave Type</InputLabel>
        <Select label="Leave Type" value={leaveType} onChange={handleLeaveTypeChange}>
          <MenuItem value="sick">Sick Leave</MenuItem>
          <MenuItem value="vacation">Vacation</MenuItem>
          <MenuItem value="personal">Personal Leave</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        variant="outlined"
        label="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        className="mb-4"
      />

      <TextField
        fullWidth
        variant="outlined"
        label="Leave Details"
        value={leaveDetails}
        onChange={(e) => setLeaveDetails(e.target.value)}
        multiline
        rows={4}
        className="mb-4"
      />

      <Box display="flex" justifyContent="space-between" className="mb-6 mt-6">
        <Button variant="contained" color="secondary" className="mr-2" onClick={handleRequestLeave}>
          Request Leave
        </Button>
        <Button variant="outlined" color="secondary" className="ml-2" onClick={handleViewLeaveStatus}>
          View Leave Status
        </Button>
      </Box>

      {showDetails && (
        <Box>
          <TextField
            fullWidth
            variant="outlined"
            label="Leave ID"
            value={leaveId}
            readOnly
            className="mb-4"
            helperText="Your Leave ID will appear here after requesting leave."
          />

          <TextField
            fullWidth
            variant="outlined"
            label="Leave Status"
            placeholder="Enter Leave ID to check status..."
            className="mb-4"
          />
        </Box>
      )}

      <Box className="flex justify-center mt-4">
        <HomeButton color="#FFD700" />
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          {statusMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default LeaveTracking;
