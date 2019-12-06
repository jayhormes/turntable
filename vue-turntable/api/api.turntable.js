module.exports = {
  tp_id: 1,
  logo: '',
  rule: '<ol><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">請點選 “GO” 進行抽獎。<br></span></li><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">本活動主辦方保有最終變更權力。</span><br></li></ol>', // 活动说明
  awaken_img: '', // 唤醒图
  lottery: [
    {
      location: 1, // 位置 1-6
      award: '頭獎',
      item: '此筆商品 0 元帶回家',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/TU6XExY.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/TWrAby7.png', // 中奖结果图片
      rate: 15 // 中奖概率 1-100
    },
    {
      location: 2, // 位置 1-6
      award: '二獎',
      item: '寵物肩背袋',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/TU6XExY.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/7GU1DKP.png', // 中奖结果图片
      rate: 15 // 中奖概率 1-100
    },
    {
      location: 3, // 位置 1-6
      award: '三獎',
      item: '寵物肩車用墊',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/TU6XExY.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/hikPg4x.png', // 中奖结果图片
      rate: 15 // 中奖概率 1-100
    },
    {
      location: 4, // 位置 1-6
      award: '銘謝惠顧',
      item: '再接再厲',
      type: 2, // 抽奖类型 1：活动 2：未中奖
      icon: '', // 转盘上的图片
      result_img: 'https://i.imgur.com/JMoO2Za.png', // 中奖结果图片
      rate: 25 // 中奖概率 1-100
    },
    {
      location: 5, // 位置 1-6
      award: '四獎',
      item: '寵物收納防水碗',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/TU6XExY.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/hSlFzG2.png', // 中奖结果图片
      rate: 15 // 中奖概率 1-100
    },
    {
      location: 6, // 位置 1-6
      award: '五獎',
      item: '此筆現折 50 元',
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://i.imgur.com/TU6XExY.png', // 转盘上的图片
      result_img: 'https://i.imgur.com/X4eAkDo.png', // 中奖结果图片
      rate: 15 // 中奖概率 1-100
    }
  ]
}
