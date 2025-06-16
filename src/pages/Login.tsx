import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    const toastId = toast("loging in");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(`/${user.role}/dashboard`)
      toast.success("Login successufll", {
        id: toastId,
        duration: 5000,
      });
      console.log(res);
    } catch {
      toast.error("something went wrong", { id: toastId });
    }
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
