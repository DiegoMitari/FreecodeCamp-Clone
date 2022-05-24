
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
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar 
          trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. 
          Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. FreeCodeCamp cambió mi vida.'
        />

        {/* 2nd testimonio */}
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. 
          El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. 
          Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />

        {/* 3st testimonio */}  
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp
           fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp
            me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
      </div>

      <SectionCourses />
      <Footer />
    </div>
  );
}

export default App;
