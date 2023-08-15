function Projects(){
    return(
        <div name="projects" className="projects">
            <h1>PROJECTS</h1>
            <div className="projects_cont">   
                <div className="projects_item">
                    <div className="preview-image">
                        <img src="./Images/digital-collections.PNG" alt="" />
                    </div>
                </div>
                <div className="projects_item description">
                    <h3>Ecommerce store</h3>
                    <p>An ecommerce store is designed to help users<br/>
                       shop for their desired products.</p>
                       <p><strong>React &nbsp;&nbsp;&nbsp;&nbsp; CSS</strong></p> 
                    <a href="https://github.com/BraveScorpion/digital-collections" target="_blank">view source code</a>
                    <a href="https://digital-callactions.onrender.com" target="_blank">view live site</a>
                </div>      
            </div>
            <div className="projects_cont alternate">   
                <div className="projects_item">
                    <div className="preview-image">
                        <img src="./Images/insurance-landing-page.PNG" alt="" />
                    </div>
                </div>
                <div className="projects_item description">
                    <h3>Insurance landing page</h3>
                    <p>An insurance company landing page designed<br/>
                       to get users attention and provide a brief about the<br/>
                       companies services and values.
                    </p>
                       <p><strong>React &nbsp;&nbsp;&nbsp;&nbsp; SCSS</strong></p> 
                    <a href="https://github.com/BraveScorpion/insurance_website" target="_blank">view source code</a>
                    <a href="https://insurance-landing-page.onrender.com" target="_blank">view live site</a>
                </div>
            </div>
            <div className="projects_cont">   
                <div className="projects_item">
                    <div className="preview-image">
                        <img src="./Images/movie-app.PNG" alt="" />
                    </div>
                </div>
                <div className="projects_item description">
                    <h3>Movie app</h3>
                    <p>A movie web app that allows you to search for your favourite<br/>
                       movies or discover your next favourite thing. This web app gets movie data<br/>
                       from TMBD API.
                       </p>
                       <p><strong>HTML &nbsp;&nbsp; CSS  &nbsp;&nbsp; Javascript</strong></p> 
                    <a href="https://github.com/BraveScorpion/Movie-App" target="_blank">view source code</a>
                    <a href="https://movie-app-336p.onrender.com/" target="_blank">view live site</a>
                </div>
                
            </div>
        </div>
    )
}
export default Projects;