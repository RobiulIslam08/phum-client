/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import {  FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
type TFormProps = {
  onSubmit:SubmitHandler<FieldValues>,
  children:ReactNode,

} & TFormConfig
type TFormConfig = {
defaultValues:Record<string, any>
} 
const PHFrom = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {
    defaultValues: defaultValues
  };
  const method = useForm(formConfig);
  return (
    <FormProvider {...method}>
      <Form layout="vertical" onFinish={method.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
};

export default PHFrom;
