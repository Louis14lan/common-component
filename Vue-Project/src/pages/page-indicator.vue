<template>
  <div style="text-align: left">
    <h2>1、示例：</h2>
    <div>页码响应值{{ currentPage }}</div>
    <div>页面size响应值{{pageSize}}</div>
    <page-indicator
      :current-page="currentPage"
      :total="total"
      :page-item-count="pageItemCount"
      :page-size = "pageSize"
      :page-size-list = "pageSizeList"
      @on-page-selected="onPageSelected"/>
    <h2>2、参数说明：</h2>
    <ul>
      <li>current-page：表示当前页面索引，页面索引从1开始计数，可以不传，默认为1。</li>
      <li>total：表示列表的总条目数，必须传值，无默认值。</li>
      <li>page-item-count：表示需要展示页面的元素按钮数量，可以不传，默认为5。</li>
      <li>page-size：表示一页中的显示的总条目数，可以不传，默认为10。</li>
      <li>page-size-list：传入数组，表示一页中的显示的总条目数可供选择，不传时不可选择页面size，默认为page-size，优先级高于page-size参数。</li>
      <li>onPageSelected：当页面索引发生改变时触发此事件，可以不用绑定。</li>
    </ul>
  </div>
</template>

<script>
  import PageIndicator from '@/components/PageIndicator'

  export default {
    components:{
      PageIndicator
    },
    data() {
      return {
        "currentPage": 2,
        "total": 400,
        "pageItemCount": 10,
        "pageSize": 4,
        "pageSizeList": [10,20,40],
      }
    },
    methods: {
      onPageSelected(currentPage,pageSize) {
        this.currentPage = currentPage;
        this.pageSize = pageSize
      },
    }
  }
</script>

<style scoped>

</style>
