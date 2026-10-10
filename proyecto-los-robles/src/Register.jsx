
import { useState } from 'react'

function Register() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    password: '',
    confirmarPassword: '',
    privacidad: false,
  })

  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState('')

  function manejarCambio(evento) {
    const { name, value, type, checked } = evento.target

    setFormulario({
      ...formulario,
      [name]: type === 'checkbox' ? checked : value,
    })

    setErrores({})
    setMensaje('')
  }

  function manejarEnvio(evento) {
    evento.preventDefault()

    const nuevosErrores = {}

    if (formulario.nombre.trim().length < 3) {
      nuevosErrores.nombre = 'Escribe tu nombre completo.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)) {
      nuevosErrores.correo = 'Escribe un correo electrónico válido.'
    }

    if (formulario.password.length < 8) {
      nuevosErrores.password =
        'La contraseña debe tener al menos 8 caracteres.'
    }

    if (formulario.password !== formulario.confirmarPassword) {
      nuevosErrores.confirmarPassword = 'Las contraseñas no coinciden.'
    }

    if (!formulario.privacidad) {
      nuevosErrores.privacidad = 'Debes aceptar el aviso de privacidad.'
    }

    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length === 0) {
      setMensaje(
        'Validación correcta. El registro todavía no se ha guardado en un servidor.'
      )
    }
  }

  return (
    <section className="registro-seccion" id="registro">
      <div className="registro-tarjeta">
        <div className="registro-encabezado">
          <span className="sobrelinea">ÚNETE A TU COMUNIDAD</span>
          <h2>Crear una cuenta</h2>
          <p>
            Completa tus datos para iniciar el proceso de registro.
          </p>
        </div>

        <form onSubmit={manejarEnvio} noValidate>
          <div className="campo">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              placeholder="Ej. María López García"
              value={formulario.nombre}
              onChange={manejarCambio}
              aria-invalid={Boolean(errores.nombre)}
            />
            {errores.nombre && (
              <span className="error">{errores.nombre}</span>
            )}
          </div>

          <div className="campo">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              name="correo"
              type="email"
              autoComplete="email"
              placeholder="nombre@correo.com"
              value={formulario.correo}
              onChange={manejarCambio}
              aria-invalid={Boolean(errores.correo)}
            />
            {errores.correo && (
              <span className="error">{errores.correo}</span>
            )}
          </div>

          <div className="campo">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Mínimo 8 caracteres"
              value={formulario.password}
              onChange={manejarCambio}
              aria-invalid={Boolean(errores.password)}
            />
            {errores.password && (
              <span className="error">{errores.password}</span>
            )}
          </div>

          <div className="campo">
            <label htmlFor="confirmarPassword">
              Confirmar contraseña
            </label>
            <input
              id="confirmarPassword"
              name="confirmarPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Repite tu contraseña"
              value={formulario.confirmarPassword}
              onChange={manejarCambio}
              aria-invalid={Boolean(errores.confirmarPassword)}
            />
            {errores.confirmarPassword && (
              <span className="error">
                {errores.confirmarPassword}
              </span>
            )}
          </div>

          <div className="campo-privacidad">
            <input
              id="privacidad"
              name="privacidad"
              type="checkbox"
              checked={formulario.privacidad}
              onChange={manejarCambio}
            />
            <label htmlFor="privacidad">
              Acepto el aviso de privacidad del sistema.
            </label>
          </div>

          {errores.privacidad && (
            <span className="error">{errores.privacidad}</span>
          )}

          {mensaje && (
            <p className="mensaje-exito" role="status">
              {mensaje}
            </p>
          )}

          <button className="boton-registro" type="submit">
            Validar registro
          </button>
        </form>

        <p className="registro-nota">
          Esta versión valida los datos en el navegador. No crea una cuenta
          ni almacena información en una base de datos.
        </p>
      </div>
    </section>
  )
}

export default Register
