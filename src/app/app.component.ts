import { Component, OnInit } from '@angular/core';
import { projects } from './projects';
import personalProjects from './personal-projects.json';
import { Project } from './projects.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="site-shell">
      <header class="topbar">
        <a class="wordmark" href="#inicio" aria-label="Oscar Echeverría, inicio">
          <span class="wordmark-mark">OE</span>
          <span>Oscar Echeverría</span>
        </a>
        <nav class="main-nav" aria-label="Navegación principal">
          <a href="#habilidades">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#proyectos-personales">Personales</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a class="availability" href="#contacto"><span></span> Disponible para proyectos</a>
      </header>

      <main>
        <section class="hero section-wrap" id="inicio" aria-labelledby="hero-title">
          <div class="hero-copy">
            <p class="eyebrow"><span class="eyebrow-line"></span> FRONTEND · WEB · MOBILE</p>
            <h1 id="hero-title">Senior Frontend<br><span>Developer</span></h1>
            <p class="hero-intro">Soy <strong>Oscar Echeverría</strong>, desarrollador frontend con más de 6 años creando aplicaciones web empresariales con Angular, React y TypeScript, desarrollo móvil con React Native, además de experiencia en backend con NodeJS y .NET.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↗</span></a>
              <a class="text-link" href="#habilidades">Conoce mis habilidades <span aria-hidden="true">↓</span></a>
            </div>
            <div class="hero-resources">
              <a href="https://www.linkedin.com/in/oscar-echeverria-baa5541a4/" target="_blank" rel="noreferrer">
                <svg class="resource-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0ZM7.13 20.45H3.57V9h3.56v11.45ZM5.35 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm15.1 13.02H16.9v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.42v6.32Z"/></svg>
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/oskrecheverria1996" target="_blank" rel="noreferrer">
                <svg class="resource-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.31-3.76-1.31-.51-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.34 2.23 3.13 1.6.1-.73.39-1.23.7-1.51-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.71.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.02.75 2.07v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href="/Oscar%20Echeverria%20CV.pdf" download="Oscar-Echeverria-CV.pdf">
                <svg class="resource-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V8h4.5L13 3.5ZM8 12v1.5h8V12H8Zm0 3.5V17h8v-1.5H8Z"/></svg>
                Descargar CV <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div class="hero-note"><span class="note-rule"></span><span>APLICACIONES EMPRESARIALES · SAAS · TELECOM · BANCA DIGITAL</span></div>
          </div>
          <div class="hero-visual" aria-label="Ilustración abstracta de sistemas conectados">
            <div class="visual-glow"></div>
            <div class="visual-grid"></div>
            <div class="orbit orbit-outer"></div>
            <div class="orbit orbit-middle"></div>
            <div class="orbit orbit-inner"></div>
            <div class="orbit-center"><span>OE</span><i></i></div>
            <span class="orbit-node node-one"></span>
            <span class="orbit-node node-two"></span>
            <span class="orbit-node node-three"></span>
            <span class="orbit-node node-four"></span>
            <div class="visual-label label-top"><span class="label-dot"></span> EXPERIENCIAS DIGITALES</div>
            <div class="visual-label label-bottom">FRONTEND <span>↗</span></div>
            <div class="visual-index">01 <span>/</span> 04</div>
          </div>
        </section>

        <section class="about section-wrap section-pad" id="habilidades" aria-labelledby="about-title">
          <div class="section-heading">
            <p class="eyebrow"><span class="eyebrow-line"></span> 01 / HABILIDADES</p>
            <p class="section-kicker">WEB · MOBILE · PRODUCTOS EMPRESARIALES</p>
          </div>
          <div class="about-grid">
            <h2 id="about-title">Tecnologías con las que <span>construyo.</span></h2>
            <div class="about-copy">
              <div class="skills-grid" aria-label="Tecnologías y habilidades">
                <article class="skill-group">
                  <h3>Frontend &amp; Mobile</h3>
                  <div class="skill-list">
                    <span>TypeScript</span><span>JavaScript</span><span>Angular</span><span>React</span><span>React Native</span><span>Mobile</span><span>RxJS</span><span>Angular Signals</span><span>Reactive Forms</span><span>Zustand</span><span>HTML5</span><span>CSS3</span><span>Tailwind</span><span>Bootstrap</span>
                  </div>
                </article>
                <article class="skill-group">
                  <h3>Backend &amp; APIs</h3>
                  <div class="skill-list">
                    <span>Node.js</span><span>NestJS</span><span>Express.js</span><span>.NET</span><span>REST APIs</span>
                  </div>
                </article>
                <article class="skill-group">
                  <h3>Testing &amp; calidad</h3>
                  <div class="skill-list">
                    <span>Jest</span><span>Jasmine</span><span>Karma</span><span>SonarQube</span>
                  </div>
                </article>
                <article class="skill-group">
                  <h3>Cloud &amp; DevOps</h3>
                  <div class="skill-list">
                    <span>AWS</span><span>Google Cloud</span><span>CI/CD</span><span>Docker</span><span>Kubernetes</span><span>Jenkins</span>
                  </div>
                </article>
                <article class="skill-group">
                  <h3>Colaboración &amp; diseño</h3>
                  <div class="skill-list">
                    <span>Git</span><span>GitHub</span><span>GitLab</span><span>Agile / Scrum</span><span>DDD</span><span>GitHub Copilot</span><span>Figma</span>
                  </div>
                </article>
                <article class="skill-group">
                  <h3>AI</h3>
                  <div class="skill-list">
                    <span>Claude</span><span>OpenAI</span><span>Gemini</span><span>Ollama</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div class="principles">
            <article><span class="principle-number">01</span><h3>Frontend moderno</h3><p>Experiencias web empresariales construidas con Angular, React y TypeScript.</p></article>
            <article><span class="principle-number">02</span><h3>Integración de servicios</h3><p>Conexión de interfaces con APIs y servicios backend.</p></article>
            <article><span class="principle-number">03</span><h3>Trabajo en equipo</h3><p>Colaboración multidisciplinaria con prácticas Agile y foco en calidad.</p></article>
          </div>
        </section>

        <section class="projects section-wrap section-pad" id="proyectos" aria-labelledby="projects-title">
          <div class="section-heading">
            <p class="eyebrow"><span class="eyebrow-line"></span> 02 / EXPERIENCIA</p>
            <p class="section-kicker">SAAS · TELECOMUNICACIONES · BANCA DIGITAL</p>
          </div>
          <div class="projects-intro">
            <h2 id="projects-title">Casos de <span>estudio.</span></h2>
            <p>Experiencia en aplicaciones empresariales y productos digitales de distintos sectores. Estos son algunos de los proyectos en los cuales he colaborado a lo largo de mi desarrollo profesional.</p>
          </div>
          <div class="project-grid">
            @for (project of projects; track project.number) {
              <a class="project-card" [class]="'project-card accent-' + project.accent"  [href]="project.infoUrl" target="_blank" rel="noreferrer" [attr.data-tooltip]="project.infoUrl !== '' ? 'Ver mas información' : null">
                <div class="card-top"><span>{{ project.number }} <span class="card-slash">/</span> {{ project.category }}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
                <!-- Imagenes -->
                <!-- <img class="project-thumbnail" [src]="project.thumbnailUrl" [alt]="project.title" loading="lazy" /> -->
                <div class="project-art" aria-hidden="true">
                  <div class="art-ring ring-one"></div><div class="art-ring ring-two"></div><div class="art-ring ring-three"></div>
                  <span class="art-node art-node-one"></span><span class="art-node art-node-two"></span><span class="art-node art-node-three"></span>
                  <span class="art-core"></span>
                  <span class="art-code">{{ project.number }}.0</span>
                </div>
                <h3>{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="tag-list">
                  @for (tag of project.tags; track tag) {
                    <span>{{ tag }}</span>
                  }
                </div>
              </a>
            }
          </div>
         
        </section>

        <section class="personal-projects section-wrap section-pad" id="proyectos-personales" aria-labelledby="personal-projects-title">
          <div class="section-heading">
            <p class="eyebrow"><span class="eyebrow-line"></span> 03 / PROYECTOS PERSONALES</p>
            <a class="github-profile-link" href="https://github.com/oskrecheverria1996" target="_blank" rel="noreferrer">Ver perfil de GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <div class="personal-projects-intro">
            <h2 id="personal-projects-title">Exploraciones <span>personales.</span></h2>
            <p>Proyectos propios para experimentar, aprender y compartir código.</p>
          </div>
          <div class="personal-project-grid">
            @for (project of personalProjects; track project.number) {
              <a class="personal-project-card" [href]="project.repoUrl" target="_blank" rel="noreferrer" data-tooltip="Ver repositorio">
                <div class="personal-card-top"><span>{{ project.number }} / {{ project.category }}</span><span aria-hidden="true">⌘</span></div>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="personal-tags">
                  @for (tag of project.tags; track tag) {
                    <span>{{ tag }}</span>
                  }
                </div>
              </a>
            }
          </div>
          
        </section>

        <section class="contact section-wrap section-pad" id="contacto" aria-labelledby="contact-title">
          <div class="section-heading">
            <p class="eyebrow"><span class="eyebrow-line"></span> 04 / CONTACTO</p>
            <p class="section-kicker">UNA BUENA CONVERSACIÓN PUEDE SER EL INICIO</p>
          </div>
          <div class="contact-panel">
            <div class="contact-copy">
              <p class="eyebrow"><span class="eyebrow-line"></span> ¿TIENES UN RETO?</p>
              <h2 id="contact-title">Hagamos que las cosas <span>fluyan.</span></h2>
              <p>Si tu equipo está construyendo un producto web o móvil y necesita experiencia en Angular, React o TypeScript, conversemos.</p>
              <a class="button button-primary" href="mailto:oskr.echeverria1996@gmail.com?subject=Hablemos%20de%20un%20proyecto">Escríbeme <span aria-hidden="true">↗</span></a>
            </div>
            <div class="contact-aside">
              <span class="aside-label">CONTACTO DIRECTO</span>
              <a class="contact-email" href="mailto:oskr.echeverria1996@gmail.com">oskr.echeverria1996&#64;gmail.com <span aria-hidden="true">↗</span></a>
              <span class="aside-label aside-social-label">PERFILES</span>
              <a class="social-link" href="https://www.linkedin.com/in/oscar-echeverria-baa5541a4/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a class="social-link" href="https://github.com/oskrecheverria1996" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a class="social-link" href="/Oscar%20Echeverria%20CV.pdf" download="Oscar-Echeverria-CV.pdf">Descargar CV <span aria-hidden="true">↓</span></a>
              <span class="contact-location"><span class="location-dot"></span> Latinoamérica · Disponible Remoto/Hibrido</span>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer section-wrap">
        <a class="wordmark footer-wordmark" href="#inicio"><span class="wordmark-mark">OE</span><span>Oscar Echeverría</span></a>
        <p>Experiencias digitales cuidadas. Productos listos para crecer.</p>
        <span>© {{ currentYear }} · HECHO CON INTENCIÓN</span>
      </footer>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  protected projects: Project[] = projects;
  readonly personalProjects = personalProjects;
  readonly currentYear = new Date().getFullYear();
  
  ngOnInit(): void {
    // this.generateThumbnails();
  }

  // generateThumbnails() {
  //   this.projects = this.projects.map(project => {
  //     const endpoint = new URL('https://free.pagepeeker.com/v2/thumbs.php');
  //     endpoint.searchParams.set('size', 'x');
  //     endpoint.searchParams.set('url', project.infoUrl);

  //     return {
  //       ...project,
  //       thumbnailUrl: endpoint.toString()
  //     };
  //   });
  // }
}
