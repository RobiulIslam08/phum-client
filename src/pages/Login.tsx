import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHFrom from "../components/form/PHFrom";
import PHInput from "../components/form/PHInput";

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
    console.log(data);
    // const toastId = toast("loging in");
    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   navigate(`/${user.role}/dashboard`)
    //   toast.success("Login successufll", {
    //     id: toastId,
    //     duration: 5000,
    //   });
    //   console.log(res);
    // } catch {
    //   toast.error("something went wrong", { id: toastId });
    // }
  };
  return (
    <div>
      Login page
      <PHFrom onSubmit={onSubmit}>
        <div>
          <PHInput type="id" name="id" label="Id" />
        </div>
        <div>
          <PHInput type="password" name="password" label="Password" />
        </div>

        <Button htmlType="submit">Submit</Button>
      </PHFrom>
    </div>
  );
};

export default Login;
