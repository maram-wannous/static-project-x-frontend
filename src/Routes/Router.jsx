import App from "../App"
import Dashboard from "../Modules/Dashboard/Pages/Dashboard"
import Home from "../Modules/Dashboard/Pages/Home"
import GuardedRoutes from "./GuardedRoutes"
import Profile from "../Modules/Profile/Pages/Profile";
import WorkLog from "../Modules/WorkLog/Pages/WorkLog";
import UpdateProject from "../Modules/Admin/AdminProjects/Pages/UpdateProject";
import AddProject from "../Modules/Admin/AdminProjects/Pages/AddProject";
import ViewUsers from "../Modules/Admin/Users/Pages/ViewUsers";
import AddUser from "../Modules/Admin/Users/Pages/AddUser";
import UpdateUser from "../Modules/Admin/Users/Pages/UpdateUser";
import UpdateProfile from "../Modules/Profile/Pages/UpdateProfile";
import AdminTasks from "../Modules/Admin/Tasks/Pages/AdminTasks";
import { AdminAllProjects } from "../Modules/Admin/AdminProjects/Pages/AdminAllProjects";
import UserTasks from "../Modules/User/Tasks/Pages/UserTasks";
import UserSubTask from "../Modules/User/Tasks/Pages/UserSubTask";
import AdminSubTask from "../Modules/Admin/Tasks/Pages/AdminSubTask";
import AssignTask from "../Modules/Admin/Tasks/Pages/AssignTask";
import AssignSubTask from "../Modules/Admin/Tasks/Pages/AssignSubTask";
import UserProjects from "../Modules/User/Projects/Pages/UserProjects";
import ProjectDetails from "../Modules/User/Projects/Pages/ProjectDetails";
import AdminProjects from "../Modules/Admin/AdminProjects/Pages/AdminProjects.jsx";
import PerformancePage from "../Modules/Performance/Pages/PerformancePage.jsx";
import Login from "../Modules/Login/Pages/Login.jsx";
import AdminProjectDetails from "../Modules/Admin/AdminProjects/Pages/AdminProjectDetails.jsx";
import UpdateTask from "../Modules/Admin/Tasks/Pages/UpdateTask.jsx";


const isAuthenticated = localStorage.getItem('bearer');

export const routes = [
    
    {
        path: '/static-project-x-frontend/',
        element: <App/>,
    }, 
    {
        path: '/static-project-x-frontend/dashboard/',
        element: <GuardedRoutes
                isAccessable={isAuthenticated}
                OnSucess={() => <Dashboard />}
                OnFaild={() => <Login />}/>
        ,
        children: [
            {
                path: '/static-project-x-frontend/dashboard/',
                element: <Home/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/profile',
                element: <Profile/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/profile/updateprofile',
                element: <UpdateProfile/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/performance',
                element: <PerformancePage/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/worklog',
                element: <WorkLog/>,
            },
            // Admin pages
            {
                path: '/static-project-x-frontend/dashboard/adminprojects',
                element: <AdminProjects/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/adminprojects/projects',
                element: <AdminAllProjects/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/adminprojects/add',
                element: <AddProject/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/adminprojects/update/:id',
                element: <UpdateProject/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/adminprojects/details/:id',
                element: <AdminProjectDetails/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/tasks',
                element: <AdminTasks/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/tasks/update/:id',
                element: <UpdateTask/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/tasks/subtask',
                element: <AdminSubTask/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/tasks/assigntask',
                element: <AssignTask/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/tasks/assignsubtask',
                element: <AssignSubTask/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/users',
                element: <ViewUsers/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/users/add',
                element: <AddUser/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/users/update',
                element: <UpdateUser/>,
            },

            // User Pages
            {
                path: '/static-project-x-frontend/dashboard/usertasks',
                element: <UserTasks/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/usertasks/subtask',
                element: <UserSubTask/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/userprojects',
                element: <UserProjects/>,
            },
            {
                path: '/static-project-x-frontend/dashboard/userprojects/:id',
                element: <ProjectDetails/>,
            },
        

            

            // {
            //     element: <RequireAuth allowedRole={'admin'}/>,
            //     children: [
            //         {       هون بحط الصفحات الخاصة بالأدمن
                        
            //         }                  
            //     ]
            // },
            // {
            //     element: <RequireAuth allowedRole={'user'}/>,
            //     children: [
            //         {   هون بحط الصفحات الخاصة باليوزر
                       
            //         }
            //     ]
            // }

        ]
    
    }
   
]