import React from "react"
import "./Dashboard.css"

class Dashboard extends React.Component {
    render(){
        return(
            <div className="dashboardMain">
                <div className="dashboardInfo">
                    <div className="dashboardSubHeader">
                        <h1>Anstehendes Turnier</h1>
                    </div>
                    <div className="dashboardSubMeta">
                        <div className="dashboardItem">
                            <label className="dashboardDescriptor">name</label>
                            <p>Test Turnier Hanomacke #1 2019</p>
                        </div>
                        <div className="dashboardItem">
                            <label className="dashboardDescriptor">teams</label>
                            <p>20/64 (31.3%)</p>
                        </div>
                        <div className="dashboardItem">
                            <label className="dashboardDescriptor">registration</label>
                            <p>open</p>
                        </div>
                    </div>
                </div>
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
                    <div className="dashboardTeams">
                        <div className="dashboardSubHeader"><h1>Teams</h1></div>
                        <div className="dashboardTeamsContent">
                            <table>
                                <tr>
                                    <th>#</th>
                                    <th>Teamname</th>
                                    <th>Spieler1</th>
                                    <th>Spieler2</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Afro Boys</td>
                                    <td>Helge</td>
                                    <td>Fred</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Afro Boys2</td>
                                    <td>Helge</td>
                                    <td>Fred</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Afro Boys3</td>
                                    <td>Helge</td>
                                    <td>Fred</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Afro Boys4</td>
                                    <td>Helge</td>
                                    <td>Fred</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard