
import { useState } from 'react'

function Login() {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState('')

  function manejarEnvio(evento) {
    evento.preventDefault()

    const nuevosErrores = {}

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      nuevosErrores.correo = 'Escribe un correo electrónico válido.'
    }

    if (!password) {
      nuevosErrores.password = 'Escribe tu contraseña.'
    }

    setErrores(nuevosErrores)
    setMensaje('')

    if (Object.keys(nuevosErrores).length === 0) {
      setMensaje(
        'Los campos son válidos. El inicio de sesión todavía no está conectado a un servidor.'
      )
    }
  }

  return (
    <section className="login-seccion" id="inicio-sesion">
      <div className="login-tarjeta">
        <div className="registro-encabezado">
          <span className="sobrelinea">BIENVENIDO DE NUEVO</span>
          <h2>Iniciar sesión</h2>
          <p>Accede al portal comunitario de Los Robles.</p>
        </div>

        <form onSubmit={manejarEnvio} noValidate>
          <div className="campo">
            <label htmlFor="login-correo">Correo electrónico</label>
            <input
              id="login-correo"
              type="email"
              autoComplete="email"
              placeholder="nombre@correo.com"
              value={correo}
              onChange={(evento) => {
                setCorreo(evento.target.value)
                setErrores({})
                setMensaje('')
              }}
              aria-invalid={Boolean(errores.correo)}
            />
            {errores.correo && (
              <span className="error">{errores.correo}</span>
            )}
          </div>

          <div className="campo">
            <label htmlFor="login-password">Contraseña</label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="Escribe tu contraseña"
              value={password}
              onChange={(evento) => {
                setPassword(evento.target.value)
                setErrores({})
                setMensaje('')
              }}
              aria-invalid={Boolean(errores.password)}
            />
            {errores.password && (
              <span className="error">{errores.password}</span>
            )}
          </div>

          {mensaje && (
            <p className="mensaje-exito" role="status">
              {mensaje}
            </p>
          )}

          <button className="boton-registro" type="submit">
            Iniciar sesión
          </button>
        </form>

        <p className="registro-nota">
          Esta pantalla valida los campos, pero todavía no verifica usuarios
          ni contraseñas almacenados.
        </p>
      </div>
    </section>
  )
}

export default Login
