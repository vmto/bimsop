opt6 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
      crossStyle: {
        color: '#999'
      }
    }
  },
  xAxis: [{
    type: 'category',
    data: ['06-01', '06-02', '06-03', '06-04', '06-05', '06-06', '06-07', '06-08', '06-09', '06-10', '06-11', '06-12'],
    axisPointer: {
      type: 'none'
    },
    boundaryGap: true,
    axisLabel: {
      textStyle: {
        color: '#51e5fc'
      }
    },
    axisLine: {

      lineStyle: {
        color: '#51e5fc'
      }
    },
    axisTick: {
      show: false
    }
  },
    {
      type: 'category',
      show: false,
      position: '',
      data: ['06-01', '06-02', '06-03', '06-04', '06-05', '06-06', '06-07', '06-08', '06-09', '06-10', '06-11', '06-12'],
      offset: 20,
      axisPointer: {
        type: 'none',
        label: {
          show: false
        }
      },
      boundaryGap: false
    }
  ],
  yAxis: [{
    type: 'value',
    splitLine: {
      show: false
    },
    axisLabel: {
      formatter: '{value}',
      textStyle: {
        color: '#51e5fc'
      }
    },
    offset: 6,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#51e5fc'
      }
    },
    axisTick: {
      show: false
    }
  },
    {
      type: 'value',
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      type: 'bar',
      //                barWidth:27,
      data: [40, 50, 60, 30, 80, {
        value: 70,
        z: 3,
        itemStyle: {
          normal: {
            barBorderRadius: 7,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: '#f11dc8' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#ff2575' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          },
          emphasis: {
            barBorderRadius: 7
          }
        }
      }, 50, 24, 85, 66, 53, 35],
      itemStyle: {
        normal: {
          barBorderRadius: 7,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#51e5fc' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#06bbff' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        },
        emphasis: {
          barBorderRadius: 7
        }
      },
      barCategoryGap: '-20%'
    },
    {
      name: '所占比例',
      type: 'line',
      yAxisIndex: 1,
      xAxisIndex: 1,
      symbol: 'none',
      data: [160, 170, 140, 110, 160, 170, 130, 110, 125, 166, 143, 125],
      itemStyle: {
        normal: {
          color: '#51e5fc'
        }
      },
      areaStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(82,186,212,1)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(82,186,212,0.2)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      },
      markPoint: {
        data: [
          {
            coord: ['0603', '140'],
            // symbol: 'image://static/img/bg_dot.png'
          },
          {
            coord: ['0606', '170'],
            // symbol: 'image://static/img/bg_dot.png'
          }, {
            coord: ['0609', '125'],
            // symbol: 'image://static/img/bg_dot.png'
          }
        ],
        label: {
          normal: {
            show: false
          }
        }
      },
      smooth: true
    }
  ]
};