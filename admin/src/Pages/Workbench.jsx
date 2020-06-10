import React from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react';

const Workbench = () => {
    const option = {
        title:{
            text:'访问统计',
            x:'center'
        },
        tooltip:{
            trigger:'axis',
        },
        xAxis:{
            data:['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis:{
            type:'value'
        },
        series:[
            {
                name:'访问量',
                type:'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                data:[1000,2000,1500,3000,2000,1200,800]
            }
        ]
    };
    return (
        <div>
            <Card title="折线图表之一">
                <ReactEcharts option={option} theme="Imooc" lazyUpdate={true} notMerge={true} style={{height:'400px'}}/>
            </Card>
        </div>
    )
}

export default Workbench;
