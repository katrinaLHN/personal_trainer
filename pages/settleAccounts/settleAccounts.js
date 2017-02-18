/**
 * Created by lihaonan on 2017/02/17.
 */
var saveTime = require('../../data/data-saveTime.js');
var util = require('../../utils/util.js');
Page({
  data:{
    allTime:'',
    startDisplay:'none',
    stopDisplay:'none',
    dateStart: '',
    dateOver:'',  
    timeStart: '',
    timeOver:''
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
     this.setData({
       //获取页面数据并且初始化他们
        allTime:saveTime.time.allTime,
        startTime:saveTime.time.startDate+' '+saveTime.time.startTime1,
        stopTime:saveTime.time.stopDate+' '+saveTime.time.stopTime1,
        
        dateStart:saveTime.time.startDate,
        dateOver:saveTime.time.stopDate,
        timeStart: saveTime.time.startTime1,
        timeOver:saveTime.time.stopTime1

    });
  },
   confirm:function(){
     var startTime=this.data.dateStart+' '+this.data.timeStart;
     var stopTime=this.data.dateOver+' '+this.data.timeOver;
     var amendStartTime =new Date(startTime).getTime();
     var amendStopTime =new Date(stopTime).getTime();
     var allTime=amendStopTime-amendStartTime;
     if(allTime>=0){
       wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        allTime = allTime/1000;
        var hour = parseInt(allTime/3600);
					allTime%=3600;
        var minute = parseInt(allTime/60);
					allTime%=60;
					var second =parseInt(allTime);
        saveTime.time.allTime = hour+'小时'+minute+'分钟'+second+'秒';
        console.log(saveTime.time);


     this.setData({
      startTime:this.data.dateStart+' '+this.data.timeStart,
      stopTime:this.data.dateOver+' '+this.data.timeOver,
      startDisplay:'none',
      stopDisplay:'none',
      allTime: hour+'小时'+minute+'分钟'+second+'秒'
     }
     );
     }else{
       wx.showModal({
          title: '警告',
          content: '不合理的开始时间结束时间，请检查！',
          success: function(res) {
            if (res.confirm) {
              // console.log('用户点击确定')
            }
          }
        })
     }
        
   },
   concel:function(){
     this.setData({
      startDisplay:'none',
      stopDisplay:'none'
     })
   },
   bindStartDateChange: function(e) {
    this.setData({
      dateStart: e.detail.value
    })
  },
  bindStopDateChange: function(e) {
    this.setData({
      dateOver: e.detail.value
    })
  },
  bindStartTimeChange: function(e) {
    this.setData({
      timeStart: e.detail.value
    })
  },
  bindStopTimeChange: function(e) {
    this.setData({
      timeOver: e.detail.value
    })
  },
  amendStartTime:function(){
    this.setData({
      startDisplay:'block'
    })
  },
  amendStopTime:function(){
    this.setData({
      stopDisplay:'block'
    })
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
})
