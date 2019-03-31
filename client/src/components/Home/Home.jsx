import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"

const Home = (props) => (

    <React.Fragment>
        { <div className="home__parallax" ></div>}
        <div className="home_content">
            <div className="home_h1">
                <h1>Wir sind Beer Pong Hannover!</h1> 
            </div>
            <div className="homeFlex">
                <p>
                    Die Community für Turniere und mehr! Seit 2012 veranstalten wir unregelmäßig Beer Pong Turniere in Hannover und Umgebung.
                    Unsere Heimat ist die Cafeteria hanOMacke e.V. auf dem Conti-Campus der Leibniz Universität Hannover.
                </p>
                <p>
                    Neben den hanOMacke-Turnieren nutzen wir jede Chance ein solides Turnier in der Region Hannover zu veranstalten. Hier findet ihr eine Übersicht über diese, sowie Ankündigungen von zukünftigen Turnieren
                </p>
            </div>
            <Link to="/turniere" style={{fontSize: "1.5rem", fontWeight: "600"}}>Zu den Turnieren</Link>
        </div>
    </React.Fragment>
)

export default Home