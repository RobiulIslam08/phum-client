/* eslint-disable @typescript-eslint/no-explicit-any */
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
      <form onSubmit={method.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHFrom;
