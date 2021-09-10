<template>
      <!-- 底部 -->
    <div class="footer">
        <div class="footer-container">
            <div class="copyright">
                <ul class="helpLink">
                    <li>关于我们
                        <span class="space"></span>
                    </li>
                    <li>联系我们
                        <span class="space"></span>
                    </li>
                    <li>关于我们
                        <span class="space"></span>
                    </li>
                    <li>商家入驻
                        <span class="space"></span>
                    </li>
                    <li>营销中心
                        <span class="space"></span>
                    </li>
                    <li>友情链接
                        <span class="space"></span>
                    </li>
                    <li>关于我们
                        <span class="space"></span>
                    </li>
                    <li>营销中心
                        <span class="space"></span>
                    </li>
                    <li>友情链接
                        <span class="space"></span>
                    </li>
                    <li>关于我们</li>
                </ul>
                <p>地址：华北水利水电大学</p>
                <p>郑    州</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style lang="less" scoped>
  .footer {
        background-color: #eaeaea;

        .footer-container {
            width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
            .copyright {
                padding: 20px;

                .helpLink {
                    text-align: center;

                    li {
                        display: inline;

                        .space {
                            border-left: 1px solid #666;
                            width: 1px;
                            height: 13px;
                            background: #666;
                            margin: 8px 10px;
                        }
                    }
                }

                p {
                    margin: 10px 0;
                    text-align: center;
                }
            }
        }
    }
</style>