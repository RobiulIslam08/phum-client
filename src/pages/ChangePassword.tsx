import { Button, Row } from "antd";

import PHInput from "../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";

import { useNavigate } from "react-router-dom";

import PHForm from "../components/form/PHFrom";
import { useAppDispatch } from "../redux/hooks";
import { TResponse } from "../types/global.type";
import { logout } from "../redux/features/auth/authSlice";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const res = (await changePassword(data)) as TResponse<any>;
    console.log(res?.data?.success);
    if (res?.data?.success) {
      try {
        dispatch(logout());
        navigate("/login");
        console.log("Navigation attempted!"); // Add this
      } catch (error) {
        console.error("Error during logout or navigation:", error);
      }
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="oldPassword" label="Old Password" />
        <PHInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default ChangePassword;
