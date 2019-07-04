<template lang="html">
    <div class="ydc-menu">
        <ul>
            <li class="ydc-menu-item">
                <a href="index.html" class="active">
                    <i class="ydc-icon ydc-icon-home fl"></i>
                    首页
                </a>
            </li>
            <li class="ydc-menu-item">
                <a href="release.html" class="">
                    <i class="ydc-icon ydc-icon-find fl"></i>
                    发布
                </a>
            </li>
            <li class="ydc-menu-item">
                <span class="ydc-menu-sub-title">
                    <i class="ydc-icon ydc-icon-file fl"></i>
                    管理
                </span>
                <ul>
                    <li>
                        <a href="content.html">内容管理</a>
                    </li>
                    <li>
                        <a href="related.html">内容同步</a>
                    </li>
                    <li>
                        <a href="asset.html">素材中心</a>
                    </li>
                </ul>
            </li>
            <li class="ydc-menu-item">
                <span class="ydc-menu-sub-title">
                    <i class="ydc-icon ydc-icon-record fl"></i>
                    数据
			
                </span>
                <ul>
                    <li>
                        <a href="subscribe.html">订阅数据</a>
                    </li>
                    <li>
                        <a href="content-data.html">内容数据</a>
                    </li>
                    <li>
                        <a href="index-starLevel.html">指数星级</a>
                    </li>
                </ul>
            </li>
            <li class="ydc-menu-item">
                <span class="ydc-menu-sub-title">
                    <i class="ydc-icon ydc-icon-set fl"></i>
                    设置
			
                </span>
                <ul>
                    <li>
                        <a href="info.html">账号信息</a>
                    </li>
                    <li>
                        <a href="account.html">账号状态</a>
                    </li>
                </ul>
            </li>
            <li class="ydc-menu-item">
                <span class="ydc-menu-sub-title">
                    <i class="ydc-icon ydc-icon-customer fl"></i>
                    客服
			
                </span>
                <ul>
                    <li>
                        <a href="#">在线咨询</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.ydc-menu {
    min-width: 150px;
    min-height: 1300px;
    height: 100%;
    background: #f4f4f4;
    padding: 33px 0 50px;
    color: #333;
    letter-spacing: 1px;
    border-radius: 2px;
}
.ydc-body .menu {
    min-height: 1300px;
    height: 100%;
    background: #f4f4f4;
    border-radius: 8px;
    padding: 33px 0 50px;
    color: #333;
    letter-spacing: 1px;
}

.ydc-menu .ydc-menu-item a {
    display: block;
    width: 100%;
    padding: 10px 0 10px 68px;
    line-height: 20px;
    position: relative;
    font-size: 14px;
}

.ydc-menu .ydc-menu-item a:hover {
    background: #ff6565;
    color: #fff;
}

.ydc-menu .ydc-menu-item .active {
    background: #ff6565;
    color: #fff;
}

.ydc-menu-sub-title {
    padding: 10px 0 10px 70px;
    color: #999;
    border-top: 1px solid #ddd;
    margin-top: 15px;
    position: relative;
    display: inline-block;
    width: 100%;
    line-height: 22px;
    font-size: 14px;
}

</style>