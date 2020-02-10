let photos = ['./logo.jpg']

export default function About(about){
    return `
    <section id="about">
        <h1 class="title animated infinite pulse delay-1s slow">${about.name}</h1>
        <div class="row">
            <div class="col-6">
                <img class="profile-img" src="Assets/${_.sample(photos)}"/>
                <p>
                    <strong>${about.title}</strong><br>
                    ${about.email} <br>
                    ${about.address}<br>
                    <a href="${about.resume}" target="_blank"><i class="far fa-file-alt"></i> Resume</a> |
                    <a href="${about.twitter}" target="_blank"><i class="fab fa-twitter"></i></a> | 
                    <a href="${about.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a> | 
                    <a href="${about.github}" target="_blank"><i class="fab fa-github"></i></a><br>
                </p>
            </div>
            <div class="col-6">
                <p>
                ${about.desc}
                </p>
            </div>
            
        </div >    
    </section>`
}
