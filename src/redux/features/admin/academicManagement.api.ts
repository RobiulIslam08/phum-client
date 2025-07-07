import { TAcademicSemester } from "../../../types/academicManagement.type";
import { TResponseRedux } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllSemester: builder.query({
			query: () => ({
				url:'/academic-semester',
				method:'GET'
			}),
			transformResponse: (response:TResponseRedux<TAcademicSemester[]>) =>{
				
				return {
					data:response.data,
					meta:response.meta
				}
			}
		}),
		addAcademicSemester: builder.mutation({
			query: (data) => ({
				url:'/academic-semester/create-academic-semester',
				method:'POST',
				body:data
			})
		})
	})
})
export const {useGetAllSemesterQuery, useAddAcademicSemesterMutation} = academicManagementApi