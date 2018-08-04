var App = {};

$(function () {

  /*----------------------------------- BackBone Model --------------------------------------*/

  App.Model01 = Backbone.Model.extend({defaults: {}});
  App.Model02 = Backbone.Model.extend({defaults: {}});

  var model01 = new App.Model01;
  var model02 = new App.Model02;

  // get document

  var v1bd = echarts.init($('.v1-bd')[0]);
  var v2bd = echarts.init($('.v2-bd')[0]);
  var v3bd = echarts.init($('.v3-bd')[0]);
  var v4bd = echarts.init($('.v4-bd')[0]);

  var v5bd = echarts.init($('.v5-bd')[0]);
  var v6bd = echarts.init($('.v6-bd')[0]);
  var v7bd = echarts.init($('.v7-bd')[0]);
  var v8bd = echarts.init($('.v8-bd')[0]);

  /*----------------------------------- BackBone Router --------------------------------------*/

  // 1 消防水系统    -- water
  // 2 环境监测系统  -- element
  // 3 消防报警系统  -- alarm
  // 4 人脸识别系统  -- faceId
  // 5 自助访客系统  -- guest
  // 6 电梯检测系统  -- elevator
  // 7 暖通系统     -- hvac
  // 8 停车场系统    -- park
  // 9 实时路况监测  -- traffic

  function goto(id) {
    $('.app-page').hide();
    $('.page-' + id).show();
    $('.app').stop().animate({left: '-100%'}, 600, 'easeOutQuart');
  }

  App.Router = Backbone.Router.extend({
    routes: {
      "home": "pageHome",
      "water": "pageWater",
      "water/:id": "pageWater",
      "element": "pageElement",
      "alarm": "pageAlarm",
      "faceId": "pageFaceId",
      "guest": "pageGuest",
      "elevator": "pageElevator",
      "hvac": "pageHvac",
      "park": "pagePark",
      "traffic": "pageTraffic"
    },
    initialize: function () {
      console.log('Backbone initialize');
    },
    pageHome: function () {
      $('.app').stop().animate({left: 0}, 600, 'easeOutQuart');
    },
    pageWater: function (id) {
      goto('water');
      console.log('01');
    },
    pageElement: function () {
      goto('element');
      console.log('02');
      v1bd.resize();
      v2bd.resize();
      v3bd.resize();
      v4bd.resize();
    },
    pageAlarm: function () {
      goto('alarm');
      console.log('03');
      v5bd.resize();
      v6bd.resize();
      // v7bd.resize();
      // v8bd.resize();
    },
    pageFaceId: function () {
      goto('faceId');
      console.log('04');
    },
    pageGuest: function () {
      goto('guest');
      console.log('05');
    },
    pageElevator: function () {
      goto('elevator');
      console.log('06');
    },
    pageHvac: function () {
      goto('hvac');
      console.log('07');
    },
    pagePark: function () {
      goto('park');
      console.log('08');
    },
    pageTraffic: function () {
      goto('traffic');
      console.log('09');
    }
  });

  router = new App.Router;  // 初始化路由
  Backbone.history.start(); // 开启历史记录

  // Ajax模拟数据 \ 生产环境是WebSocket（实时数据更新DOM）

  // 单位分布 学校\医院\写字楼
  // 设备类型 烟雾\可燃\电力
  // 设备通知 电话\短信
  // 用户比例 男\女
  // 基础数据 在线\离线\告警
  // 报警统计 每天\每周\每月
  // 告警处理 --
  // App安装统计 --
  $.ajax({
    url: '',
    success: function () {
      var data1 = {
        total: 4,
        normal: 99,
        alarm: 2,
        offLine: 0
      };
      var data2 = {name: 'test data 22'};

      model01.set(data1);
      model02.set(data2);
    }
  });

  /*----------------------------------- BackBone View --------------------------------------*/

  App.View01 = Backbone.View.extend({
    initialize: function () {
      this.listenTo(this.model, 'change', this.show);
    },
    show: function (vm) {
      var data = vm.attributes;
      // console.log('01', vm);

      // 01
      $('#dw-total').html(data.total);
      $('#dw-normal').html(data.normal);
      $('#dw-alarm').html(data.alarm);
      $('#dw-offLine').html(data.offLine);

      // 08
      $('.ui-park a').on('mouseover', function () {
        var i = $(this).index();
        $('.bg-park').removeClass('active').eq(i).addClass('active');
      });
    }
  });

  App.View02 = Backbone.View.extend({
    initialize: function () {
      this.listenTo(this.model, 'change', this.show);
    },
    show: function (vm) {
      var data = vm.attributes;
      // console.log('02', vm);

      // 02
      $.each([v1bd, v2bd, v3bd, v4bd, v5bd, v6bd], function (i, item) {
        item.showLoading({
          text: '加载中...',
          color: '#00c4ff',
          textColor: '#fff',
          maskColor: 'rgba(255,255,255,.1)'
        });
      });

      v1bd.setOption(opt1);
      v2bd.setOption(opt2);
      v3bd.setOption(opt3);
      v4bd.setOption(opt4);

      v5bd.setOption(opt5);
      v6bd.setOption(opt6);
      // v7bd.setOption(opt7);
      // v8bd.setOption(opt8);

      v1bd.hideLoading();
      v2bd.hideLoading();
      v3bd.hideLoading();
      v4bd.hideLoading();
      v5bd.hideLoading();
      v6bd.hideLoading();
      // v7bd.hideLoading();
      // v8bd.hideLoading();
    }
  });

  /*----------------------------------- BackBone ViewModel --------------------------------------*/

  new App.View01({model: model01}); //
  new App.View02({model: model02}); //

});