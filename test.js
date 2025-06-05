const adminPaths2 = [
	{
		name:'Dashboard',
		path:'dashboard',
		element:'AdminDashboard'
	},
	{
		name:"User Management",
		children:[
			{
				name:'Create Admin',
				path:'create-admin',
				element:'CreateAdmin'
			},
			{
				name:'Create Student',
				path:'create-student',
				element:'CreateStudent'
			},
			{
				name:'Create Faculty',
				path:'create-faculty',
				element:'CreateFaculty'
			},
		]
	}
]
// const adminRoutes = adminPaths2.reduce((acc, item) => {
	
// 	if(item.path && item.element){
// 		acc.push({
// 			path:item.path,
// 		element:item.element
// 		})
// 	}
// 	if(item.children) {
// 		item.children.forEach(child => {
// 			acc.push({
// 			path:child.path,
// 		element:child.element
// 		})
// 		});
// 	}
// 	return acc
// },[])

const adminSidebarItems = adminPaths2.reduce((acc, item) => {
	
	if(item.path && item.name){
		acc.push({
			key:item.path,
		label:"Navlink"
		})
	}
	if(item.children){
		acc.push({
			key:item.name,
			label:item.name,
			children:item.children.map(child => (
				{
					key:child.name,
					label:"navlink"
				}
			))
		})
	}
	
	return acc
},[])
console.log(newArray)