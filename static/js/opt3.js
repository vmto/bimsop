var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 20; i++) {
  var date = new Date(dottedBase += 1000 * 3600 * 24);
  category.push([
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  ].join('-'));
  var b = Math.random() * 200;
  var d = Math.random() * 200;
  barData.push(b.toFixed(0));
  lineData.push((d + b).toFixed());
}

opt3 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true,
        backgroundColor: '#333'
      }
    }
  },
  legend: {
    data: ['line', 'bar', 'line2', 'pictorialBar'],
    textStyle: {
      color: '#ccc'
    }
  },
  xAxis: {
    data: category,
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    }
  },
  yAxis: {
    splitLine: {show: false},
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    }
  },
  series: [{
    name: 'Line',
    type: 'line',
    smooth: true,
    showAllSymbol: true,
    symbol: 'emptyCircle',
    symbolSize: 15,
    data: lineData
  }, {
    name: 'Bar',
    type: 'bar',
    barWidth: 10,
    itemStyle: {
      normal: {
        barBorderRadius: 5,
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            {offset: 0, color: '#14c8d4'},
            {offset: 1, color: '#43eec6'}
          ]
        )
      }
    },
    data: barData
  }, {
    name: 'Line2',
    type: 'line',
    barGap: '-100%',
    barWidth: 10,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            {offset: 0, color: '#fbff92'},
            {offset: 1, color: '#f9ff56'}
          ]
        )
      }
    },
    z: -12,
    data: barData
  }, {
    name: 'Bar2',
    type: 'pictorialBar',
    symbol: 'rect',
    itemStyle: {
      normal: {
        color: '#1551a6'
      }
    },
    symbolRepeat: true,
    symbolSize: [12, 4],
    symbolMargin: 1,
    z: -10,
    data: lineData
  }]
};