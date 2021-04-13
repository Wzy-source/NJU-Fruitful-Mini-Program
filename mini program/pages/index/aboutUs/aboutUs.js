// pages/index/aboutUs/aboutUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 108.9608,
    latitude: 34.26641,
    markers: [{
        id: 1,
        longitude: 118.767413,
        latitude: 32.041544,
        name: '刘冠宇'
      },
      {
        id:2,
        longitude: 108.9608,
        latitude: 34.26641,
        name:'王子悦',
        
        
        
      },
      {
        id:3,
        longitude: 117.233443,
        latitude: 31.826578,
        name:'张刘洋'
      }
    ],
    headText:"  春华秋实社会实践小分队归属于大气科学学院。本团队现有成员16人,均为本科生。指导老师为大气科学学院团委副书记毕菲菲老师。"

  },

  
  jumpTeamInfo:function(event){
    console.log(this.data.latitude)
  }


})