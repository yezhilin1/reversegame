Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberflag:false,
    gestureflag:false,
    colorflag:false,
    numbertest:'',
    gesturetest:'',
    colortest:'',
    textcolor:'',
    tip:'请选择正确的计算结果或箭头方向或文字颜色',
    oneoption:'',
    anotheroption:'',
    trueoption:0,
    mytimeout:'0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
    this.deadline();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  init(){
    let gametype = Math.floor(Math.random() * 3); 
    switch (gametype){
      case 0:
        this.setData({
          numberflag:true,
          gestureflag:false,
          colorflag:false
        });
        this.initnumber();
        break;
      case 1:
        this.setData({
          numberflag:false,
          gestureflag:true,
          colorflag: false
        });
        this.initgesture();
        break;
      case 2:
        this.setData({
          numberflag: false,
          gestureflag:false,
          colorflag:true
        });
        this.initcolor();
        break;
    }
  },
  initnumber(){
    let result,errorResult,optionflag;
    let a = Math.floor(Math.random() * 20 - 10);
    let b = Math.floor(Math.random() * 20 - 10);
    let c = Math.floor(Math.random() * 20);
    let d = Math.floor(Math.random() * 20);
    let operator = Math.floor(Math.random() * 3);
    switch (operator) {
      case 0:
        result = a * b;
        this.setData({
          numbertest:a+'x'+b
        });
        errorResult = result + Math.floor(Math.random() * 4 + 1);
        break;
      case 1:
        result = c + d;
        this.setData({
          numbertest: c+'+'+d
        });
        errorResult = result + Math.floor(Math.random() * 3 + 1);
        break;
      case 2:
        result = c - d;
        this.setData({
          numbertest: c+'-'+d
        });
        errorResult = result + Math.floor(Math.random() * 3 + 1);
        break;

    }
    optionflag=Math.floor(Math.random()*2);
    switch(optionflag){
      case 0:
        this.setData({
          oneoption:''+result,
          anotheroption: ''+errorResult
        });
        break;
      case 1:
        this.setData({
          oneoption: '' + errorResult,
          anotheroption: '' + result,
          trueoption:1
        });
        break;
    }
  },
  initgesture(){
    let a = Math.floor(Math.random() * 4);
    let result, errorResult ;
    let optionflag = Math.floor(Math.random() * 2);
    let images = ['../../image/down01.png', '../../image/left01.png', '../../image/right01.png', '../../image/up01.png'];
    this.setData({
      gesturetest: images[a]
    })
    switch(a){
      case 0:
        
        result='下';
        errorResult='上';
        break;
      case 1:
        
        result = '左';
        errorResult = '右';
        break;
      case 2:
       
        result = '右';
        errorResult = '左';
        break;
      case 3:
       
        result = '上';
        errorResult = '下';
        break;
    }
    switch(optionflag){
      case 0:
        this.setData({
          oneoption: result,
          anotheroption: errorResult
        });
        break;
      case 1:
        this.setData({
          oneoption: errorResult,
          anotheroption: result,
          trueoption: 1
        });
        break;
    }
  },
  initcolor(){
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let text = ['红', '橙', '黄', '绿', '蓝', '紫', '粉', '棕', '青', '灰'];
    let color = ['#FF0000', '#FF8C00', '#FFFF00', '#008000', '#0000FF', '#800080', '#8B4513', '#008080', '#808080'];
    while (a == b) {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 10);
    }
    this.setData({
      colortest:text[a],
      textcolor:color[b]
    })
    let result = text[b],errorResult = text[a];
    let optionflag =  Math.floor(Math.random() * 2);
    switch (optionflag) {
      case 0:
        this.setData({
          oneoption: result,
          anotheroption: errorResult
        });
        break;
      case 1:
        this.setData({
          oneoption: errorResult,
          anotheroption: result,
          trueoption: 1
        });
        break;
    }
  },
  click1(){
    let a=0;
    let _trueoption=this.data.trueoption;
    if (a == _trueoption){
      clearTimeout(this.data.mytimeout);
      let that=this;
      that.onLoad();
      
    }
    else{
      clearTimeout(this.data.mytimeout);
      wx.navigateTo({
        url: `/pages/gameoverpage/gameoverpage`
      })
      }
  },
  click2() {
    let a = 1;
    let _trueoption = this.data.trueoption;
    if (a == _trueoption) {
      clearTimeout(this.data.mytimeout);
      let that =this;
      that.onLoad();
    }
    else{
      clearTimeout(this.data.mytimeout);
      wx.navigateTo({
        url: `/pages/gameoverpage/gameoverpage`
      })
      }
  },
deadline(){
  let that = this;
  that.data.mytimeout = setTimeout(function () {
    wx.navigateTo({
      url: `/pages/gameoverpage/gameoverpage`
    })
  }, 8000);
},

})