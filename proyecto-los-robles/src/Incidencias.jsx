
import { useState } from 'react'

function Incidencias() {
  const [formulario, setFormulario] = useState({
    categoria: 'Mantenimiento',
    ubicacion: '',
    prioridad: 'Media',
    descripcion: '',
  })

  const [errores, setErrores] = useState({})
  const [incidencias, setIncidencias] = useState([])
  const [mensaje, setMensaje] = useState('')

  function manejarCambio(evento) {
    const { name, value } = evento.target

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }))

    setErrores((anteriores) => ({
      ...anteriores,
      [name]: '',
    }))

    setMensaje('')
  }

  function manejarEnvio(evento) {
    evento.preventDefault()

    const nuevosErrores = {}

    if (!formulario.ubicacion.trim()) {
      nuevosErrores.ubicacion = 'Indica dónde ocurre el problema.'
    }

    if (formulario.descripcion.trim().length < 10) {
      nuevosErrores.descripcion =
        'Describe el problema con al menos 10 caracteres.'
    }

    setErrores(nuevosErrores)
    setMensaje('')

    if (Object.keys(nuevosErrores).length === 0) {
      const nuevaIncidencia = {
        id: Date.now(),
        ...formulario,
        fecha: new Date().toLocaleDateString('es-MX'),
        estado: 'Pendiente',
      }

      setIncidencias((anteriores) => [
        nuevaIncidencia,
        ...anteriores,
      ])

      setFormulario({
        categoria: 'Mantenimiento',
        ubicacion: '',
        prioridad: 'Media',
        descripcion: '',
      })

      setMensaje(
        'Reporte agregado a la lista temporal de esta sesión. No se ha enviado a un servidor.'
      )
    }
  }

  return (
    <section className="incidencias-seccion" id="incidencias">
      <div className="contenedor">
        <div className="titulo-seccion">
          <span className="sobrelinea">ATENCIÓN COMUNITARIA</span>
          <h2>Gestión de incidencias</h2>
          <p>
            Describe una situación que requiera atención en las áreas
            o servicios de Residencial Los Robles.
          </p>
        </div>

        <div className="incidencias-layout">
          <div className="incidencia-formulario">
            <h3>Reportar un problema</h3>

            <form onSubmit={manejarEnvio} noValidate>
              <div className="campo">
                <label htmlFor="categoria">Categoría</label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formulario.categoria}
                  onChange={manejarCambio}
                >
                  <option>Mantenimiento</option>
                  <option>Alumbrado</option>
                  <option>Áreas verdes</option>
                  <option>Limpieza</option>
                  <option>Seguridad</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="campo">
                <label htmlFor="ubicacion">Ubicación</label>
                <input
                  id="ubicacion"
                  name="ubicacion"
                  type="text"
                  placeholder="Ej. Parque central"
                  value={formulario.ubicacion}
                  onChange={manejarCambio}
                  aria-invalid={Boolean(errores.ubicacion)}
                />
                {errores.ubicacion && (
                  <span className="error">{errores.ubicacion}</span>
                )}
              </div>

              <div className="campo">
                <label htmlFor="prioridad">Prioridad</label>
                <select
                  id="prioridad"
                  name="prioridad"
                  value={formulario.prioridad}
                  onChange={manejarCambio}
                >
                  <option>Baja</option>
                  <option>Media</option>
                  <option>Alta</option>
                </select>
              </div>

              <div className="campo">
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows="5"
                  placeholder="Explica qué sucede y qué atención se necesita..."
                  value={formulario.descripcion}
                  onChange={manejarCambio}
                  aria-invalid={Boolean(errores.descripcion)}
                />
                {errores.descripcion && (
                  <span className="error">{errores.descripcion}</span>
                )}
              </div>

              {mensaje && (
                <p className="mensaje-exito" role="status">
                  {mensaje}
                </p>
              )}

              <button className="boton-registro" type="submit">
                Registrar reporte
              </button>
            </form>
          </div>

          <div className="incidencias-listado">
            <h3>Reportes de esta sesión</h3>
            <p className="registro-nota">
              Los reportes aparecen temporalmente mientras esta página
              permanece abierta.
            </p>

            {incidencias.length === 0 ? (
              <div className="incidencias-vacias">
                <span className="incidencia-icono">✓</span>
                <h4>No hay reportes todavía</h4>
                <p>
                  Cuando registres una incidencia, aparecerá en esta sección.
                </p>
              </div>
            ) : (
              <div className="lista-incidencias">
                {incidencias.map((incidencia) => (
                  <article
                    className="incidencia-item"
                    key={incidencia.id}
                  >
                    <div className="incidencia-item-cabecera">
                      <span className="incidencia-categoria">
                        {incidencia.categoria}
                      </span>
                      <span
                        className={`prioridad prioridad-${incidencia.prioridad.toLowerCase()}`}
                      >
                        {incidencia.prioridad}
                      </span>
                    </div>

                    <h4>{incidencia.ubicacion}</h4>
                    <p>{incidencia.descripcion}</p>

                    <div className="incidencia-meta">
                      <span>{incidencia.fecha}</span>
                      <span>{incidencia.estado}</span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Incidencias
