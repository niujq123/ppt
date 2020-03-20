<template>
  <div class="about">
    <h1>选择</h1>
    <div class="list" v-for="(item,i) in IconList" :key="item" style="font-size: 40px;" @click="switchIfo(i)">
      <svg class="icon" aria-hidden="true">
          <use :xlink:href="item"></use>
      </svg>
    </div>
    <div>
      <iframe src="./index.html" frameborder="0" v-if="data=='html'"></iframe>
      <iframe src="https://view.officeapps.live.com/op/view.aspx?src=https://cdn.singsingenglish.com/new-sing/0533f0172b8edd7fb8d8f4d6dba47bf0e1677a3c.pptx" frameborder="0" v-if="data=='ppt'"></iframe>
      <iframe src="https://view.officeapps.live.com/op/view.aspx?src=https://cdn.singsingenglish.com/new-sing/223783193b5c4a949ac821385213b0f55ae39355.docx" frameborder="0" v-if="data=='word'"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      IconList: {
        ppt: '#icon-ppt',
        word: '#icon-word',
        html: '#icon-wangye'
      },
      data: 'html'
    }
  },
  methods: {
    switchIfo (item) {
      this.data = item
    }
  }
}
</script>
<style lang="less" scoped>
 .list{
   display :inline-block;
   margin-left: 30px;
   border: 1px solid #000;
   padding: 5px;
   border-radius: 4px;
 }
 iframe{
   width: 1000px;
   height: 1000px;
 }
</style>
