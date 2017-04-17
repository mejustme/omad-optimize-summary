window.addEventListener('DOMContentLoaded',function () {
    Highcharts.chart('j-tag', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'omad环境，前端构建优化时间对比'
        },
        subtitle: {
            text: 'tag依赖',
            style: { "fontSize": "14px" }
        },
        xAxis: {
            categories: [
                '无任何优化',
                'bower cache',
                'ant sync to node sync',
                'node 4.2.6 to node 0.12.4 ',
                '并行任务【clean,npm,bower][learn,org,web,mobile][sync,scss]',
                '优化所有'
            ],
            title: {
                text: '优化项',
                style: { "fontSize": "14px" }
            },
            crosshair: true,
            labels:{
                style: { "color": "#666", "cursor": "default", "fontSize": "14px" }
            }
        },

        yAxis: {
            min: 0,
            title: {
                text: '时间 (秒)',
                style: { "color": "#666", "cursor": "default", "fontSize": "14px" }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormatter: function () {
                var time = this.y>60? Math.floor((this.y)/60)+'分钟'+ Math.floor((this.y)%60)+'秒': this.y+'秒';
                var map = {
                    time: time,
                    color: this.series.color,
                    name: this.series.name
                };
                return '<tr><td style="color:{color};padding:0">{name}: </td><td style="padding:0"><b>{time}</b></td></tr>'.replace(/{(.+?)}/g, function($0,$1){
                    return map[$1];
                })
            },
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '企业云',
            data: [691, 566, 612, 257, 225, 47],
            color: '#7cb5ec'

        }, {
            name: '云课堂2.0-teach',
            data: [371, 214, 287, 210, 324, 43],
            color: '#90ed7d'

        }, {
            name: '云课堂2.0-main',
            data: [436, 285, 381, 229, 305, 135],
            color: '#90ed7d'

        }, {
            name: '运营后台2.0',
            data: [763, 653, 757, 174, 716, 142],
            color: '#8085e9'

        }, {
            name: '云课堂1.0',
            data:  [272, 219, 199, 142, 229, 59],
            color: "#434348"

        },{
            name: 'K12',
            data: [371, 214, 287, 259, 324, 43],
            color: "#dc5b5b"
        }],
        legend: {
            itemStyle: {  "fontSize": "13px", "fontWeight": "bold" }
        }
    });

    new Regular({
        template: '#j-template',
        data:{
            name: '企业云',
            projectType: '2b',
            type: 'tag',
            items:['do-nothing','bower-cache','java-sync','high-node','parallel','do-all']
        }
    }).$inject('#j-images1');

    new Regular({
        template: '#j-template',
        data:{
            name: '云课堂2.0-org',
            projectType: 'org',
            type: 'tag',
            items:['do-nothing','bower-cache','java-sync','high-node','parallel','do-all']
        }
    }).$inject('#j-images2');

    new Regular({
        template: '#j-template',
        data:{
            name: '云课堂2.0-main',
            projectType: 'main',
            type: 'tag',
            items:['do-nothing','bower-cache','java-sync','high-node','parallel','do-all']
        }
    }).$inject('#j-images3');

    new Regular({
        template: '#j-template',
        data:{
            name: '运营后台2.0',
            projectType: 'admin',
            type: 'tag',
            items:['do-nothing','bower-cache','java-sync','high-node','parallel','do-all']
        }
    }).$inject('#j-images3');

    new Regular({
        template: '#j-template',
        data:{
            name: 'study',
            projectType: 'study',
            type: 'tag',
            items:['do-nothing','bower-cache','java-sync','high-node','parallel','do-all']
        }
    }).$inject('#j-images4');

    new Regular({
        template: '#j-template',
        data:{
            name: 'k12(同云课堂2.0机构后台)',
            projectType: 'k12',
            type: 'tag',
            items:['do-nothing','bower-cache','java-sync','high-node','parallel','do-all']
        }
    }).$inject('#j-images5');
});
