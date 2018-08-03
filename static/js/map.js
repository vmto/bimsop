var App = {};

$(function () {

  /*----------------------------------- BackBone Model --------------------------------------*/

  App.Model01 = Backbone.Model.extend({defaults: {}});
  App.Model02 = Backbone.Model.extend({defaults: {}});

  var model01 = new App.Model01;
  var model02 = new App.Model02;

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
    },
    pageAlarm: function () {
      goto('alarm');
      console.log('03');
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


  $.ajax({
    url: '',
    success: function () {
      var data1 = {name: 'test data 11'};
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
      console.log('01', vm);
      var data = vm.attributes;
      $('#water-data').html(data.name);
    }
  });

  App.View02 = Backbone.View.extend({
    initialize: function () {
      this.listenTo(this.model, 'change', this.show);
    },
    show: function (vm) {
      console.log('02', vm);
      var data = vm.attributes;
      $('#element-data').html(data.name);
    }
  });

  /*----------------------------------- BackBone ViewModel --------------------------------------*/

  new App.View01({model: model01}); // 报警日志
  new App.View02({model: model02}); // 报警

});