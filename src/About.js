import React, {Component} from "react";
import "./About.css"
class About extends Component {
    render(){
        return(
            <div className="about">
                <h2>About me</h2>
                <div className="border"></div>
                <p>I am a developer. I also love cycling,swimming and reading books.
                I love to code and if you are intrested to contact me for work head over to 
                the contact page.</p>
            </div>
        )
    }
}
export default About;