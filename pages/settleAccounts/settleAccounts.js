/**
 * Created by lihaonan on 2017/02/17.
 */
var saveTime = require('../../data/data-saveTime.js');

Page({
  data:{
    allTime:'',
    startDisplay:'none',
    stopDisplay:'none',
    date: '2016-11-08',  
    time: '12:00'
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
     this.setData({
        allTime:saveTime.time.allTime,
        startTime:saveTime.time.startTime,
        stopTime:saveTime.time.stopTime
    });
  },
   
   bindPickerChange: function (e) {  
    this.setData({  
      index: e.detail.value  
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
