import { Avatar, Divider } from  'antd'
import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="https://mirror-gold-cdn.xitu.io/168e09b90ce37695148?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt="头像"/></div>
            <div className="author-introduction">
                前端程序员，专注于WEB和移动前端开发，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />
            </div>
        </div>
    )
}

export default Author
