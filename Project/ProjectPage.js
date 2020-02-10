import Navbar from './Navbar.js';
import Project from './Projects.js';

export default function ProjectPage(project) {
document.querySelector(".container").innerHTML = `
  ${Navbar('project')}
  ${Project(project)}
`
}
