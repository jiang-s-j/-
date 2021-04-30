import React from 'react'
import { Card } from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'


class DropdownDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Card title="招聘公告" extra={<a href="#">More</a>} style={{ width: '100%' }}>
          <p>岗位名称：数学教师</p>
          <p>需求人数：2人</p>
          <p>专业要求：数学专业</p>
          <p>学历要求：硕士及以上</p>
          <p>岗位描述：<br></br>
          1. 本科及以上学历，有教学经验者优先；<br></br>
          2. 熟悉高中数学课程体系，并对历年高考试题有所了解；<br></br>
          3. 普通话标准，专业知识扎实，表达能力强，思路清晰，能胜任高中数学教学工作；<br></br>
          4. 热爱教师工作，责任心强，有团队合作意识，富有亲和力，协调与沟通能力强。<br></br>
          </p>
        </Card>
      </div>
    )
  }
}

export default DropdownDemo