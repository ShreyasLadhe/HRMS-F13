import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import Dashboard from './components/Dashboard';
import EmployeeInfo from './pages/EmployeeInfo';
import LeaveTracking from './pages/LeaveTracking';
import Performance from './pages/Performance';
import Payroll from './pages/Payroll';
import DocumentManagement from './pages/DocumentManagement';

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/employee-info" element={<EmployeeInfo />} />
                <Route path="/leave-tracking" element={<LeaveTracking />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/document-management" element={<DocumentManagement />} />
            </Routes>
        </Router>
    );
}

export default App;
