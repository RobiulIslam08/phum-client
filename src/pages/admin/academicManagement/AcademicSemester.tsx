import { Table } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import type { TableColumnsType, TableProps } from 'antd';
import { TAcademicSemester } from "../../../types/academicManagement.type";
type TTableData = Pick<TAcademicSemester, '_id'| 'name'| 'year' | 'startMonth' | 'endMonth'>
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
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
	const {data:semesterData} = useGetAllSemesterQuery([{name:'year', value:'2025'}]) 
  const tableData = semesterData?.data?.map(({_id,year, name, startMonth, endMonth}) => ({
    _id,year, name, startMonth, endMonth
  }))
	
	return (
		<Table<TTableData>
    columns={columns}
    dataSource={tableData}

    showSorterTooltip={{ target: 'sorter-icon' }}
  />
	);
};

export default AcademicSemester;