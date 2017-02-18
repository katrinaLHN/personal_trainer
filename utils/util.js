function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return year+'年'+month+'月'+day+'日' + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getTime(date){
  var hour = date.getHours()
  var minute = date.getMinutes()
  if(hour<10){
    hour='0'+hour;
  }
  if(minute<10){
    minute='0'+minute;
  }
   return hour+':'+minute
}

function getDate(date){
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  if(day<10){
    day='0'+day;
  }
  if(month<10){
    month='0'+month;
  }
  return year+'-'+month+'-'+day;
}


var saveTime = require('../data/data-saveTime.js');

function getData(url){
  return new Promise(function(resolve, reject){
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}

function getSaveTime(){
  return saveTime.time;
}





// module.exports.getData = getData;
// module.exports.getData2 = getData2;
// module.exports.getNext = getNext;
// module.exports.getDiscovery = getDiscovery;
// module.exports.discoveryNext = discoveryNext;

module.exports = {
  formatTime: formatTime,
  getSaveTime:getSaveTime,
  getTime:getTime,
  getDate:getDate
}



