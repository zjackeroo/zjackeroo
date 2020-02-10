import Navbar from './Navbar.js';
import {renderProjectDetail} from './Projects.js';

export default function ProjectPage(project) {
document.querySelector(".container").innerHTML = `
  ${Navbar('project')}
  ${renderProjectDetail(project)}
`
}
