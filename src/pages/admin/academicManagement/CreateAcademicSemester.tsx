import { Button } from "antd";
import PHFrom from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";


const CreateAcademicSemester = () => {
	const onSubmit:SubmitHandler<FieldValues> = (data) => {
		console.log(data)
	}
	return (
		<PHFrom
			onSubmit={onSubmit}
			defaultValues={{ name: "" }}
		>
			<PHInput type='text' name='name' label="Name"/>
			<Button htmlType="submit" >Submit</Button>
		</PHFrom>
	);
};

export default CreateAcademicSemester;