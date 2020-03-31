<template>
  <div class="about">
    <div>
      <transition :mode="slide">
        <keep-aliva>
          <ifram :path="data.path"></ifram>
           <!-- <iframe :src="data.path" frameborder="0" :key="data.path"></iframe> -->
        </keep-aliva>
      </transition>
    </div>
  </div>
</template>
<script>
import ifram from './ifram.vue'
export default {
  data () {
    return {
      data: {
        path: ''
      },
      slide: 'out-in',
      websock: null,
      path: 'http://jayden.ltd:6010/files/87221585034044350.pptx'
    }
  },
  components: {
    ifram
  },
  created () {
    this.initWebSocket()
  },
  updated () {
    if (this.slide === 'out-in') {
      this.slide = 'in-out'
    } else {
      this.slide = 'out-in'
    }
  },
  methods: {
    switchIfo (item) {
      this.data = item
    },
    initWebSocket () {
      const wsuri = 'ws://183.129.230.130:6010/webSocket'
      this.websock = new WebSocket(wsuri)
      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    websocketonerror () {
      // 连接建立失败重连
      this.initWebSocket()
      alert('链接失败')
    },
    websocketonmessage (data) {
      this.data = JSON.parse(data.data)

      if (this.data.suffix !== 'html' && this.data.suffix !== 'pdf') {
        this.data.path = `https://view.officeapps.live.com/op/view.aspx?src=${this.data.path}`
      } else {
        this.data.path = this.data.path
      }
    }
  },
  destroyed () {
    this.websock.close()
  }
}
</script>
<style lang="less" scoped>
.list {
  display: inline-block;
  margin-left: 30px;
  border: 1px solid #000;
  padding: 5px;
  border-radius: 4px;
}
iframe {
  width: 1000px;
  height: 1000px;
}
.fade-enter {
 opacity:0;
}
.fade-leave{
 opacity:1;
}
.fade-enter-active{
 transition:opacity .5s;
}
.fade-leave-active{
 opacity:0;
 transition:opacity .5s;
}
</style>
