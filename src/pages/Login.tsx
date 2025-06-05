import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123456",
    },
  });
  const [login, { data, error }] = useLoginMutation();
  console.log("data =>", data);
  console.log("error =>", error);
  const onSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user: user, token: res.data.accessToken }));
    console.log(res);
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
