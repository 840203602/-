
Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494510675371&di=c95bfc8ba05bfa1869eb0631f2de001b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F43%2F75%2F52e58PICwAC_1024.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494510738856&di=f65012602f6020ed6e176553879d7b16&imgtype=0&src=http%3A%2F%2Fwww.puercha.cc%2Ffile%2Fupload%2F201509%2F09%2F14-22-07-26-128.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494510865114&di=7ab58b90e9acca8ebba30d4289d4ccb0&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F95%2F19%2F60d58PICqiz_1024.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    teaList: [{
      teaUrl: '/resource/assets/image/teaImage/longjing',
      teaName: '龙井',
      teaType: '绿茶',
      teaPrice: '5.99',
    }, {
      teaUrl: '/resource/assets/image/teaImage/dahongpao',
      teaName: '大红袍',
      teaType: '红茶',
      teaPrice: '5.99',
    }, {
      teaUrl: '/resource/assets/image/teaImage/dianhong',
      teaName: '滇红',
      teaType: '红茶',
      teaPrice: '5.99',
    }, {
      teaUrl: '/resource/assets/image/teaImage/baicha',
      teaName: '白毫银针',
      teaType: '白茶',
      teaPrice: '5.99',
    }, {
      teaUrl: '/resource/assets/image/teaImage/puershengcha',
      teaName: '普洱(生茶)',
      teaType: '黑茶',
      teaPrice: '5.99',
    }, {
      teaUrl: '/resource/assets/image/teaImage/puershucha',
      teaName: '普洱(熟茶)',
      teaType: '黑茶',
      teaPrice: '5.99',
    }, {
      teaUrl: '/resource/assets/image/teaImage/molihuacha',
      teaName: '茉莉花',
      teaType: '花茶',
      teaPrice: '5.99',
    }, {
      teaUrl: '',
      teaName: '正山小种',
      teaType: '红茶',
      teaPrice: '5.99',
    }, {
      teaUrl: '/resource/assets/image/teaImage/tieguanyin',
      teaName: '铁观音',
      teaType: '乌龙茶',
      teaPrice: '5.99',
    }]
  },

  onLoad: function (options) {
    // 生命周期函数--监听页面加载

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  }
})