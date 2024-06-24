"use client";
import React, { useState, useEffect } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldow from "highcharts/modules/drilldown";

import HighchartsExporting from "highcharts/modules/exporting";
drilldow(Highcharts);
HighchartsExporting(Highcharts);


export const StatusCountChart = ({ dataset }) => {
    const Dataset = dataset?.map(row => {
        return { name: row.StatusData[0].Name, y: row.Count }
    })

    console.log("Dataset", Dataset)
    useEffect(() => {
        (function (H) {
            H.seriesTypes.pie.prototype.animate = function (init) {
                const series = this,
                    chart = series.chart,
                    points = series.points,
                    {
                        animation
                    } = series.options,
                    {
                        startAngleRad
                    } = series;

                function fanAnimate(point, startAngleRad) {
                    const graphic = point?.graphic,
                        args = point?.shapeArgs;

                    if (graphic && args) {

                        graphic
                            // Set inital animation values
                            .attr({
                                start: startAngleRad,
                                end: startAngleRad,
                                opacity: 1
                            })
                            // Animate to the final position
                            .animate({
                                start: args.start,
                                end: args.end
                            }, {
                                duration: animation.duration / points.length
                            }, function () {
                                // On complete, start animating the next point
                                if (points[point.index + 1]) {
                                    fanAnimate(points[point.index + 1], args.end);
                                }
                                // On the last point, fade in the data labels, then
                                // apply the inner size
                                if (point.index === series.points.length - 1) {
                                    series.dataLabelsGroup.animate({
                                        opacity: 1
                                    },
                                        void 0,
                                        function () {
                                            points.forEach(point => {
                                                point.opacity = 1;
                                            });
                                            series.update({
                                                enableMouseTracking: true
                                            }, false);
                                            chart.update({
                                                plotOptions: {
                                                    pie: {
                                                        innerSize: '40%',
                                                        borderRadius: 8
                                                    }
                                                }
                                            });
                                        });
                                }
                            });
                    }
                }

                if (init) {
                    // Hide points on init
                    points.forEach(point => {
                        point.opacity = 0;
                    });
                } else {
                    fanAnimate(points[0], startAngleRad);
                }
            };
        }(Highcharts));
        const chart = Highcharts.chart('container', {
            chart: {
                type: 'pie'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Departamental Strength of the Company',
                align: 'left'
            },
            subtitle: {
                text: 'Custom animation of pie series',
                align: 'left'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    borderWidth: 2,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>{point.percentage}%',
                        distance: 20
                    }
                }
            },
            series: [{
                // Disable mouse tracking on load, enable after custom animation
                enableMouseTracking: false,
                animation: {
                    duration: 2000
                },
                colorByPoint: true,
                data: dataset?.map(row => {
                    return { name: row.StatusData[0].Name, y: row.Count }
                })
                // data: [{
                //     name: 'Customer Support',
                //     y: 21.3
                // }, {
                //     name: 'Development',
                //     y: 18.7
                // }, {
                //     name: 'Sales',
                //     y: 20.2
                // }, {
                //     name: 'Marketing',
                //     y: 14.2
                // }, {
                //     name: 'Other',
                //     y: 25.6
                // }]
            }]
        });

    }, [dataset]);

    return (<div id="container" />)

}

export const HospitalBpaDrilldown = () => {
    //https://codesandbox.io/s/highcharts-react-demo-tq52i?file=/demo.jsx:1015-1077
    const options = {
        chart: {
            type: "column",
            height: 600,//(3 / 4 * 100) + '%',
            events: {
                click: function (e) {
                    console.log("test");
                },
                dropdown: function (e) {
                    console.log("test");
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: 'Medals',
                data: [
                    {
                        drilldown: "DataA",
                        y: 100
                    },
                    {
                        drilldown: "DataB",
                        y: 50
                    }
                ]
            }
        ],
        drilldown: {

            series: [
                {
                    name: 'Medals drilldown 1',
                    id: "DataA",
                    data: [["A", 0.1], ["B", 1.3]]
                },

                {
                    name: 'Medals drilldown 2',
                    id: "DataB",
                    data: [["C", 6.2], ["D", 0.29]]
                }
            ]
        }
    };

    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    );
}
export const SemiCircleDonut = () => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: 100,

        },
        credits: {
            enabled: false
        },
        title: false,
        // title: {
        //     text: 'H',
        //     align: 'center',
        //     verticalAlign: 'middle',
        //     y: 10,
        //     style: {
        //         fontSize: '1.1em'
        //     }
        // },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            series: {
                pointPadding: 0,
                groupPadding: 0,
                borderWidth: 0,
            },
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '100%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '70%',
            data: [
                ['Chrome', 73.86],
                ['Edge', 11.97],
                ['Firefox', 5.52],
                ['Safari', 2.98],
                ['Internet Explorer', 1.90],
                ['Other', 3.77]
            ]
        }]
    }
    return (<HighchartsReact highcharts={Highcharts} options={options} />)
}