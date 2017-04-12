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
                'ant sync module replace node sync',
                'node 4.2.6 replace node 0.12.4 ',
                'parallel 并行任务 ' +
                '【clean,npm,bower][sync,scss][learn,mobile,org,web]'
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
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: '#7cb5ec'

        }, {
            name: '云课堂2.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: '#90ed7d'

        }, {
            name: '运营后台2.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: '#8085e9'

        },{
            name: 'K12',
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: "#dc5b5b"
        }, {
            name: '云课堂1.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: "#434348"

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
                'ant sync module replace node sync',
                'node 4.2.6 replace node 0.12.4 ',
                'parallel 并行任务 ' +
                '【clean,npm,bower][sync,scss][learn,mobile,org,web]'
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
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: '#7cb5ec'

        }, {
            name: '云课堂2.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: '#90ed7d'

        }, {
            name: '运营后台2.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: '#8085e9'

        },{
            name: 'K12',
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: "#dc5b5b"
        }, {
            name: '云课堂1.0',
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: "#434348"

        }],
        legend: {
            itemStyle: {  "fontSize": "13px", "fontWeight": "bold" }
        }
    });
});
