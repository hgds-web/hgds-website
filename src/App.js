import { createTheme } from '@mui/material/styles';
import './App.css';
import Container from '@mui/material/Container';
import AboutUs from './AboutUs';
import Events from './Events';
import Games from './Games';
import Members from './Members';
import ContactUs from './ContactUs';
import Home from './Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins', 'sans-serif'
    ].join(','),
  },
    palette: {
    primary: {
      main: '#5271FF',
      darker: '#021882',
    },
    header: {
      primary: '#021882',
      secondary: '#5271FF',
    },
    },
});

function App() {
  
  return (
    <div className="App">
      <Container maxWidth="lg">
      <Router>
        <Header theme={theme}/>
          <Routes>
            <Route  path="/" element={<Home theme={theme}/>} />
            <Route path="/aboutus" element={<AboutUs theme={theme}/>} /> 
            <Route path="/events" element={<Events theme={theme}/>} />
            <Route path="/games" element={<Games theme={theme}/>} />
            <Route path="/members" element={<Members theme={theme}/>} />
            <Route path="/contactus" element={<ContactUs theme={theme}/>} />

          </Routes>
        </Router>
      </Container>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
