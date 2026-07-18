import { profile, skills, projects, certificates, learningNow } from './data/profile.jsx'

const navItems = [
  { href: '#perfil', label: 'Perfil' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#certificados', label: 'Certificados' },
  { href: '#contacto', label: 'Contacto' },
]

const highlights = [
  { value: 'React', label: 'Framework que estoy practicando' },
  { value: 'SQL', label: 'Base para trabajar con datos' },
  { value: 'Git', label: 'Control de versiones y repositorios' },
]

function App() {
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="logo" href="#top" aria-label="Ir al inicio">
          <span>{initials}</span>
          <strong>{profile.name}</strong>
        </a>

        <nav className="menu" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero grid-layout" id="perfil">
          <aside className="profile-card panel">
            <div className="avatar-block">
              <div className="avatar">{initials}</div>
              <span className="availability">Buscando oportunidad junior</span>
            </div>

            <div className="profile-meta">
              <p><span>Rol</span>{profile.role}</p>
              <p><span>Ubicacion</span>{profile.location}</p>
              <p><span>Objetivo</span>Practicas, trainee o puesto junior</p>
            </div>

            <div className="social-list">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </aside>

          <div className="hero-copy">
            <p className="kicker">Portfolio / Ingenieria de Sistemas</p>
            <h1>Hola, soy Jose. Estoy convirtiendo mi etapa junior en proyectos visibles.</h1>
            <p className="lead">{profile.shortPitch}</p>

            <div className="hero-actions">
              <a className="button primary" href="#proyectos">Ver proyectos</a>
              <a className="button secondary" href="#contacto">Contactarme</a>
            </div>
          </div>
        </section>

        <section className="section intro-section">
          <div className="section-heading compact">
            <p className="kicker">Sobre mi</p>
            <h2>Una presentacion honesta, clara y facil de actualizar.</h2>
          </div>

          <div className="intro-grid">
            <article className="panel note-card">
              <span className="label">Mi enfoque</span>
              <p>
                Soy egresado de Ingenieria de Sistemas y estoy construyendo mi primera experiencia profesional.
                Me interesa crear interfaces ordenadas, entender la logica de negocio y seguir aprendiendo con proyectos reales.
              </p>
            </article>

            <article className="panel note-card accent-note">
              <span className="label">Como trabajo</span>
              <p>
                Me gusta avanzar paso a paso: analizar el problema, dividirlo en tareas pequenas, programar una primera version
                y mejorarla con pruebas, feedback y documentacion.
              </p>
            </article>
          </div>
        </section>

        <section className="section" aria-label="Resumen de conocimientos">
          <div className="highlight-strip">
            {highlights.map((item) => (
              <article className="highlight" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="habilidades">
          <div className="section-heading">
            <p className="kicker">Habilidades</p>
            <h2>Mi stack actual esta pensado para seguir creciendo como desarrollador.</h2>
          </div>

          <div className="skills-board">
            {skills.map((skill, index) => (
              <article className="panel skill-card" key={skill.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{skill.title}</h3>
                <div className="chip-list">
                  {skill.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="proyectos">
          <div className="section-heading">
            <p className="kicker">Proyectos</p>
            <h2>Proyectos simples, enfocados en demostrar practica y progreso.</h2>
          </div>

          <div className="project-timeline">
            {projects.map((project, index) => (
              <article className="project-row" key={project.title}>
                <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="panel project-card">
                  <div className="project-topline">
                    <span className="label">{project.status}</span>
                    <span>{project.tech.join(' / ')}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.repo}>Repositorio</a>
                    <a href={project.demo}>Demo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section two-columns" id="certificados">
          <div>
            <div className="section-heading compact">
              <p className="kicker">Certificados</p>
              <h2>Formacion que acompana mi camino profesional.</h2>
            </div>

            <div className="certificate-stack">
              {certificates.map((certificate) => (
                <article className="certificate-item" key={certificate.title}>
                  <div>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                  </div>
                  <span>{certificate.year}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className="panel learning-panel">
            <span className="label">Actualmente estoy aprendiendo</span>
            <ul>
              {learningNow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="contact-panel">
            <p className="kicker">Contacto</p>
            <h2>Estoy listo para mi primera oportunidad en tecnologia.</h2>
            <p>
              Puedes escribirme si tienes una vacante junior, practicas profesionales, un programa trainee o un proyecto donde pueda aportar y aprender.
            </p>
            <div className="hero-actions centered">
              <a className="button primary" href={`mailto:${profile.email}`}>Enviar correo</a>
              <a className="button secondary" href={profile.cvUrl}>Ver CV</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Diseno alternativo hecho con React por {profile.name}. Version editable para seguir mejorando.</p>
      </footer>
    </div>
  )
}

export default App
