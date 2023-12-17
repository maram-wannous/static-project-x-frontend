import ProjectDash from "../../../Components/ProjectDash/ProjectDash.jsx";
import {TaskDash} from "../../../Components/TaskDash/TaskDash.jsx";
import WorkLog from "../../../Components/WorkLog/WorkLog.jsx";
import Performance from "../../../Components/Performance/Performance.jsx";
import "./dashboard.css";
import '../../../Components/TaskDash/TaskDash.css';
import '../../../Components/Performance/Performance.css';




export default function Home() {
    return (
        <div className="mh-100vh RA-bgBlue">
            <div className="header-style">
                <h1 className='header-style' >Dashboard</h1>
            </div>

            <div className="py-2">
                <div className="row px-4">
                    <div className="col-md-6 mt-2">
                        <ProjectDash/>
                    </div>
                    <div className="col-md-6 mt-2">
                        <div className="RA-bgBlue  mr-width-chart-home">
                            <div className="RA-bgWhite RA-MarginBoxProj w-100 h-100">
                                <h1 className="RA-HeaderStyle colorBlack">Tasks</h1>
                                <div className="text-center d-flex justify-content-center">
                                    <div className="w-71">
                                        <TaskDash/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-4">
                    <div className="col-md-6 mt-2">
                        <div className="RA-bgBlue">
                            <div className="RA-bgWhite RA-MarginBoxProj">
                                <h1 className="RA-HeaderStyle colorBlack">Work Log</h1>
                                <div className="text-center d-flex justify-content-center">
                                    <div className="w-85">
                                        <WorkLog/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-2">
                        <div className="RA-bgBlue">
                            <div className="RA-bgWhite RA-MarginBoxProj ">
                                <div className="">
                                    <h1 className="RA-HeaderStyle font-weight-bold colorBlack">Performance</h1>
                                    <Performance/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}