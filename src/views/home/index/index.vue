<template>
    <div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in items" :key="item">
            <img :src="item" />
            </el-carousel-item>
        </el-carousel>
        <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
        <div ref="chart" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            items:[
                require('@/assets/img/1.png'),
                require('@/assets/img/2.png'),
                require('@/assets/img/3.png'),
                require('@/assets/img/4.png'),
                require('@/assets/img/5.png'),
                require('@/assets/img/6.png')
            ]
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(this.$refs.chart);

            // 指定图表的配置项和数据
            var option = {
                title: {
                text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                data: ['销量']
                },
                xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
                ]
        };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
        }
    }
}
</script>
