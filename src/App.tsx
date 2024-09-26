import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import albums from './albums.json';
import Section from './components/Section';
import Projects from './components/Projects';
import Project from './components/Project';

function App() {
  return (
    <>
      <header className="sticky top-0 z-10">
        { /* keep nav height in sync with scroll padding (in app css) */ }
        <nav className="navbar w-full h-16 flex justify-between bg-primary-content">
          <a href="/" className="btn btn-ghost text-2xl text-primary">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="36" height="36" viewBox="0 0 998 998"
              preserveAspectRatio="xMidYMid meet"
              className="fill-current"
            >
              <path transform="translate(0,998) scale(0.1,-0.1)" d="M7844 6005 c-472 -1180 -861 -2145 -864 -2145 -3 0 -379 932 -834 2070 l-828 2070 -2419 0 -2419 0 0 -500 0 -500 1000 0 1000 0 0 -2500 0 -2500 500 0 500 0 0 2500 0 2500 582 -2 582 -3 1165 -2913 c641 -1601 1168 -2912 1171 -2912 3 0 595 1473 1315 3273 720 1799 1314 3286 1322 3304 l13 31 -418 167 c-229 92 -438 175 -464 186 l-46 18 -858 -2144z"/>
            </svg>
            Programs
          </a>

          <ul className="menu menu-horizontal">
            <li><a href="#">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#music">Music</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>


      <main className="container mx-auto my-8 px-8 flex flex-col gap-16">
        <Section id="about" title="I'm Taylor Vance. I program.">
          <div className="xl:w-2/3 lg:w-3/4">
            <a className="float-right" href="https://www.credly.com/badges/be48d926-a1e7-4bfb-bc5f-cc3c2d6466db/public_url">
              <img src="/imgs/aws-ccp.png" alt="AWS Certified Cloud Practitioner" className="h-32" />
            </a>
            <p className="text-lg mb-4">
              I am a full-stack developer with a passion for creating efficient web solutions.
              I take pride in writing clean code and building low-maintenance applications.
            </p>
            <p className="text-lg mb-4">
              Currently, I am a senior software engineer at <a href="https://www.engage2excel.com" className="link-primary">Engage2Excel</a>.
              I am also available for freelance work. Please <a href="#contact" className="link-primary">contact me</a> if you would like to discuss a project.
            </p>
            <p className="text-lg">
              Outside of programming, I enjoy <a href="#music" className="link-primary">music</a>, board games, camping, and spending time with my family.
            </p>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="music" title="TV also makes music.">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {albums.map((album) => <Project {...album} key={album.key} />)}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-2">
            <input type="hidden" name="access_key" value="880f40ab-f040-477e-b09d-371c01532e13" />

            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            <textarea name="message" placeholder="Message" className="textarea textarea-bordered" required></textarea>

            <input type="checkbox" name="botcheck" className="hidden" />
            <button type="submit" className="btn btn-outline">Submit</button>
          </form>
        </Section>
      </main>


      <footer>
        <nav className="navbar w-full h-16 flex justify-between bg-primary-content">
          <aside className="text-neutral ml-6">&copy; {new Date().getFullYear()} Taylor Vance</aside>

          <ul className="menu menu-horizontal text-4xl">
            <li><a href="https://github.com/taylorvance" target="_blank"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/taylor-vance/" target="_blank"><FaLinkedin /></a></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default App;
