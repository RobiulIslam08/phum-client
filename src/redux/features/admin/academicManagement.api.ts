import { TAcademicDepartment, TAcademicSemester } from "../../../types/academicManagement.type";
import { TQueryParams, TResponseRedux } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args) => {
		const params = new URLSearchParams()
		if(args) {
			args.forEach((item: TQueryParams) => {
				params.append(item.name, item.value as string)
			});
		}
		
        return {
          url: "/academic-semester",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
     getAcademicDepartments: builder.query({
      query: () => {
        return { url: '/academic-department', method: 'GET' };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semester/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation,useGetAcademicDepartmentsQuery } =
  academicManagementApi;
