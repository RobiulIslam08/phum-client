import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123456",
    },
  });
  const [login, { data, error }] = useLoginMutation();
  console.log("data =>", data);
  console.log("error =>", error);
  const onSubmit = (data) => {
    const userInfo = {
      id: data.userId,
	  password:data.password
    };
	login(userInfo)
  };
  return (
    <div>
      Login page
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <label htmlFor="id">Id</label>
          <input type="text" id="id" {...register("userId")} />
        </div>
        <div>
          <label htmlFor="password">Passwored</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
