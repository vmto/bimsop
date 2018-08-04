opt5 = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['烟雾传感器', '可燃气传感器'],
    textStyle: {
      color: '#ccc'
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    splitLine: {
      show: false
    },
    "axisLine": {
      lineStyle: {
        color: '#5c5d89'
      }
    },
    "axisTick": {
      "show": false
    },
    axisLabel: {
      textStyle: {
        color: '#5c5d89'
      }
    },
    data: ['6/1', '6/4', '6/7', '6/10', '6/13', '6/16', '6/19', '6/21', '6/24', '6/27', '6/30', '7/2', '7/5', '7/8', '7/11']
  },
  yAxis:
    [
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#5c5d89'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#5c5d89'
          }
        },
        name: '报警次数',
        position: 'left'
      },
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#5c5d89'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#5c5d89'
          }
        },
        name: '报警指数',
        min: 0,
        max: 500,
        position: 'right'
      }
    ],
  series: [
    {
      name: '烟雾传感器',
      type: 'line',
      itemStyle: {
        normal: {
          color: '#a173ed'
        }
      },
      data: [92, 96, 99, 91, 96, 103, 90, 92, 96, 99, 120, 96, 103, 100, 91],
      markPoint: {
        data: [
          {
            type: 'max', name: '最大值',
            itemStyle: {
              normal: {
                color: '#d90051'
              }
            }
          },
          {
            type: 'min', name: '最小值',
            itemStyle: {
              normal: {
                color: '#01bc8f'
              }
            }
          }
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    },
    {
      name: '可燃气传感器',
      type: 'line',
      itemStyle: {
        normal: {
          color: '#02b5d5'
        }
      },
      data: [31, 40, 86, 51, 86, 93, 40, 81, 80, 85, 81, 86, 83, 80, 70],
      markPoint: {
        data: [
          {
            type: 'max', name: '最大值',
            itemStyle: {
              normal: {
                color: '#d90051'
              }
            }
          },
          {
            type: 'min', name: '最小值',
            itemStyle: {
              normal: {
                color: '#01bc8f'
              }
            }
          }
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    }
  ]
};