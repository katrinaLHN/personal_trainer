//强迫症想强行点亮一个点点

var sportItem = require('../../data/data-sportItem.js');
Page({
  data:{
        titleName:[
          {name:"器械",tapTitle:false},
          {name:"部位",tapTitle:true},
          {name:"收藏",tapTitle:false}
          ],
        apparatusDisplay:'none',
        bodyDisplay:'flex',
        collectDisplay:'none',
        toView: 'red',
        scrollTop: 100
        
  },
  tapTitle:function(e){
    var index = e.currentTarget.id;
      console.log(e);
      if(index==0){
        this.setData({
          apparatusDisplay:'flex',
          bodyDisplay:'none',
          collectDisplay:'none',
          titleName:[
          {name:"器械",tapTitle:true},
          {name:"部位",tapTitle:false},
          {name:"收藏",tapTitle:false}
          ]
        })
      };
      if(index==1){
        this.setData({
          apparatusDisplay:'none',
          bodyDisplay:'flex',
          collectDisplay:'none',
          titleName:[
          {name:"器械",tapTitle:false},
          {name:"部位",tapTitle:true},
          {name:"收藏",tapTitle:false}
          ]
        })
      };
      if(index==2){
        this.setData({
          apparatusDisplay:'none',
          bodyDisplay:'none',
          collectDisplay:'flex',
          titleName:[
          {name:"器械",tapTitle:false},
          {name:"部位",tapTitle:false},
          {name:"收藏",tapTitle:true}
          ]
        })
      };


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
})