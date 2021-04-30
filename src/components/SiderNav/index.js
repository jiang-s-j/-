import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '高校人事管理系统',
    icon: 'home',
    key: '/home'
  },
  {
    title: '基本组信息管理件',
    icon: 'laptop',
    key: '/home/general',
    subs: [
      {key: '/home/general/button', title: '个人信息', icon: '',
      subs: [
        {key: '/home/general/button', title: '个人信息', icon: '',},
        {key: '/home/general/icon', title: '学习经历', icon: '',},
        {key: '/home/general/icon', title: '进修经历', icon: '',}
      ]
    },
      {key: '/home/general/icon', title: '学习经历', icon: '',},
      {key: '/home/general/icon', title: '进修经历', icon: '',},
      {key: '/home/general/icon', title: '工作经历', icon: '',},
      {key: '/home/general/icon', title: '专业证书', icon: '',},
    ]
  },
  {
    title: '招聘管理',
    icon: 'bars',
    key: '/home/navigation',
    subs: [
      {key: '/home/navigation/dropdown', title: '招聘公告', icon: ''},
      {key: '/home/navigation/menu', title: '人员注册', icon: ''},
      {key: '/home/navigation/steps', title: '个人简历', icon: ''},
      {key: '/home/navigation/steps', title: '应聘须知', icon: ''},
    ]
  },
  {
    title: '进修管理',
    icon: 'edit',
    key: '/home/entry',
    subs: [
      {
        key: '/home/entry/upload',
        title: '进修公告',
        icon: '',
      },
      {key: '/home/entry/upload1', title: '岗前培训', icon: ''},
      {key: '/home/entry/upload2', title: '教师资格', icon: ''},
      {key: '/home/entry/upload3', title: '外校进修', icon: ''},
      {key: '/home/entry/upload4', title: '出国进修', icon: ''},
      {key: '/home/entry/upload5', title: '进修通知', icon: ''},
    ]
  },
  {
    title: '离校管理',
    icon: 'message',
    key: '/home/feedback',
    subs: [
      {key: '/home/feedback/modal', title: '离校申请', icon: '',},
      {key: '/home/feedback/notification', title: '离校通知', icon: ''},
      {key: '/home/feedback/spin', title: '离校信息', icon: '',}
    ]
  },
  {
    title: '系统管理',
    icon: 'bulb',
    key: '/home/other',
    subs:[
      {key: '/home/other/animation', title: '部门信息', icon: '',},
      {key: '/home/other/gallery', title: '密码修改', icon: '',},
      {key:'/home/other/draft',title:'日志查询',icon:''},
     
    ]
  },
  // {
  //   title: '关于',
  //   icon: 'info-circle-o',
  //   key: '/home/about'
  // }
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav