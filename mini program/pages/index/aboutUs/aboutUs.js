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
    text:"",
    imageSrc:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1092770479,843230546&fm=26&gp=0.jpg",
    buttons:[
      {id:1,
        name:'周银邱',
        intruction:"我叫周银邱",
        picSrc:""
        ,
        ischecked:""
      },
      {id:2,
        name:'王子悦',
        intruction:"我叫王子悦",
        picSrc:""
        ,
        ischecked:""
      },
      {id:3,
        name:"郝月婷",
        intruction:"我叫郝月婷",
        picSrc:""
        ,
        ischecked:""
      },
      {id:4,
        name:'刘琪',
        intruction:"我叫刘琪",
        picSrc:""
        ,
        ischecked:""
      },
      {id:5,
        name:'王可心',
        intruction:"我叫王可心",
        picSrc:""
        ,
        ischecked:""
      },
      {id:6,
        name:'何馨',
        intruction:"我叫何馨",
        picSrc:""
        ,
        ischecked:""
      },
      {id:7,
        name:'姜兴黔',
        intruction:"我叫姜兴黔",
        picSrc:""
        ,
        ischecked:""
      },
      {id:8,
        name:'刘冠宇',
        intruction:"我叫刘冠宇",
        picSrc:""
        ,
        ischecked:""
      },
      {id:9,
        name:'杨艺澜',
        intruction:"我叫杨艺澜",
        picSrc:""
        ,
        ischecked:""
      },
      {id:10,
        name:'左佳毅',
        intruction:"我叫左佳毅",
        picSrc:""
        ,
        ischecked:""
      },
      {id:11,
        name:'郭哲强',
        intruction:"我叫郭哲强",
        picSrc:""
        ,
        ischecked:""
      },
      {id:12,
        name:'摆正航',
        intruction:"我叫摆正航",
        picSrc:""
        ,
        ischecked:""
      },
      {id:13,
        name:"任冒语",
        intruction:"我叫任冒语",
        picSrc:''
        ,
        ischecked:""
      },
      {id:14,
        name:"张刘洋",
        intruction:"我叫张刘洋",
        picSrc:''
        ,
        ischecked:""
      },
      {id:15,
        name:"姜玲玲",
        intruction:"我叫姜玲玲",
        picSrc:''
        ,
        ischecked:""
      },
      {id:16,
        name:'沈正钦',
        intruction:"我叫沈正钦",
        picSrc:""
        ,
        ischecked:""
      }
    ],
    offset:0
  },


  
  jumpTeamInfo:function(event){
    console.log(event.detail.markerId)
    var makerId=event.detail.markerId;
    var offset;
    for(let i = 0; i < this.data.buttons.length; i++){
      if(makerId==this.data.buttons[i].id){
        this.data.buttons[i].ischecked=true;
        offset=82*i;
      }else{
        this.data.buttons[i].ischecked=false;
      }
    }
    this.setData({
      buttons: this.data.buttons,
      offset:offset,
      text:this.data.buttons[makerId-1].intruction
    })
  }

  ,
  changeInformation:function(event){
    var id=event.currentTarget.dataset.id;
    this.setData({text:this.data.buttons[id-1].intruction})

    for (let i = 0; i < this.data.buttons.length; i++) {
      if(this.data.buttons[i].id == id){
        this.data.buttons[i].ischecked=true;
      }else{
        this.data.buttons[i].ischecked=false;
      }
    }
    
    this.setData({
      buttons: this.data.buttons,
    })
    console.log(this.data.buttons[0].ischecked)
  }
  ,
  onLoad: function (options) {
    for (let i = 0; i < this.data.buttons.length; i++) {
      this.data.buttons[i].ischecked=false;
    }
    this.data.buttons[7].ischecked = true;
    this.setData({
      buttons: this.data.buttons,
      offset:82*7,
      text:this.data.buttons[7].intruction
    })
  }
})
