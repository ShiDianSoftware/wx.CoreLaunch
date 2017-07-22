# wx.CoreLaunch



一、快速安装
==============

#### 1. 拖拽CoreLaunch到FrameWorks文件夹。

#### 2. 集成.js,在程序的入口页面（后续自定义tabbar）

    let CoreLaunch = require("../FrameWorks/CoreLaunch/CoreLaunch.js")

#### 3. 集成.wxml, 在程序的入口页面

    <include src="/pages/FrameWorks/CoreLaunch/CoreLaunch.wxml" />

#### 4. 集成.wxss，在app,wxss文件

    @import "/pages/FrameWorks/CoreLaunch/CoreLaunch.wxss"



二、快速使用
==============

    //在程序入口页面的onShow方法里面添加代码，框架已考虑了显示的时差问题。
    onShow: function () {

      let url = "http://im6.leaderhero.com/wallpaper/213/9387294b039c442f9f23470caf8dc238.jpg"
      CoreLaunch.showInVC(this, url)

    }


