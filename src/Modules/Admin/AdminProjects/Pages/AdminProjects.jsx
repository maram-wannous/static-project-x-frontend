import Performance from "../../../../Components/Performance/Performance";
import { AdminProjects_Projects } from "../Components/AdminProjects_Projects/AdminProjects_Projects";
import { TeamMember } from "../Components/TeamMember/TeamMember";
import { TaskDash } from './../../../../Components/TaskDash/TaskDash';

// import { Performance } from './../../../../Components/Performance/Performance';
import './AdminProjects.css'

export default function AdminProjects() {
    return (
        <div className="">
            <div className="sa_divTitle">
                <p className="header-style">Projects</p>
            </div>
            <div className="sa_divBody gap-1">
            <div className="sa_divStaPerfTMem">
                    <div className="row sa_divstaperf">
                        <div className="col-md-6 mt-2">
                            <div className="RA-bgBlue">
                                <div className="RA-bgWhite RA-MarginBoxProj">
                                    <div className="text-center d-flex justify-content-center ">
                                        <div className="w-71">
                                            <TaskDash/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2">
                            <div className="RA-bgBlue">
                                <div className="RA-bgWhite RA-MarginBoxProj ">
                                    <div className="">
                                        <Performance/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row sa_divTeamMember py-4">
                        <TeamMember/>
                    </div>
                </div>
                <div className="sa_divProjects">
                    <AdminProjects_Projects />
                </div>
            </div>
        </div>
    )
}