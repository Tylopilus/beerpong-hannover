import React from "react"
import "./Dashboard.css"

class Dashboard extends React.Component {
    


    render(){
        return(
            <div className="dashboardMain">
                <div className="dashboardContent">
                    <div className="dashboardTodo">
                        <div className="dashboardSubHeader"><h1>Todo</h1></div>
                        <div className="dashboardTodoContent">
                            <label className="dashboardDescriptor">Drucken</label>
                            <hr/>
                            <div>
                                <label><input type="checkbox" /> Anmeldung doppelt</label>
                                <label><input type="checkbox" /> Gruppen</label>
                                <label><input type="checkbox" /> K.O.-Phasenplan</label>
                            </div>
                        </div>
                        <div className="dashboardTodoContent">
                            <label className="dashboardDescriptor">Theke</label>
                            <hr/>
                            <div className="">
                                <label><input type="checkbox" /> Bierkästen bereitstellen</label>
                                <label><input type="checkbox" /> Pokal aufs Regal</label>
                                <label><input type="checkbox" /> Ggf. Kasten für Titelverteidiger</label>
                                <label><input type="checkbox" /> Stühle vors Stuhllager</label>
                                <label><input type="checkbox" /> Sofas in L-Form</label>
                                <label><input type="checkbox" /> Sofatische parallel / weg</label>
                                <label><input type="checkbox" /> Tische in 2er Gruppen stellen</label>
                            </div>
                        </div>
                        <div className="dashboardTodoContent">
                            <label className="dashboardDescriptor">Tische</label>
                            <hr/>
                            <div className="">
                                <label><input type="checkbox" /> 16 Tische, Rest vor Stuhlager</label>
                                <label><input type="checkbox" /> 6 Tische l. v. Eingang</label>
                                <label><input type="checkbox" /> 6 Tische r. v. Eingang</label>
                                <label><input type="checkbox" /> 4 Tische oben</label>
                                <label><input type="checkbox" /> Tische in 2er Gruppen stellen</label>
                                <label><input type="checkbox" /> Tischnummern ausstellen</label>
                                <label><input type="checkbox" /> 2x Wash-Cups pro Tisch</label>
                                <label><input type="checkbox" /> 2x Bälle pro Tisch</label>
                                <label><input type="checkbox" /> 1x leerer Kasten pro Tisch</label>
                                <label><input type="checkbox" /> Wurflinien gezogen</label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard