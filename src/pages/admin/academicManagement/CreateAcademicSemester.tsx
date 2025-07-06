import { Button, Col, Flex } from "antd";
import PHFrom from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";


const nameOptions = [
  {
    value:'01',
    label:'Autumn'
  },
  {
    value:'02',
    label:'Summer'
  },
  {
    value:'03',
    label:'Fall'
  },
]
const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const semesterData = {
      name:'something',
      code: 'something'
    }
    console.log(semesterData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={7}>
        <PHFrom onSubmit={onSubmit} >
          {/* <PHInput type="text" name="name" label="Name" />
          <PHInput type="text" name="year" label="Year" /> */}
          <PHSelect label='Name' name='name' options={nameOptions}/>
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
