module.exports = {
  tp_id: 1,
  logo: '',
  rule: '<ol><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">請點選 “GO” 進行抽獎。<br></span></li><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">本活動主辦方保有最終變更權力。</span><br></li></ol>', // 活动说明
  awaken_img: '', // 唤醒图
  lottery: [
    {
      location: 1, // 位置 1-6
      award: '頭獎',
      item: 'MAYO 超人筆記本',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/MMDXM20.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/Q1fFtnl.png', // 中奖结果图片
      rate: 5 // 中奖概率 1-100
    },
    {
      location: 2, // 位置 1-6
      award: '二獎',
      item: '路易莎咖啡卷 100元',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/TU6XExY.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/rN36OIW.png', // 中奖结果图片
      rate: 2 // 中奖概率 1-100
    },
    {
      location: 3, // 位置 1-6
      award: '三獎',
      item: 'STAYFUN 手機支架',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/MMDXM20.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/Rs9Sldo.png', // 中奖结果图片
      rate: 13 // 中奖概率 1-100
    },
    {
      location: 4, // 位置 1-6
      award: '銘謝惠顧',
      item: '再接再厲 (鉛筆一隻)',
      type: 2, // 抽奖类型 1：活动 2：未中奖
      icon: '', // 转盘上的图片
      result_img: 'https://i.imgur.com/BLZg0fe.png', // 中奖结果图片
      rate: 42 // 中奖概率 1-100
    },
    {
      location: 5, // 位置 1-6
      award: '四獎',
      item: 'MAYO 牛皮便利貼',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/MMDXM20.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/q2XpXf6.png', // 中奖结果图片
      rate: 19 // 中奖概率 1-100
    },
    {
      location: 6, // 位置 1-6
      award: '五獎',
      item: 'MAYO 超好寫中性筆',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/MMDXM20.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/1rGBscp.png', // 中奖结果图片
      rate: 19 // 中奖概率 1-100
    }
  ]
}
