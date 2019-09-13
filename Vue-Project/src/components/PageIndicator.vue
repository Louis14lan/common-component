<template>
  <div class="pagination">
    <select v-if="pageSizeList.length>0" v-model="pageSizeComponents" @change="selectValueChange">
      <option v-for="item in pageSizeList" :value="item" >{{item}}</option>
    </select>
    <button
      :disabled="leftArrowDisabled"
      class="active-color"
      @click="handleCurrentChange(currentPageIndex-1)">
      <i
        class="fa fa-angle-left"
        aria-hidden="true"/>
    </button>
    <button
      :class="1===currentPageIndex?'active-color':''"
      @click="handleCurrentChange(1)">
      {{ 1 }}
    </button>
    <span
      v-if="1<showPageStart-1">
      ...
    </span>
    <div
      v-for="item in (pageItemCount>pageCount?pageCount:pageItemCount)"
      :key="item"
      class="flex-row">
      <button
        v-if="item>1&&item<(pageItemCount>pageCount?pageCount:pageItemCount)"
        :class="(showPageStart+item-2)===currentPageIndex?'active-color':''"
        @click="handleCurrentChange(showPageStart+item-2)">
        {{ showPageStart+item-2 }}
      </button>
    </div>
    <span
      v-if="pageCount>showPageEnd+1">
      ...
    </span>
    <button
      v-if="pageCount>1"
      :class="pageCount===currentPageIndex?'active-color':''"
      @click="handleCurrentChange(pageCount)">
      {{ pageCount }}
    </button>
    <button
      :disabled="rightArrowDisabled||pageCount===1"
      class="active-color"
      @click="handleCurrentChange(currentPageIndex+1,$event)">
      <i
        class="fa fa-angle-right"
        aria-hidden="true"/>
    </button>
    <input
      v-model="inputIndex"
      placeholder="输入页码"
      size="5"
      @keyup.enter="inputChange">
    <button
      class="active-color"
      @click="inputChange">
      <i
        style="color: #fff"
        class="fa fa-hand-pointer-o"
        aria-hidden="true"/>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'PageIndicator',
    props: {
      currentPage: {type: Number, default: 1},
      total: {type: Number, required: true},
      pageItemCount: {type: Number, default: 5},
      pageSize: {type: Number, default: 10},
      pageSizeList: {type: Array, default: []}
    },
    // props:["currentPage","total","pageItemCount"],
    data () {
      return {
        inputIndex: '',
        currentPageIndex: 1,
        //为第一页或者最后一页时，首页，尾页不能点击
        leftArrowDisabled: false,
        rightArrowDisabled: false,
        //总页数
        pageCount: 0,
        //开始显示的分页按钮
        showPageStart: 2,
        //结束显示的分页按钮
        showPageEnd: 100,
        pageSizeComponents:''
      }
    },
    mounted () {
      if(this.pageSizeList.length>0){
        this.pageSizeComponents = this.pageSizeList[0]
      }else{
        this.pageSizeComponents = this.pageSize
      }
      this.handleCurrentChange(1)
    },
    methods: {
      handleCurrentChange (pageIndex) {
        let currentPageCount = Math.ceil(this.total / this.pageSizeComponents)
        // console.log(pageIndex);
        //判断数据是否需要更新
        if (currentPageCount !== this.pageCount) {
          pageIndex = 1
          this.pageCount = currentPageCount
        } else if (this.currentPageIndex === pageIndex && currentPageCount === this.pageCount) {
          console.log('not refresh')
          // this.$emit('onPageSelected', pageIndex);
          return
        }
        if (pageIndex > 0) {
          if (pageIndex > this.pageCount) {
            pageIndex = this.pageCount
          }
          //计算分页按钮数据
          if (this.pageCount > this.pageItemCount) {
            if (pageIndex <= (this.pageItemCount - 1) / 2) {
              this.showPageStart = 2
              this.showPageEnd = this.pageItemCount - 1
              console.log('showPage1')
            } else if (pageIndex >= this.pageCount - (this.pageItemCount - 3) / 2) {
              this.showPageStart = this.pageCount - this.pageItemCount + 2
              this.showPageEnd = this.pageCount
              console.log('showPage2')
            } else {
              console.log('showPage3')
              this.showPageStart = pageIndex - ((this.pageItemCount - 3) / 2)
              if (this.showPageStart < 2) {
                this.showPageStart = 2
              }
              this.showPageEnd = pageIndex + ((this.pageItemCount - 3) / 2)
            }
          }
          this.showPageStart = Math.floor(this.showPageStart)
          this.showPageEnd = Math.floor(this.showPageEnd)
        } else {
          pageIndex = 1
        }
        this.currentPageIndex = pageIndex
        this.parseArrowStatus()
        this.$emit('on-page-selected', pageIndex, this.pageSizeComponents)
      },

      //判断左右箭头禁用状态
      parseArrowStatus () {
        //如果当前页首页或者尾页，则上一页首页就不能点击，下一页尾页就不能点击
        this.leftArrowDisabled = false
        this.rightArrowDisabled = false
        if (this.currentPageIndex === 1) {
          this.leftArrowDisabled = true
        } else if (this.currentPageIndex === this.pageCount) {
          this.rightArrowDisabled = true
        }
      },
      inputChange () {
        this.handleCurrentChange(parseInt(this.inputIndex))
      },
      selectValueChange () {
        this.handleCurrentChange(parseInt(this.currentPageIndex))
      }
    },

  }
</script>

<style scoped>
  .flex-row {
    display: inline;
  }

  .pagination button {
    margin: 0 3px;
  }

  .active-color {
    background-color: #409eff;
    color: #ffffff;
  }

</style>
