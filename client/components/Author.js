import { Avatar, Divider, Tooltip } from  'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="https://mirror-gold-cdn.xitu.io/168e09b90ce37695148?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt="头像"/></div>
            <div className="author-introduction">
                前端程序员，专注于WEB和移动前端开发，此心随波逐流。
                <Divider>社交账号</Divider>
                <Tooltip placement="top" title="https://github.com/ywenhao">
                    <Avatar size={28} icon={<GithubOutlined />} className="account" />
                </Tooltip>
                <Tooltip placement="top" title="QQ">
                    <Avatar size={28} icon={<QqOutlined />}  className="account" />
                </Tooltip>
                <Tooltip placement="top" title="Wechact">
                    <Avatar size={28} icon={<WechatOutlined />}  className="account"  />
                </Tooltip>
            </div>
        </div>
    )
}

export default Author
