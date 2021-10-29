<template>
  <div 
    class="main-container"
    :class="$route.path === '/seek' ? 'size' : '' "
  >
    <div class="main layout">
      <!-- 左侧内容区 -->
      <div class="left-wrap">
        <!-- 面包屑导航 -->
        <el-breadcrumb
          v-show="$route.path === '/seek'" 
          separator="/"
        >
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>人才大厅</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- /面包屑导航 -->
        <span class="title">自由职业者远程办公</span>
        <div class="slogan">
          <span>"只工作，不上班"</span>
          <span>的自由工作之路</span>
        </div>
        <div
          class="btns"
          v-if="$route.path !== '/seek'"
        >
          <span>发布需求</span>
          <span>直接雇佣</span>
          <span @click="$router.push('/seek')">寻找人才</span>
        </div>
        <!-- 人才搜索 -->
        <div
          class="search-wrap"
          v-show="$route.path === '/seek'"
        >
          <!-- 下拉更多分类 -->
          <div class="more">
            搜索人才<i class="el-icon-caret-bottom"></i>
          </div>
          <!-- /下拉更多分类 -->
          <div class="line"></div>
          <input type="text" placeholder="你想要的人才这里都有~">
          <el-button class="search-btn" type="primary" icon="el-icon-search"></el-button>
        </div>
        <!-- /人才搜索 -->
      </div>
      <!-- /左侧内容区 -->
      <!-- 右侧图片 -->
      <img
        :class="$route.path === '/seek' ? 'imgSize' : '' "
        src="~@/assets/Artwork.png" 
        alt=""
      >
      <!-- /右侧图片 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'freeMain',
  methods: {
  
  }
}
</script>

<style lang="less">
  .main-container {
    .main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-wrap {
        display: flex;
        flex-direction: column;
        .search-wrap {
          width: 686px;
          height: 50px;
          border-radius: 8px;
          background-color: #fff;
          display: flex;
          align-items: center;
          .more {
            height: 100%;
            line-height: 50px;
            font-size: 14px;
            padding-left: 31px;
            cursor: pointer;
            position: relative;
            &:hover ul {
              display: block;
            }
            .el-icon-caret-bottom {
              margin: 0 26px;
              font-size: 5px;
              color: #d8d8d8;
            }
          }
          input {
            flex: 1;
            height: 100%;
            &::-webkit-input-placeholder {
              color: #6e6d7a;
              font-size: 14px;
            }
          }
          .search-btn {
            width: 100px;
            height: 100%;
            background-color: #ea4c89;
            border: none;
            font-size: 20px;
            border-radius: 0 8px 8px 0;
          }
          .line {
            width: 1px;
            height: 35px;
            background-color: #efefef;
            margin-right: 24px;
          }
        }
        .title {
          margin-top: 15px;
          font-size: 40px;
          color: #3c3c4c;
        }
        .slogan {
          margin: 23px 0 42px;
          font-size: 18px;
          span:first-child {
            color: #2c2c30;
            font-weight: 500;
          }
          span:last-child {
            color: #7d7a8a;
          }
        }
        .btns {
          display: flex;
          span {
            width: 88px;
            height: 36px;
            border-radius: 8px;
            font-size: 14px;
            text-align: center;
            line-height: 36px;
            cursor: pointer;
            margin-right: 16px;
            &:first-child {
              color: #fff;
              background-color: #ea4c89;
              &:hover {
                background-color: #fc5695;
              }
            }
            &:not(:first-child) {
              background-color: #fdecf3;
              color: #ea4c89;
              &:hover {
                background-color: #fc5695;
                color: #fff;
              }
            }
          }
        }
      }
      img {
        width: 560px;
      }
      .imgSize {
        width: 360px;
      }
    }
  }
  .size {
    height: 280px;
  }
</style>