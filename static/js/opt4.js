var xData = function () {
  var data = [];
  for (var i = 1; i < 32; i++) {
    data.push(i + '日');
  }
  return data;
}();

opt4 = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['室外', '室内'],
    textStyle: {
      color: '#ccc'
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: xData,
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    }
  ],
  yAxis: {
    type: 'value',
    min: 0,
    max: 400,
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    }
  }
  ,
  series: [
    {
      name: '室外',
      type: 'line',
      itemStyle: {
        normal: {
          areaStyle: {type: 'default'},
          // color:'red'
        }
      },
      areaStyle: {
        normal: {
          type: 'default',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(199, 37, 50,0.2)'
          }, {
            offset: 1,
            color: 'rgba(199, 37, 50,0.2)'
          }], false)
        }
      },
      smooth: true,
      data: [200, 213, 205, 167, 250, 223, 177, 195, 170, 185, 161, 203, 204, 195, 162, 212, 243, 180, 163, 204, 211, 155, 231, 249, 224, 190, 155, 222, 232, 162, 245]
    },
    {
      name: '室内',
      type: 'line',
      itemStyle: {
        normal: {
          areaStyle: {type: 'default'},
          color: '#6c65fb'
        }
      },
      areaStyle: {
        normal: {
          type: 'default',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(19, 37, 250,0.2)'
          }, {
            offset: 1,
            color: 'rgba(19, 37, 250,0.2)'
          }], false)
        }
      },
      smooth: true,
      data: [78, 64, 64, 79, 76, 72, 74, 63, 54, 61, 58, 63, 68, 71, 78, 53, 50, 64, 66, 73, 55, 51, 53, 75, 54, 64, 68, 71, 52, 78, 76]
    }
  ]
};