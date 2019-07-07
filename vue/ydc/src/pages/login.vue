<template lang="html">
    <div class="ydc-body-content">
	<div class="ydc-body-bj">
		<div class="ydc-body-logo">
			<a href="login.html">
				<img src="../assets/images/icon/ydc-logo.png" alt="">
			</a>
		</div>
		<div class="ydc-body-login">
			<h2>登录</h2>
			<div class="ydc-body-login-content">
				<form action="">
					<div class="ydc-body-login-box">
						<div class="ydc-user-img">
							<div class="ydc-user-img-img"><img src="../assets/images/icon/ph.png" alt=""></div>
						</div>
						<div class="ydc-user-border">
							<input type="email" name="email" data-type="email" placeholder="请输入邮箱账号">
						</div>
					</div>
					<div class="ydc-body-login-box">
						<div class="ydc-user-img">
							<div class="ydc-user-img-img"><img src="../assets/images/icon/pad.png" alt=""></div>
						</div>
						<div class="ydc-user-border">
							<input type="password" name="password" data-type="password" placeholder="密码">
						</div>
					</div>
					<div class="ydc-bod-aq">
						<p>为了您的账号安全，请勿在公共电脑登录</p>
					</div>
					<div class="clearfix">
						<div class="fl">
							<input type="checkbox" checked="checked">
							<label>十天内免登录</label>
						</div>
						<div class="fr">
							<a href="#">忘记密码</a>
						</div>
					</div>
					<div class="ydc-body-submit">
						<a href="info.html">登录</a>
					</div>
					<div class="ydc-login-box">

						<a href="go-reg.html" target="_blank">立即注册</a>
						<span>|</span>
						<a href="customer.html" target="_blank">常见问题</a>

					</div>
				</form>

			</div>

		</div>
	</div>
	<div class="ydc-footer-news">
    <Footer/>
	</div>
</div>

</template>
<script>
import Footer from '@/components/footer'
export default {
  name:'login',
  components:{
    Footer
  }
}
</script>
<style lang="css" scoped>
.ydc-body-bj{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/ad/body.jpg) center  no-repeat;
    background-size: cover;
    /* z-index: -1; */
    transform: scale(1);
    -ms-transform: scale(1);
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    -o-transform: scale(1);
    transition: transform 4s linear;
    -moz-transition: transform 4s linear;
    -webkit-transition: transform 4s linear;
    -o-transition: transform 4s linear;
}

.ydc-body-logo{
    position:absolute;
    left:10%;
    top:10%;
}

.ydc-body-logo a{
    width: 130px;
    display: block;
    margin-top: 5px;
}

.ydc-body-logo a img{
    width: 130px;
    display: block;
    margin-top: 5px;
}
  .ydc-body-login{
    position: absolute;
    right: 12%;
    bottom: 37%;
    padding-bottom: 50px;
    width: 360px;
    min-height: 380px;
    opacity: .95;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 4px;
    text-align: center;
    z-index: 9999;
    box-sizing: border-box;
}

.ydc-body-login h2{
    font-size: 19px;
    padding:20px 0 10px 0;
    color:#333;
    font-weight:800;
}

.ydc-body-login-content{
    width: 360px;
    padding: 10px 40px 15px;
}

.ydc-body-login-box{
    z-index: 19;
    position: relative;
    height: 40px;
    margin-bottom: 15px;
    border: 1px solid #c5cddb;
    background: #fff;
    font-size: 12px;
    line-height: 30px;

}
.ydc-user-img{
    float: left;
    text-align: center;
    width: 40px;
    padding: 0 10px;
    height: 40px;
}

.ydc-user-border{
    height: 39px;
    /* margin: 2px 0; */
    border-left: 1px solid #bdc4d6;
    box-sizing: border-box;
    float: left;
    width: 77%;
}
.ydc-user-border input{
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 400;
    border:none;
    background:none;
    width: 100%;
}

.ydc-user-img-img{width: 20px;height: 38px;padding-top: 10px;}

.ydc-user-img-img img{
    width:100%;
    height:auto;
    display:block;
    border:none;
}

.ydc-body-submit{
    margin-top: 16px;
    margin-bottom: 12px;
}

.ydc-body-submit a{
    display: block;
    width: 100%;
    height: 42px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 42px;
    background-color: #ff3c5b;
    color: #fff;
    border-radius: 3px;
}

.ydc-login-box{
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translate(-50%);
    font-size: 12px;
}

.ydc-login-box a{
    padding: 10px;
    color: #999;
}

.ydc-login-box span{
    color: #eee;
}

.ydc-login-box a:hover{
    color:#ff6464;
}
.ydc-footer-news{
    width:1000px;
    position:absolute;
    bottom:0;
    left:50%;
    color:#fff;
    margin-left:-500px;
    opacity: .8;
}
</style>