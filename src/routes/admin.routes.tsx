import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";
import { ReactNode } from "react";
type TRoute = {
	path: string,
	element: ReactNode,
	children?: TRoute[]
}
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

// programitical way
export const adminroutes = adminPaths.reduce((acc:TRoute[], item) => {
	
	if(item.path && item.element){
		acc.push({
			path:item.path,
		element:item.element
		})
	}
	if(item?.children) {
		item.children.forEach(child => {
			acc.push({
			path:child.path,
		element:child.element
		})
		});
	}
	return acc
},[])

// hard codded way
export const adminPaths2 = [
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
				element:<CreateStudent/>
			},
			{
				name:'Create Faculty',
				path:'/admin/create-faculty',
				element:<CreateFaculty/>
			},
		]
	}
]
