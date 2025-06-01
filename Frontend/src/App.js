import './App.css';
import Appbar from './components/Appbar/Appbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Appointments from './components/Appointments/Appointments.jsx';
import Doctors from './components/Doctors/Doctors.jsx';
import Faq from './components/Faq/Faq.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Footer from './components/Footer/Footer.jsx';
import Departments from './components/Departments/Departments.jsx';

function App() {
  return (
    <div>
      <Appbar/>
      <Home/>
      <About/>
      <Services/>
      <Appointments/>
      <Departments/>
      <Doctors/>
      <Faq/>
      <Testimonials/>
      <Gallery/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
