var util = require('../../utils/util.js');
var saveTime = require('../../data/data-saveTime.js');

var home={
  data:{
    hour:'00',
    min:'00',
    second:'00',
    stateCn:'开始',
    stateEn:'start'
  },
  //timing函数，点击button后后，判断state状态码，如果为1，点击既是结束，否则点击就是开始计时
  timing:function(){
      console.log(this.state.startStop);
      if(this.state.startStop==1){

          var stopTime = new Date();
        // console.log(util.formatTime(startTime));
        stopTime=util.formatTime(stopTime);
        //将点击开始的时候的时间存起来
        saveTime.time.stopTime=stopTime;
        console.log(util.getSaveTime());

          this.state.startStop=0;
          console.log('该结束了');
          var stopTime = new Date();
          console.log(util.formatTime(stopTime));
          this.state.stopTime=util.formatTime(stopTime);
        this.setData({
               stateCn:'开始',
               stateEn:'start'
           });
           clearInterval(this.state.timer);
           console.log('训练时间:'+this.data.hour+'小时'+this.data.min+'分'+this.data.second+'秒')
        wx.showActionSheet({
          itemList: ['结束训练', '休息一下，稍后继续训练'],
          success: function(res) {
            console.log(res.tapIndex)
            if(res.tapIndex==0){
                wx.navigateTo({
                  url: '../settleAccounts/settleAccounts',
                })
            }
            
          },
          fail: function(res) {
            
          }
        })
      }else{
        this.startButton();
      }
      

  },
  //点击开始按钮开始计时
  startButton:function(){
    this.state.startStop=1;
    var startTime = new Date();
    // console.log(util.formatTime(startTime));
    startTime=util.formatTime(startTime);
    //将点击开始的时候的时间存起来
    saveTime.time.startTime=startTime;
    console.log(util.getSaveTime());
    // this.state.startTime=util.formatTime(startTime);
            console.log(this);
            this.setData({
              stateCn:'暂停',
              stateEn:'pause'
          })
            var second = this.data.second;
            var hour = this.data.hour;
            var min = this.data.min;
            second=parseInt(second);
            min=parseInt(min);
            hour=parseInt(hour);
            //console.log(this);
            var that = this;
            this.state.timer = setInterval(function(){
                second=second+1;
                if(second<10){
                    second='0'+second;
                }else if(second>=60){
                    second='00';
                    min=min+1;
                };
                if(min<10){
                    min='0'+min;
                }else if(min>=60){
                    min='00';
                    hour=hour+1;
                };
                if(hour<10){
                    hour='0'+hour;
                }else if(hour>=1){//这里会显示null：null还有问题
                    second='了';
                    min='表';
                    hour='爆';
                };
                that.setData({
                    second:second,
                    min:min,
                    hour:hour
                });
                second=parseInt(second);
                min=parseInt(min);
                hour=parseInt(hour);
            },1000);
  },
  //存放状态型数据
  state:{
    startStop:0,//表达当前状态是否开始
    timer:{},    //用来存放计时器
    startTime:'',
    overTime:''
  },
  
  onLoad:function(options){
    // 生命周期函数--监听页面加载

  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow:function(){
    // 生命周期函数--监听页面显示

  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏

  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
};
Page(home)
