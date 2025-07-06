import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";



const AcademicSemester = () => {
	const {data} = useGetAllSemesterQuery(undefined) 
	console.log(data)
	return (
		<div>
			academic semster
		</div>
	);
};

export default AcademicSemester;