// CoreLaunch.js
function CoreLaunch(){}

//时间间隔
CoreLaunch.Duration = 60 * 60 * 24

CoreLaunch.anim_creator = wx.createAnimation({

  transformOrigin: "50% 50% 0",
  duration: 2000,
  timingFunction: "ease-out",
  delay: 0

})

CoreLaunch.showInVC = function (vc,url) {

  let now = Date.parse(new Date()) / 1000
  let last = wx.getStorageSync('showTime')

  if (now - last < this.Duration) {return}

  vc.setData({ CoreLaunchImgUrl: url, "show": true, none: false })

  wx.setStorage({
    key: "showTime",
    data: now
  })

  setTimeout(()=>{
    CoreLaunch.showZoomBigAnimInVC(vc)
  }, 2000)

  setTimeout(() => {
    CoreLaunch.dismissInVC(vc)
  }, 4000)

}

CoreLaunch.showZoomBigAnimInVC = function(vc){


  this.anim_creator.scale(1.5, 1.5).opacity(0).step()
  let anim_obj = this.anim_creator.export()
  vc.setData({CoreLaunch_Anim: anim_obj, show: true })
}



CoreLaunch.dismissInVC = function (vc) {
  this.anim_creator.scale(1, 1).opacity(1).step({duration:100})
  let anim_obj = this.anim_creator.export()
  vc.setData({ CoreLaunch_Anim: anim_obj, none: true })
}

module.exports = CoreLaunch