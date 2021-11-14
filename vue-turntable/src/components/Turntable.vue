<template>
  <div class="turntable-wrap">
    <div class="turntable-bg">
      <div class="light"></div>
      <div class="pointer" @click="gameStart"></div>
      <div class="turntable" ref="turntable">
        <ul class="prize" v-if="turntable && turntable.length">
          <li v-for="(item, index) in turntable" :key="index"><img class="img" :src="item.type==turntableFail ? turntableFailImg : item.icon" /></li>
        </ul>
      </div>
      <div class="decorate1"></div>
      <div class="decorate2"></div>
    </div>
    <Dialog :dialog="dialog" ref="dialog"/>
  </div>
</template>

<script>
import Dialog from './Dialog'
import { prefixStyle } from '../assets/js/dom'
import { db } from '../assets/js/firebase'

const transformCss = prefixStyle('transform-css')
const transformJs = prefixStyle('transform-js')
const transition = prefixStyle('transition')
const transitionend = prefixStyle('transitionend')

const fStore = db.firestore()
let rateDict = {}
let rateCheckedDict = {}
let storageDict = {}

var ref = fStore.collection('SpinAwards').doc('頭獎')
ref.onSnapshot(doc => {
  rateDict['頭獎'] = doc.data()['rate']
  storageDict['頭獎'] = doc.data()['storage']
})
ref = fStore.collection('SpinAwards').doc('二獎')
ref.onSnapshot(doc => {
  rateDict['二獎'] = doc.data()['rate']
  storageDict['二獎'] = doc.data()['storage']
})
ref = fStore.collection('SpinAwards').doc('三獎')
ref.onSnapshot(doc => {
  rateDict['三獎'] = doc.data()['rate']
  storageDict['三獎'] = doc.data()['storage']
})
ref = fStore.collection('SpinAwards').doc('四獎')
ref.onSnapshot(doc => {
  rateDict['四獎'] = doc.data()['rate']
  storageDict['四獎'] = doc.data()['storage']
})
ref = fStore.collection('SpinAwards').doc('五獎')
ref.onSnapshot(doc => {
  rateDict['五獎'] = doc.data()['rate']
  storageDict['五獎'] = doc.data()['storage']
})
ref = fStore.collection('SpinAwards').doc('銘謝惠顧')
ref.onSnapshot(doc => {
  rateDict['銘謝惠顧'] = doc.data()['rate']
  storageDict['銘謝惠顧'] = doc.data()['storage']
})

export default {
  props: {
    turntable: {
      type: Array,
      default () {
        return [
          {
            location: 1, // 位置 1-6
            type: 1, // 抽奖类型 1：活动 2：未中奖
            icon: '', // 转盘上的图片
            result_img: '', // 中奖结果图片
            rate: 20 // 中奖概率 1-100
          }
        ]
      }
    }
  },
  components: { Dialog },
  data () {
    return {
      turntableFail: 2,
      turntableSuccess: 1,
      turntableFailImg: require('../assets/img/no-gift.png'),
      dialog: {
        show: false,
        title: '',
        resultImg: '',
        resultText: '',
        destoryTime: 15
      },
      isRunning: false
    }
  },
  methods: {
    startRun () {
      this.isRunning = true
      /*
      fStore.collection('Message').add({
        'author': {
          'uid': 'this.user.uid',
          'name': 'this.user.displayName',
          'photoURL': 'this.user.photoURL',
          'email': 'this.user.email'
        },
        'content': 1
      })
        .then(() => {
          this.inputMessage = ''
        }) */

      // 1.转盘匀速转动
      let transformDeg = this.$refs.turntable.style[transformJs]
      let deg = transformDeg.match(/([-]?\d*)deg/) ? transformDeg.match(/([-]?\d*)deg/)[1] : 0
      deg = parseInt(deg)

      let interval = setInterval(() => {
        deg += 2
        deg = deg % 360
        this.$refs.turntable.style[transformJs] = `rotate(${deg}deg)`
      }, 1)
      /*
      var ref = fStore.collection('SpinAwards').doc('頭獎')
      ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, doc.data())
        })
      }) */
      console.log(rateDict)
      console.log(storageDict)
      console.log(rateCheckedDict)

      // Check storage and rate
      rateCheckedDict['銘謝惠顧'] = Number(rateDict['銘謝惠顧'])
      if (storageDict['頭獎'] > 0) {
        rateCheckedDict['頭獎'] = Number(rateDict['頭獎'])
      } else {
        rateCheckedDict['頭獎'] = 0
        rateCheckedDict['銘謝惠顧'] += Number(rateDict['頭獎'])
      }
      if (storageDict['二獎'] > 0) {
        rateCheckedDict['二獎'] = Number(rateDict['二獎'])
      } else {
        rateCheckedDict['二獎'] = 0
        rateCheckedDict['銘謝惠顧'] += Number(rateDict['二獎'])
      }
      if (storageDict['三獎'] > 0) {
        rateCheckedDict['三獎'] = Number(rateDict['三獎'])
      } else {
        rateCheckedDict['三獎'] = 0
        rateCheckedDict['銘謝惠顧'] += Number(rateDict['三獎'])
      }
      if (storageDict['四獎'] > 0) {
        rateCheckedDict['四獎'] = Number(rateDict['四獎'])
      } else {
        rateCheckedDict['四獎'] = 0
        rateCheckedDict['銘謝惠顧'] += Number(rateDict['四獎'])
      }
      if (storageDict['五獎'] > 0) {
        rateCheckedDict['五獎'] = Number(rateDict['五獎'])
      } else {
        rateCheckedDict['五獎'] = 0
        rateCheckedDict['銘謝惠顧'] += Number(rateDict['五獎'])
      }

      console.log(rateDict)
      console.log(storageDict)
      console.log(rateCheckedDict)

      // 2.随机生成中奖结果
      let randNum = parseInt(Math.random() * 100) + 1
      console.log('randNum = ' + randNum)
      let count = 0
      this.turntable.map(item => {
        /* console.log('rateDict[\'頭獎\'] = ' + rateDict['頭獎'])
        console.log('item.award = ' + item.award)
        console.log('rateDict[item.award] = ' + rateDict[item.award])
        console.log('storageDict[item.award] = ' + storageDict[item.award])
        console.log(rateDict)
        console.log(storageDict) */
        item.min = count
        // count += Number(item.rate)
        count += Number(rateCheckedDict[item.award])
        item.max = count
        console.log('award = ' + item.award)
        console.log('item.min = ' + item.min)
        console.log('item.max = ' + item.max)
      })

      let randomRes = this.turntable.filter((item) => {
        return randNum > item.min && randNum <= item.max
      })[0]
      // 若中奖没有中奖图片，则为未中奖
      console.log('randomRes.location ' + randomRes.location)
      console.log('randomRes.type ' + randomRes.type)
      if (randomRes.type === this.turntableSuccess && !randomRes.result_img) {
        randomRes = this.turntable.filter((item) => Number(item.type) === this.turntableFail)[0]
      }
      clearInterval(interval)

      // 3.计算转动角度
      transformDeg = this.$refs.turntable.style[transformJs]
      let lastDeg = transformDeg.match(/([-]?\d*)deg/) ? transformDeg.match(/([-]?\d*)deg/)[1] : 0
      lastDeg = parseInt(lastDeg)

      let finallyDeg = randomRes.location * (-60) + 360 * 4 + 60
      this.$refs.turntable.style[transformJs] = `rotate(${finallyDeg}deg)`

      let transTime = parseFloat((finallyDeg - lastDeg) / 360).toFixed(1)

      this.$refs.turntable.style[transition] = `${transformCss} ${transTime}s ease-out`
      // 4. 转动结束后执行
      let runEnd = () => {
        this.$refs.turntable.style[transition] = `${transformCss} 0s`
        let transformDeg = this.$refs.turntable.style[transformJs]
        let deg = transformDeg.match(/([-]?\d*)deg/) ? transformDeg.match(/([-]?\d*)deg/)[1] : 0
        deg = parseInt(deg)
        deg = deg % 360
        this.$refs.turntable.style[transformJs] = `rotate(${deg}deg)`

        // 5. 显示中奖结果
        if (Number(randomRes.type) === this.turntableSuccess) {
          // this.dialog.title = '🎉恭喜中 ' + randomRes.award + ' 🎉'
          this.dialog.title = '🎉恭喜中' + '獎' + '🎉'
          this.dialog.resultText = randomRes.item
          this.dialog.destoryTime = 3

          var remainStorage = Number(storageDict[randomRes.award]) - 1
          console.log('randomRes.award = ' + randomRes.award)
          console.log('remainStorage = ' + remainStorage)
          var ref = fStore.collection('SpinAwards').doc(randomRes.award)
          ref.update({
            storage: remainStorage
          })
        } else {
          this.dialog.title = '再接再厲 (鉛筆一隻) '
          this.dialog.resultText = '加入line@拿好禮'
          this.dialog.destoryTime = 3
        }
        this.dialog.show = true
        this.dialog.resultImg = randomRes.result_img
        // this.$refs.dialog.countDown() // 倒计时
        // this.$refs.dialog.doClick()

        setTimeout(() => {
          this.isRunning = false
          this.$refs.turntable.removeEventListener(transitionend, runEnd)
        }, this.dialog.destoryTime * 1000)
      }

      this.$refs.turntable.addEventListener(transitionend, runEnd)
    },
    gameStart () {
      if (this.turntable && !this.turntable.length) {
        return
      }
      if (this.isRunning) {
        return
      }
      setTimeout(() => {
        this.startRun()
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
  .turntable-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    .turntable-bg {
      position: relative;
      top: 55%;
      transform: translateY(-55%);
      z-index: 2;
      margin: auto;
      width: 840px;
      height: 1111px;
      background: url('../assets/img/turntable-bg.png') no-repeat 100% 100%;
      background-size: contain;
      .light {
        position: absolute;
        top: 4px;
        left: 7px;
        width: 822px;
        height: 830px;
        margin: auto;
        background: url('../assets/img/light.png') no-repeat 100% 100%;
        background-size: contain;
        animation: rotate 5s linear infinite;
      }
      .pointer {
        position: absolute;
        top: 255px;
        left: 310px;
        z-index: 1;
        width: 206px;
        height: 268px;
        background: url('../assets/img/turntable-pointer.png') no-repeat 100% 100%;
        background-size: contain;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent; // 点击无阴影
      }
      .turntable {
        position: absolute;
        top: 45px;
        left: 48px;
        width: 746px;
        height: 746px;
        transform: rotate(0deg);
        background: url('../assets/img/turntable.png') no-repeat 100% 100%;
        background-size: contain;
        .prize {
          position: absolute;
          top: 130px;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 500px;
          height: 500px;
          transform: rotate(-15deg);
          li {
            position: absolute;
            top: 0;
            left: 0;
            width: 250px;
            height: 250px;
            border-radius: 50%;
            color: #000;
            text-align: center;
            line-height: 250px;
            transform-origin: right bottom;
            &:nth-child(1) {
              transform: rotate(60deg);
            }
            &:nth-child(2) {
              transform: rotate(120deg);
            }
            &:nth-child(3) {
              transform: rotate(180deg);
            }
            &:nth-child(4) {
              transform: rotate(240deg);
            }
            &:nth-child(5) {
              transform: rotate(300deg);
            }
            &:nth-child(6) {
              transform: rotate(360deg);
            }
            .img {
              display: block;
              width: 150px;
              height: 150px;
              border: 0;
              transform: rotate(-45deg);
            }
          }
        }
      }
    }

    .decorate1 {
      position: absolute;
      top: 50px;
      right: -118px;
      width: 180px;
      height: 140px;
      background: url('') no-repeat 100% 100%;
      background-size: contain;
    }
    .decorate2 {
      position: absolute;
      bottom: 20px;
      left: -62px;
      width: 385px;
      height: 180px;
      background: url('') no-repeat 100% 100%;
      background-size: contain;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
