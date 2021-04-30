import React from 'react'
import { Card, } from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import TypingCard from '../../../components/TypingCard'


class UploadDemo extends React.Component {



  render() {
    return (
      <div>
        <Card title="进修公告" extra={<a href="#">More</a>} style={{ width: '100%' }}>
          <p>进修项目：出国进修</p>
          <p>进修内容：<br></br>
            校内有关单位：<br></br>
          为进一步提升我校教师的业务能力和管理水平，提高教育教学质量。根据教育部《关于本科教学工程西部受援高校教师和管理干部进修锻炼项目有关事宜的通知》的要求，我校将选派部分教师赴清华大学等对口支援高校进修学习，现将有关事宜通知如下：
          一、名额分配、派出方向及时间<br></br>
          1、名额分配<br></br>
          教师自主申报，院、系（部）审核，教务处根据各单位上报推荐名单，综合评审后推荐14名教师赴对口支援高校进修学习。<br></br>
          2、派出方向<br></br>
          清华大学、中国地质大学（北京）、华东理工大学、西北农林科技大学。<br></br>
          3、进修时间<br></br>
          2021年1月～2021年12月，教师自主选择进修半年或者一年。<br></br>
          二、申报条件<br></br>
          1、开新课（新开课）教师、实践教学指导教师；<br></br>
          2、45岁以下具有硕士以上学位教师、研究生授课教师优先推荐。<br></br>
          三、其他事项<br></br>
          1、进修费用及住宿费由支援高校承担，交通费由我校核报，并给进修教师发放一定的学习补助;<br></br>
          2、进修结束后，学校将对进修教师的执行情况进行检查，并公布检查结果。<br></br>
          请各单位在接此通知以后，根据院系实际情况，组织教师开展申报工作。<br></br>
          联系人：王青 联系电话：5315595<br></br>
          邮箱：wangqing0608@163.com<br></br>
二〇二一年五月一日</p>
        </Card>
      </div>
    )
  }

}



export default UploadDemo