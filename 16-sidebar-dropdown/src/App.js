import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Overview, Messages, Products, Support, Reports, Team } from './pages';
import { ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';

function App() {
  return (
    <Router>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="messages" element={<Messages />} />
        <Route path="overview" element={<Overview />} />
        <Route path="products" element={<Products />} />
        <Route path="reports" element={<Reports />} />
        <Route path="/reports/reports1" element={<ReportsOne />} />
        <Route path="/reports/reports2" element={<ReportsTwo />} />
        <Route path="/reports/reports3" element={<ReportsThree />} />
        <Route path="support" element={<Support />} />
        <Route path="team" element={<Team />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '3rem' }}>
              <h1 className="center">There's nothing here!</h1>
            </main>
          }
        />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

const Home = () => {
  return <h1 className="center">HOME page</h1>;
};
