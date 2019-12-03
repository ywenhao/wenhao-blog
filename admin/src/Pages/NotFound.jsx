import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default () => (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
        <h1 style={{fontSize: 40, marginBottom: 40}}>404</h1>
        <Button type="primary">
            <Link to="/index">返回首页</Link>
        </Button>
    </div>
)