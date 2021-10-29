<template>
  <div class="seek-container">
    <!-- 主要区 -->
    <freeMain />
    <!-- /主要区 -->

    <!-- 人才内容区 -->
    <div class="talents-content layout">
      <!-- 人才列表 -->
      <div class="talents-list">
        
      </div>
      <!-- /人才列表 -->

      <!-- 推广区 -->
      <div class="promote"></div>
      <!-- /推广区 -->
    </div>
    <!-- /人才内容区 -->
  </div>
</template>

<script>
import freeMain from '@/components/main' // 主要区

export default {
  name: 'seek',
  components: {
    freeMain
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
  .seek-container {
    .talents-content {
      display: flex;
      justify-content: space-between;
      margin-bottom: 69px;
      border-radius: 8px;
      .talents-list {
        width: 1160px;
        height: 1293px;
        background-color: #fff;
        .talents-item {
          width: 520px;
          height: 238px;
          border: 1px solid #f7f7f7;
          border-radius: 8px;
          box-sizing: border-box;
          padding: 28px 22px 22px 32px;
          .item-top {
            display: flex;
            .avatar {
              width: 80px;
              height: 80px;
              background: url('~@/assets/avatar.png') no-repeat;
              background-size: 100%;
              border-radius: 80px;
              margin-right: 24px;
            }
            .info {
              .name {
                font-size: 18px;
              }
              .details {
                display: block;
                font-size: 14px;
                color: #726b6b;
                margin: 7px 0;
              }
              .tag {
                .el-tag {
                  height: 22px;
                  line-height: 22px;
                  margin-right: 20px;
                }
              }
              .about {
                font-size: 14px;
                &:first-child p {
                  color: #726b6b;
                }

              }
            }
          }
        }
      }
      .promote {
        width: 102px;
        height: 663px;
        background-color: #fff;
      }
    }
  }
</style>