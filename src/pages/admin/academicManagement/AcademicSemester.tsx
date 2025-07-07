import { Table } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import type { TableColumnsType, TableProps } from 'antd';
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
type TTableData = Pick<TAcademicSemester, '_id'| 'name'| 'year' | 'startMonth' | 'endMonth'>
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    filters: [
      {
        text: 'Autumn',
        value: 'Autumn',
      },
      {
        text: 'Summer',
        value: 'Summer',
      },
      {
       text: 'Fall',
        value: 'Fall',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    
  },
  {
    title: 'Year',
    dataIndex: 'year',
     filters: [
      {
        text: '2025',
        value: '2025',
      },
      {
        text: '2026',
        value: '2026',
      },
      {
       text: '2027',
        value: '2027',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    
  
  },
  {
    title: 'Start Month',
    dataIndex: 'startMonth',
  },
  {
    title: 'End Month',
    dataIndex: 'endMonth',
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];




const AcademicSemester = () => {
  const [params, setParams] = useState([])
	const {data:semesterData} = useGetAllSemesterQuery(params) 
  const tableData = semesterData?.data?.map(({_id,year, name, startMonth, endMonth}) => ({
    key:_id,year, name, startMonth, endMonth
  }))
	const onChange: TableProps<TTableData>['onChange'] = (pagintion, filters, sorter, extra) => {
  console.log('params',  filters,  extra);
  if(extra.action === 'filter'){
    const queryParams = []
    filters.name?.forEach((item) => 
      queryParams.push({name:'name', value:item})
    )
    filters.year?.forEach((item) => 
      queryParams.push({name:'year', value:item})
    )
    setParams(queryParams)
  }
};
	return (
		<Table<TTableData>
    columns={columns}
    dataSource={tableData}
 onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
	);
};

export default AcademicSemester;