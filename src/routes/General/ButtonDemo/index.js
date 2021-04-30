import React, { useState } from 'react'
import {Table, Modal, Form,Input} from 'antd'


const ButtonDemo = (props) => {

  const [modalShow,setModalShow] = useState(false)
  const handleOk = () => {
    setModalShow(true)
  }
  
  const handleCancel = () => {
    setModalShow(false)
  }
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '性别',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '出生日期',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '身份证号',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '文化程度',
      dataIndex: 'wenhuachendu',
      key: 'wenhuachendu',
    },
    {
      title: '社会面貌',
      dataIndex: 'sheHuiMianMAao',
      key: 'sheHuiMianMAao',
    },
    {
      title: '联系号码',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '家庭住址',
      dataIndex: 'homeAdress',
      key: 'homeAdress',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div size="middle">
          <a onClick={handleOk}>修改</a>
          <a>删除</a>
        </div>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: '王二',
      age: '男',
      address: '1999-5-20',
      tags: ['nice', 'developer'],
      wenhuachendu: '博士',
      sheHuiMianMAao:'党员',
      phone: '1586245444554',
      homeAdress: '重庆市'
    },
    {
      key: '2',
      name: '张三',
      age: '女',
      address: '1999-5-20',
      tags: ['nice', 'developer'],
      wenhuachendu: '博士',
      sheHuiMianMAao:'党员',
      phone: '1586245444554',
      homeAdress: '重庆市'
    },
    {
      key: '3',
      name: '李四',
      age: '男',
      address: '1999-5-20',
      tags: ['nice', 'developer'],
      wenhuachendu: '博士',
      sheHuiMianMAao:'党员',
      phone: '1586245444554',
      homeAdress: '重庆市'
    },
  ];
  
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };




  return (
    <div>
    <Table columns={columns} dataSource={data}></Table>
    <Modal 
      title='修改信息' 
      visible={modalShow}
      onOk={handleOk} 
      onCancel={handleCancel}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
      >
        <Form.Item 
        label="姓名"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="性别"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="出生日期"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="身份证号"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="文化程度"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="社会面貌"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="联系号码"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="家庭住址"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>

    </div>
  )
}



export default ButtonDemo