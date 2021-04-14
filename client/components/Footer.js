import React from 'react'
import { BackTop } from 'antd'
import info from '../config/info'

import '../static/style/components/footer.css'
const Footer = ()=>(
    <div className="footer-div">
        <a target="_blank" href="https://beian.miit.gov.cn">{info.beian}</a>
        <div>系统由 React+Node+Ant Desgin驱动 </div>
        <div>{info.title}</div>
        <BackTop />
    </div>
)

export default Footer
