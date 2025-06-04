import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";
export const adminPaths = [
  {
   index:true,
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
];

const adminPaths2 = [
	{
		name:'Dashboard',
		path:'/admin/dashboard',
		element:<AdminDashboard/>
	},
	{
		name:"User Management",
		children:[
			{
				name:'Create Admin',
				path:'/admin/create-admin',
				element:<CreateAdmin/>
			},
			{
				name:'Create Student',
				path:'/admin/create-student',
				element:<CreateAdmin/>
			},
			{
				name:'Create Faculty',
				path:'/admin/create-faculty',
				element:<CreateAdmin/>
			},
		]
	}
]
