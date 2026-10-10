
import { useState } from 'react'

const servicios = [
  {
    id: 1,
    nombre: 'Mantenimiento',
    categoria: 'Infraestructura',
    descripcion:
      'Información y seguimiento del mantenimiento de las áreas comunes.',
    estado: 'Informativo',
  },
  {
    id: 2,
    nombre: 'Alumbrado',
    categoria: 'Infraestructura',
    descripcion:
      'Información relacionada con la iluminación de espacios comunitarios.',
    estado: 'Informativo',
  },
  {
    id: 3,
    nombre: 'Áreas verdes',
    categoria: 'Espacios comunes',
    descripcion:
      'Cuidado y conservación de jardines y zonas verdes.',
    estado: 'Informativo',
  },
  {
    id: 4,
    nombre: 'Limpieza',
    categoria: 'Espacios comunes',
    descripcion:
      'Información general sobre limpieza y cuidado de las instalaciones.',
    estado: 'Informativo',
  },
  {
    id: 5,
    nombre: 'Atención comunitaria',
    categoria: 'Atención',
    descripcion:
      'Canales informativos para comunicar necesidades de la comunidad.',
    estado: 'Informativo',
  },
]

function Services() {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  const serviciosFiltrados = servicios.filter((servicio) => {
    const coincideTexto = (
      servicio.nombre + ' ' + servicio.descripcion
    )
      .toLowerCase()
      .includes(busqueda.toLowerCase())

    const coincideCategoria =
      categoria === 'Todas' || servicio.categoria === categoria

    return coincideTexto && coincideCategoria
  })

  return (
    <section className="servicios-seccion" id="consulta-servicios">
      <div className="contenedor">
        <div className="titulo-seccion">
          <span className="sobrelinea">INFORMACIÓN COMUNITARIA</span>
          <h2>Consulta de servicios</h2>
          <p>
            Explora las categorías y encuentra la información del servicio
            que necesitas consultar.
          </p>
        </div>

        <div className="servicios-filtros">
          <div className="campo">
            <label htmlFor="buscar-servicio">Buscar servicio</label>
            <input
              id="buscar-servicio"
              type="search"
              placeholder="Escribe el nombre de un servicio"
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="categoria-servicio">Filtrar por categoría</label>
            <select
              id="categoria-servicio"
              value={categoria}
              onChange={(evento) => setCategoria(evento.target.value)}
            >
              <option>Todas</option>
              <option>Infraestructura</option>
              <option>Espacios comunes</option>
              <option>Atención</option>
            </select>
          </div>
        </div>

        <p className="servicios-conteo" aria-live="polite">
          Servicios encontrados: {serviciosFiltrados.length}
        </p>

        {serviciosFiltrados.length > 0 ? (
          <div className="servicios-lista">
            {serviciosFiltrados.map((servicio) => (
              <article className="servicio-item" key={servicio.id}>
                <div className="servicio-item-superior">
                  <span className="servicio-categoria">
                    {servicio.categoria}
                  </span>
                  <span className="servicio-estado">
                    {servicio.estado}
                  </span>
                </div>

                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="servicios-vacios">
            <h3>No se encontraron servicios</h3>
            <p>Prueba con otra búsqueda o selecciona otra categoría.</p>
          </div>
        )}

        <p className="servicios-nota">
          Datos de ejemplo para fines académicos. No representan un catálogo
          oficial ni confirman la disponibilidad real de los servicios.
        </p>
      </div>
    </section>
  )
}

export default Services
