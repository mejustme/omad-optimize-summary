window.addEventListener('DOMContentLoaded',function () {
    Highcharts.chart('j-tag', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'omad各环境，打包优化时间对比'
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
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}秒</b></td></tr>',
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
            name: '云课堂2.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 111],
            color: '#90ed7d'

        }, {
            name: '运营后台2.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 111],
            color: '#8085e9'

        }, {
            name: '云课堂1.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 111],
            color: "#434348"

        },{
            name: 'K12',
            data: new Array(6),
            color: "#dc5b5b"
        }],
        legend: {
            itemStyle: {  "fontSize": "13px", "fontWeight": "bold" }
        }
    });

    Highcharts.chart('j-branch', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'omad各环境，打包优化时间对比'
        },
        subtitle: {
            text: '分支依赖',
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
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 111],
            color: '#7cb5ec'

        }, {
            name: '云课堂2.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 111],
            color: '#90ed7d'

        }, {
            name: '运营后台2.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 111],
            color: '#8085e9'

        }, {
            name: '云课堂1.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 111],
            color: "#434348"

        },{
            name: 'K12',
            data: new Array(6),
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
            name: '云课堂2.0',
            projectType: '2c',
            type: 'branch',
            items:['do-nothing','bower-cache','java-sync','high-node','parallel','do-all']
        }
    }).$inject('#j-images2')
});
