
import './App.css';
import MainSection from './components/MainSection';
import NavBar from './components/NavBar';
import Testimonio from './components/Testimonio.jsx';
import SectionBusiness from './components/SectionBusiness';
import SectionCourses from './components/SectionCourses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <SectionBusiness />
      <div className='main-container'>
        <h2>Here is what our alumni say about freeCodeCamp:</h2>
        {/* 1st testimonio */}
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio="It's scary to change careers. I only gained confidence that I could code
                     by working through the hundreds of hours of free lessons on freeCodeCamp. 
                     Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />

        {/* 2nd testimonio */}
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio="freeCodeCamp was the gateway to my career as a software developer. 
                    The well-structured curriculum took my coding knowledge from a total beginner level to 
                    a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />

        {/* 3st testimonio */}
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was 
                    the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me 
                    the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>

      <SectionCourses />
      <Footer />
    </div>
  );
}

export default App;
