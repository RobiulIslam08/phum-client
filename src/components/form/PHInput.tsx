
import { useFormContext } from 'react-hook-form';

const PHInput = ({type,name,label}) => {
	const {register} = useFormContext()
	return (
		<>
		{label?? label}
		 <input type={type} id={name} {...register(name)} />	
		</>
	);
};

export default PHInput;