opt2 = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    textStyle:{
      color: '#fff'
    },
    data: ['硫酸盐', '硝酸盐', '铵盐', '钠', '镁', '钙', '铝', '铁']
  },
  series: [
    {
      name: '元素比例',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: '硫酸盐', selected: true},
        {value: 679, name: '硝酸盐'},
        {value: 1548, name: '铵盐'}
      ]
    },
    {
      name: '元素比例',
      type: 'pie',
      radius: ['40%', '55%'],
      label: {
        normal: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#eee',
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 4,
          // shadowBlur:3,
          // shadowOffsetX: 2,
          // shadowOffsetY: 2,
          // shadowColor: '#999',
          // padding: [0, 7],
          rich: {
            a: {
              color: '#f90',
              lineHeight: 22,
              align: 'center'
            },
            // abg: {
            //     backgroundColor: '#333',
            //     width: '100%',
            //     align: 'right',
            //     height: 22,
            //     borderRadius: [4, 4, 0, 0]
            // },
            hr: {
              borderColor: '#fff',
              width: '100%',
              borderWidth: 0.5,
              height: 0
            },
            b: {
              fontSize: 16,
              lineHeight: 33
            },
            per: {
              color: '#eee',
              backgroundColor: '#999',
              padding: [2, 4],
              borderRadius: 2
            }
          }
        }
      },
      data: [
        {value: 135, name: '钠'},
        {value: 1048, name: '镁'},
        {value: 251, name: '钙'},
        {value: 147, name: '铝'},
        {value: 102, name: '铁'}
      ]
    }
  ]
};