import { useParams } from "react-router-dom";

const StudentDetails = () => {
	const  {studentId} = useParams()
	console.log(studentId)
	return (
		<div>
		<p>`student details ${studentId}`</p>
		</div>
	);
};

export default StudentDetails;