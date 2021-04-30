import React from 'react'
import {Table} from 'antd'

class SpinDemo extends React.Component {
  state = {
   columns:  [
    {
      title: '姓名',
      dataIndex: 'name',
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
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: '性别',
      dataIndex: 'sex',
    },
    {
      title: '职工号',
      dataIndex: 'number',
    },
    {
      title: '离校时间',
      dataIndex: 'time',
    },
    {
      title: '离校去向',
      dataIndex: 'targed',
    },
    {
      title: '目标单位',
      dataIndex: 'complay',
    },
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   defaultSortOrder: 'descend',
    //   sorter: (a, b) => a.age - b.age,
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   filters: [
    //     {
    //       text: 'London',
    //       value: 'London',
    //     },
    //     {
    //       text: 'New York',
    //       value: 'New York',
    //     },
    //   ],
    //   filterMultiple: false,
    //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortDirections: ['descend', 'ascend'],
    // },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div size="middle">
          <a>修改</a>
          <a>删除</a>
        </div>
      ),
    },
  ],
  data: [
    {
      key: '1',
      name: '张三',
      sex:'男',
      number: '001',
      time: '2021/5/1',
      targed: '东京',
      complay: '东京大学',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: '李四',
      sex:'男',
      number: '002',
      time: '2021/5/7',
      targed: '美国',
      complay: '哈弗大学',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '3',
      name: '王二',
      sex:'男',
      number: '003',
      time: '2021/6/3',
      targed: '中国',
      complay: '北京大学',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '4',
      name: '刘丽',
      sex:'女',
      number: '004',
      time: '2021/5/9',
      targed: '中国',
      complay: '清华大学',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
  ]
  }

  onChange = (pagination, filters, sorter, extra) =>{
    console.log('params', pagination, filters, sorter, extra);
  } 
 

  render() {
    const {columns,data} = this.state
    return (
      <div>
        <Table columns={columns} dataSource={data} onChange={this.onChange} />
      </div>
    )
  }
}

export default SpinDemo