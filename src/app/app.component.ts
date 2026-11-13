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
          <a href="#sobre-mi">Sobre mí</a>
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
            <p class="hero-intro">Soy <strong>Oscar Echeverría</strong>, desarrollador frontend con más de 6 años creando aplicaciones web empresariales con Angular, React y TypeScript, además de experiencia en desarrollo móvil con React Native.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↗</span></a>
              <a class="text-link" href="#sobre-mi">Conoce más <span aria-hidden="true">↓</span></a>
            </div>
            <div class="hero-resources">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="/cv-oscar-echeverria.pdf" download="Oscar-Echeverria-CV.pdf">Descargar CV <span aria-hidden="true">↓</span></a>
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
          <div class="hero-foot"><span>SCROLL PARA EXPLORAR</span><span class="scroll-mark">↓</span><span class="hero-foot-place">LATINOAMÉRICA · REMOTO</span></div>
        </section>

        <section class="about section-wrap section-pad" id="sobre-mi" aria-labelledby="about-title">
          <div class="section-heading">
            <p class="eyebrow"><span class="eyebrow-line"></span> 01 / SOBRE MÍ</p>
            <p class="section-kicker">WEB · MOBILE · PRODUCTOS EMPRESARIALES</p>
          </div>
          <div class="about-grid">
            <h2 id="about-title">Frontend sólido para productos <span>que mueven negocios.</span></h2>
            <div class="about-copy">
              <p>Soy Senior Frontend Developer con más de 6 años de experiencia desarrollando aplicaciones web empresariales con Angular, React y TypeScript, y conocimientos de desarrollo móvil con React Native.</p>
              <p>He trabajado en productos SaaS, telecomunicaciones y banca digital, colaborando con equipos multidisciplinarios y metodologías Agile. Mi experiencia incluye arquitecturas frontend modernas, integración con APIs y servicios backend, pruebas unitarias y trabajo con plataformas cloud.</p>
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
                    <span>Node.js</span><span>NestJS</span><span>Express.js</span><span>REST APIs</span>
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
            <p>Experiencia en aplicaciones empresariales y productos digitales de distintos sectores. Estas fichas son ejemplos editables: puedes completarlas con proyectos, responsabilidades y resultados concretos.</p>
          </div>
          <div class="project-grid">
            @for (project of projects; track project.number) {
              <a class="project-card" [class]="'project-card accent-' + project.accent"  [href]="project.infoUrl" target="_blank" rel="noreferrer" [attr.title]="project.infoUrl !== '' ? 'Ver mas información' : null">
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
          <p class="projects-note"><span>NOTA</span> Las fichas ilustran los sectores indicados en tu perfil. Personalízalas con nombres, contribuciones y métricas reales antes de publicar.</p>
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
              <a class="personal-project-card" [href]="project.repoUrl" target="_blank" rel="noreferrer" title="Ver repositorio">
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
          <p class="projects-note"><span>CONFIGURACIÓN</span> Reemplaza los ejemplos y añade las URLs reales de tus repositorios en <code>personal-projects.json</code>.</p>
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
              <a class="social-link" href="/cv-oscar-echeverria.pdf" download="Oscar-Echeverria-CV.pdf">Descargar CV <span aria-hidden="true">↓</span></a>
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
    this.generateThumbnails();
  }

  generateThumbnails() {
    this.projects = this.projects.map(project => {
      const endpoint = new URL('https://free.pagepeeker.com/v2/thumbs.php');
      endpoint.searchParams.set('size', 'x');
      endpoint.searchParams.set('url', project.infoUrl);

      return {
        ...project,
        thumbnailUrl: endpoint.toString()
      };
    });
  }
}
