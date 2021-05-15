// pages/index/aboutUs/aboutUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 108.9608,
    latitude: 34.26641,
    markers: [{
      id:1,
      // 甘肃兰州
      longitude: 103.840521,
      latitude: 36.067235,
      name:'刘冠宇',
      iconPath:"../../../images/map-marker.png",
      height:30,
      width:30
      
        
      },
      {
        id:2,
        // 西安
        longitude: 108.9608,
        latitude: 34.26641,
        name:'王子悦',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
        
      },
      {
        id:3,
        // 安徽合肥
        longitude: 117.233443,
        latitude: 31.826578,
        name:"郝月婷",
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
      },
      {
        id:4,
        // 河北石家庄
        longitude: 114.521532,
        latitude: 38.048312,
        name:'刘琪',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
      },
      {
        id:5,
        // 山东济南
        longitude: 117.126399,
        latitude: 36.656554,
        name:'王可心',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30

      },
      {
        id:6,
        // 福建福州
        longitude: 119.30347,
        latitude: 26.080429,
        name:'何馨',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
      },
      {
        id:7,
        // 贵州贵阳
        longitude: 107.886884,
        latitude: 25.415372,
        name:'姜兴黔',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
      },
      {
        id: 8,
        // 南京
        longitude: 119.327869,
        latitude: 34.092698,
        name: '周银邱',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
      },
      {
        id:9,
        // 新疆乌鲁木齐
        longitude: 87.635087,
        latitude: 43.79934,
        name:'杨艺澜',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
        
      },
     
      {
        id:10,
        // 广东广州
        longitude: 113.271431,
        latitude: 23.135336,
        name:'左佳毅',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
        
      },

      {
        id:11,
        // 福建宁德
        longitude: 119.52933,
        latitude: 26.656741,
        name:'郭哲强',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
      },
      {
        id:12,
        // 新疆乌鲁木齐
        longitude: 84.416029,
        latitude: 43.477086,
        name:'摆正航',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
      },
      {
        id:13,
        // 江苏南通
        longitude: 120.794181,
        latitude: 32.42594,
        name:'任冒语',
        iconPath:"../../../images/map-marker.png",
        height:30,
      width:30
      },
      {
        id:14,
        // 安徽滁州
        longitude: 118.339406,
        latitude: 32.261271,
        name:'张刘洋',
        iconPath:"../../../images/map-marker.png",
        height:30,
        width:30
        
      },
      {
        id:15,
        // 江苏苏州
        longitude: 120.592412,
        latitude: 31.303564,
        name:'姜玲玲',
        iconPath:"../../../images/map-marker.png",
        height:30,
      width:30
        

      },
      {
        id:16,
        // 福建莆田
        longitude: 119.141775,
        latitude: 25.086626,
        name:'沈正钦',
        iconPath:"../../../images/map-marker.png",
      height:30,
      width:30
      }


    ],
    headText:"  春华秋实社会实践小分队归属于大气科学学院。本团队现有成员16人,均为本科生。指导老师为大气科学学院团委副书记毕菲菲老师。"
    ,
    text:"",
    imageSrc:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1092770479,843230546&fm=26&gp=0.jpg",
    buttons:[
      {id:1,
        name:'刘冠宇',
        intruction:"我叫刘冠宇",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/1_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721071750&Signature=7eFaIYsrZdUzAhEfgYtAxPigzvw%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/1_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721071856&Signature=L0%2FLrqf6YWPsujbSnvVU%2F7hURO8%3D"
      },
      {id:2,
        name:'王子悦',
        intruction:"我叫王子悦",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/2_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721071915&Signature=Zyg5SUNPtbbp%2FTKWzKDm384ifRo%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/2_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721071901&Signature=mz6wJfGuVcWmGxWp4709jPc9WEs%3D"
      },
      {id:3,
        name:"郝月婷",
        intruction:"我叫郝月婷",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/3_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721071971&Signature=rnUiUXRu0YkA1wjmxmsmUOqoITw%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/3_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721071954&Signature=eVUglzeScwXcsEqmQPzRtnlsikI%3D"
      },
      {id:4,
        name:'刘琪',
        intruction:"我叫刘琪",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/4_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072011&Signature=xVExvQoJ%2FwqMYNPKQIi4o6vo0Lk%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/4_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721071995&Signature=T1IRuGkoYAL%2B4Ej8bhqi72JPvIY%3D"
      },
      {id:5,
        name:'王可心',
        intruction:"我叫王可心",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/5_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072047&Signature=L1kofDGpB77ln242OMLQ8I%2BGrZ0%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/5_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072025&Signature=i2QsUZYXG%2F9GFcWjH90VlF0J%2B6M%3D"
      },
      {id:6,
        name:'何馨',
        intruction:"我叫何馨",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/6_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072080&Signature=lpi8M%2FerimhwSixVFy7d4xZ2KRo%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/6_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072062&Signature=MXO8sgEOZvWMMJIdmyR8DcGgq5s%3D"
      },
      {id:7,
        name:'姜兴黔',
        intruction:"我叫姜兴黔",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/7_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072119&Signature=1PUDe6rNpIAY8lslwunt2vMp8XI%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/7_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072102&Signature=NpSefdF0DTq%2BhhAbz6VmxNZqg0M%3D"
      },
      {id:8,
        name:'周银邱',
        intruction:"我叫周银邱",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/8_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072158&Signature=BRCoGq%2FP7DfcvOd1EvcPGbKT7lc%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/8_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072144&Signature=j54sv0QSO4Rq0gVJLHyDqKBoU4Y%3D"
      },
      {id:9,
        name:'杨艺澜',
        intruction:"我叫杨艺澜",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/9_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072194&Signature=gzO411qXf1sfMAIfAUpZ3Mv3fhc%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/9_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072175&Signature=uPMwFDBmdaJZhLVP8JHssTbB81M%3D"
      },
      {id:10,
        name:'左佳毅',
        intruction:"我叫左佳毅",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/10_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072233&Signature=r5G32CNOxycxUDWExwe5K7DZMCc%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/10_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=2621072210&Signature=1iOUp1TsXdOnJ5UOzqSPOyxUMXQ%3D"
      },
      {id:11,
        name:'郭哲强',
        intruction:"我叫郭哲强",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/11_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072267&Signature=e1iGMpF7Hm%2BtG1usxud0jsTAAHY%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/11_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072250&Signature=Pt9hd42AjfX8AjahZMG1hQ7O57Q%3D"
      },
      {id:12,
        name:'摆正航',
        intruction:"我叫摆正航",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/12_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072295&Signature=UAVO390k8jlt7ud2xAGj%2FPXpBsg%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/12_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072281&Signature=CXE9yqBYyYotCcR4W8WATBQkBAg%3D"
      },
      {id:13,
        name:"任冒语",
        intruction:"我叫任冒语",
        picSrc:'',
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/13_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072338&Signature=6RGOejDE8FU4JG3iiTdXQAaizSQ%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/13_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072323&Signature=iu4wrjSlywynVWQXR%2B68%2FqtSW6E%3D"
      },
      {id:14,
        name:"张刘洋",
        intruction:"我叫张刘洋",
        picSrc:'',
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/14_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072365&Signature=0hxaHRD8az8c%2BTeoaAmT%2B62gfBc%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/14_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072352&Signature=g2Upxyu2Vip1LjOg78VckZ0%2BQas%3D"
      },
      {id:15,
        name:"姜玲玲",
        intruction:"我叫姜玲玲",
        picSrc:'',
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/15_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072396&Signature=9r6D%2FFDTtO8XDgYi2F8mEj2Ugrw%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/15_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072380&Signature=o4IPNFkyGSEui8TquDNOXskh%2B2o%3D"
      },
      {id:16,
        name:'沈正钦',
        intruction:"我叫沈正钦",
        picSrc:"",
        ischecked:"",
        checkedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/16_2.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072431&Signature=hpod9UIEmGisHxgNU9NRcePH%2FLs%3D",
        uncheckedIcon:"https://zyy-lyy-mini-program.oss-cn-hangzhou.aliyuncs.com/images/%E5%A4%B4%E5%83%8F/16_1.png?OSSAccessKeyId=LTAI5t9BkdFHRepa7WyHJkpZ&Expires=1721072412&Signature=GA%2Ffh%2FWks8%2FIriQaOgZnxkhlL0A%3D"
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
        offset=81*i;
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
    this.data.buttons[0].ischecked = true;
    this.setData({
      buttons: this.data.buttons,
      offset:0,
      text:this.data.buttons[0].intruction
    })
  }
})
