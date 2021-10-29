<template>
  <div class="Footer-container">
    <div class="layout">
      <div class="footer-top">
        <div class="free">
        <div class="title">Free星球</div>
        <ul>
          <li>
            <a href="#">关于我们</a>
          </li>
          <li>
            <a href="#">加入我们</a>
          </li>
          <li>
            <a href="#">会员必读</a>
          </li>
        </ul>
        </div>
        <div class="notice">
        <div class="title">注意事项</div>
        <ul>
          <li>
            <a href="#">雇主注意事项</a>
          </li>
          <li>
            <a href="#">服务商注意事项</a>
          </li>
          <li>
            <a href="#">雇主注意事项</a>
          </li>
        </ul>
        </div>
        <div class="operation">
        <div class="title">操作指南</div>
        <ul>
          <li>
            <a href="#">接单指南</a>
          </li>
        </ul>
        </div>
        <div class="join">
        <div class="title">加盟代理</div>
        <ul>
          <li>
            <a href="#">代理推广</a>
          </li>
        </ul>
        </div>
        <div class="concern">
          <div class="title">扫码关注我们</div> 
          <ul>
            <li>
              <img src="~@/assets/QR_code.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="footer-bottom">
      <div>
        <a href="#">诚招英才</a>
        <a href="#">联系我们</a>
      </div>
      <div>
        <span class="certify"></span>
        <a href="#">
          《Free星球隐私权政策》
        </a>
        <a href="#">《Free星球客户权益保障承诺书》</a>
        <span>Copyright © 2018 Free星球有限公司</span>
        <span></span>
        <span>粤ICP备 191009465-1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less">
  .Footer-container {
    height: 378px;
    background-color: #fff;
    font-size: 14px;
    color: #3c3c4c;
    .footer-top {
      height: 269px;
      box-sizing: border-box;
      padding: 40px 40px 0;
      .concern {
        float: right;
      }
      & > div {
        float: left;
        margin-right: 128px;
        li {
          margin-bottom: 16px;
        }
        .title {
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 28px;
          color: #262626;
        }
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: #e7e7e9;
    }
    .footer-bottom {
      text-align: center;
       font-weight: 300;
      &:last-child div {
        display: flex;
        justify-content: center;
        align-items: center;
        .certify {
          width: 22px;
          height: 24px;
          background: url('~@/assets/certify.png');
        }
      }
      div {
        margin-top: 24px;
        a {
          margin-right: 30px;
        }
      }
    }
    a {
      font-size: 14px;
      font-weight: 300;
      color: #3c3c4c;
      &:hover {
        color: #ea4c89;
      }
    }
  }
</style>