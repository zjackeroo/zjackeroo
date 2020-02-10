import MaterialIcon from './MaterialIcon.js';

export default function Projects(projects){
    return `
    <section id="projects">
        <h1 class="title animated infinite pulse delay-3s slow">Projects</h1>
        <div class="filter">
            <label>
                <input type="radio" name="filter" value="all" checked>
                All
            </label>
            <label>
                <input type="radio" name="filter" value="tag one">
                tag one
            </label>
            <label>
                <input type="radio" name="filter" value="tag two">
                tag two
            </label>
            <label>
                <input type="radio" name="filter" value="tag three">
                tag three
            </label>
        </div>
        <div class="project-list">
            ${renderProjectItems(projects)}
        </div>
    </section>`;
}

function renderProjectItems(projects){
    return projects.map(d=>`
        <div class="row">
            <div class="col-6">
                <div class="project-title">
                    <a href="?project=${d.id}"><strong>${d.title}</strong></a>
                </div>
                <div class="project-authors">
                    ${d.authors}<br>
                </div>
                <div class="project-source">
                    <em>${d.source}</em>
                </div>
                <div class="project-tags">
                    ${d.tags.map(tag=>`
                        <span class="tag ${tag.toLowerCase()}">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <div class="project-materials">
                    ${d.materials.map(m=>`
                        <span>
                            <a href="${m.path}" target="_blank">${MaterialIcon(m.label)} 
                            ${m.label}
                            </a>
                        </span>
                    `).join('')}
                    
                </div>
            </div>
            <div class="col-6">
                <img src="${d.teaser}" width="100%">
            </div>
        </div>
    `).join('');
}

export function renderProjectDetail(d){
    return `
    <section>
        <h1 class="title">${d.title}</h1>
        <div class="project-photo">
            <img src="${d.photo}" width="50%">
        </div>
        <div class="project-authors">
            ${d.authors}
        </div>
        <div class="project-source">
            <em>${d.source}</em>
        </div>
        <div class="project-tags">
            ${d.tags.map(tag=>`
                <span class="tag ${tag.toLowerCase()}">
                    ${tag}
                </span>
            `).join('')}
        </div>
        <div class="project-desc">
            <p>
                ${d.desc}
            </p>
        </div>
        <div class="project-materials">
            ${d.materials.map(m=>`
                <span>
                    <a href="${m.path}" target="_blank">${MaterialIcon(m.label)} 
                    ${m.label}
                    </a>
                </span>
            `).join('')}
        </div>
    </section>
    `
}

export function handleProjectFilter(data){
    let conds = document.querySelectorAll('.filter input[name="filter"]');
    console.log(typeof conds);
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        
        let checked = event.target.value; //Array.from(conds).filter(d=>d.checked).map(d=>d.value);
        if (checked==='all'){
            document.querySelector('.project-list').innerHTML = renderProjectItems(data.projects);
        }else{
            let filtered = data.projects.filter(d=>{
                return d.tags.some(tag=>checked === tag.toLowerCase());
            });
            // console.log('filtered', filtered);
        
            document.querySelector('.project-list').innerHTML = renderProjectItems(filtered);
        }
    
    }));
}
