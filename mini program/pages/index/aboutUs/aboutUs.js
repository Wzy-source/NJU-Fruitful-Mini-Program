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
        // 南京
        longitude: 119.327869,
        latitude: 34.092698,
        name: '周银邱',
        
      },
      {
        id:2,
        // 西安
        longitude: 108.9608,
        latitude: 34.26641,
        name:'王子悦'
        
      },
      {
        id:3,
        // 安徽合肥
        longitude: 117.233443,
        latitude: 31.826578,
        name:"郝月婷"
      },
      {
        id:4,
        // 河北石家庄
        longitude: 114.521532,
        latitude: 38.048312,
        name:'刘琪'
      },
      {
        id:5,
        // 山东济南
        longitude: 117.126399,
        latitude: 36.656554,
        name:'王可心'

      },
      {
        id:6,
        // 福建福州
        longitude: 119.30347,
        latitude: 26.080429,
        name:'何馨'

      },
      {
        id:7,
        // 贵州贵阳
        longitude: 107.886884,
        latitude: 25.415372,
        name:'姜兴黔'
      },
      {
        id:8,
        // 甘肃兰州
        longitude: 103.840521,
        latitude: 36.067235,
        name:'刘冠宇'
      },
      {
        id:9,
        // 新疆乌鲁木齐
        longitude: 87.635087,
        latitude: 43.79934,
        name:'杨艺澜'
        
      },
     
      {
        id:10,
        // 广东广州
        longitude: 113.271431,
        latitude: 23.135336,
        name:'左佳毅'
        
      },

      {
        id:11,
        // 福建宁德
        longitude: 119.52933,
        latitude: 26.656741,
        name:'郭哲强'
      },
      {
        id:12,
        // 新疆乌鲁木齐
        longitude: 84.416029,
        latitude: 43.477086,
        name:'摆正航'
      },
      {
        id:13,
        // 江苏南通
        longitude: 120.794181,
        latitude: 32.42594,
        name:'任冒语'
      },
      {
        id:14,
        // 安徽滁州
        longitude: 118.339406,
        latitude: 32.261271,
        name:'张刘洋'
        
      },
      {
        id:15,
        // 江苏苏州
        longitude: 120.592412,
        latitude: 31.303564,
        name:'姜玲玲'
        

      },
      {
        id:16,
        // 福建莆田
        longitude: 119.141775,
        latitude: 25.086626,
        name:'沈正钦'
      }


    ],
    headText:"  春华秋实社会实践小分队归属于大气科学学院。本团队现有成员16人,均为本科生。指导老师为大气科学学院团委副书记毕菲菲老师。"

    ,
    imageSrc:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1092770479,843230546&fm=26&gp=0.jpg"
    ,
    text:"简介"
  },


  
  jumpTeamInfo:function(event){
    console.log(event.detail)
  }

  ,
  changeInformation:function(event){
    console.log("???")
    this.setData({text:"???"})
  }

})