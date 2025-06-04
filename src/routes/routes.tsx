import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { adminPaths, adminroutes } from "./admin.routes";


export const router = createBrowserRouter([

	{
		path:"/",
		element:<App></App>,
		children:[
			{
				index:true,
				element:<About></About>,
			},
			{
				path:'contact',
				element:<Contact></Contact>
			}
		]
	},
	{
		path:'/admin',
		element:<App></App>,
		children:adminroutes
	}
])