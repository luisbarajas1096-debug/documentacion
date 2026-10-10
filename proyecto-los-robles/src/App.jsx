
import './App.css'
import Register from './Register'
import Login from './Login'
import Incidencias from './Incidencias'
import Services from './Services'

function App() {
  return (
    <div className="app">
      <header className="encabezado">
        <div className="contenedor marca">
          <div>
            <h1>Residencial Los Robles</h1>
            <p>Gestión de servicios comunitarios</p>
          </div>
          <span className="etiqueta">Portal comunitario</span>
        </div>

        <nav className="navegacion">
          <div className="contenedor enlaces">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#incidencias">Incidencias</a>
            <a href="#acceso">Acceso</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="portada" id="inicio">
          <div className="contenedor portada-contenido">
            <span className="sobrelinea">BIENVENIDO A TU COMUNIDAD</span>
            <h2>Una comunidad mejor comienza con la participación de todos.</h2>
            <p>
              Consulta los servicios comunitarios y conoce los medios
              disponibles para comunicar las necesidades de tu residencial.
            </p>
            <a className="boton principal" href="#servicios">
              Consultar servicios
            </a>
          </div>
        </section>

        <section className="seccion contenedor" id="servicios">
          <div className="titulo-seccion">
            <span className="sobrelinea">NUESTRO RESIDENCIAL</span>
            <h2>Servicios comunitarios</h2>
            <p>Información general de los servicios de la comunidad.</p>
          </div>

          <div className="tarjetas">
            <article className="tarjeta">
              <span className="icono">⌂</span>
              <h3>Mantenimiento</h3>
              <p>Información sobre el cuidado y mantenimiento de las áreas comunes.</p>
            </article>

            <article className="tarjeta">
              <span className="icono">♧</span>
              <h3>Áreas verdes</h3>
              <p>Consulta información relacionada con los espacios compartidos.</p>
            </article>

            <article className="tarjeta">
              <span className="icono">◷</span>
              <h3>Atención comunitaria</h3>
              <p>Conoce los canales de atención y comunicación disponibles.</p>
            </article>
          </div>
        </section>

        <section className="franja" id="incidencias">
          <div className="contenedor franja-contenido">
            <div>
              <h2>¿Hay algo que debamos atender?</h2>
              <p>La comunicación ayuda a mejorar los espacios que compartimos.</p>
            </div>
            <a className="boton secundario" href="#acceso">
              Conocer opciones
            </a>
          </div>
        </section>

        <Register />
        <Login />
        <Services />
        <Incidencias />
      </main>

      <footer className="pie">
        <div className="contenedor">
          <p>Residencial Los Robles · Sistema de gestión comunitaria</p>
          <p>Proyecto académico · Proyecto II</p>
        </div>
      </footer>
    </div>
  )
}

export default App
