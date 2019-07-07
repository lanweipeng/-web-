<template lang="html">
    <div>
      <!-- head YDC begin -->
	<header class="ydc-header">
		<div class="ydc-entered">
			<div class="ydc-header-content ydc-flex">
				<div class="ydc-column">
					<a href="index.html" class="ydc-column-ydc-logo">
						<img src="../assets/images/icon/ydc-logo.png" title="" about="" alt="">
					</a>
				</div>
				<div class="ydc-column">
					<div class="ydc-column-user">
						<div class="ydc-user-photo">
							<!--<a href="javascript:;">-->
								<!--<img src="../assets/images/icon/photo.png" title="" about="" alt="">-->
							<!--</a>-->
						</div>
						<div class="ydc-user-info">
							<div class="ydc-user-info-name">
								<!--<a href="javascript:;">一点车</a>-->
							</div>
							<div class="ydc-user-info-func ydc-flex">
								<!--<span class="ydc-tag">新手期</span>-->
								<!--<span class="ydc-mal"><i class="ydc-icon ydc-icon-mail fl"></i><em>12</em></span>-->
								<a href="javascript:;">退出</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
<!-- head YDC end -->

<!-- content YDC begin -->
	<section>
		<div class="ydc-content-slide ydc-body">
			<div class="ydc-page-content" style="overflow:hidden">
				<div class="ydc-reg-title">
					<ul class="clearfix">
						<li v-for="data,index in datas" :class="['ydc-reg-step',index<=step? 'active':'']">
							<em></em>
							<h3>{{data}}</h3>
						</li>
					</ul>
				</div>
				<div class="ydc-reg-form clearfix" v-if="step==0">
					<form action="">
						<div class="ydc-reg-form-group clearfix">
							<label>邮箱账号:</label>
							<div class="ydc-reg-form-input">
								<input type="text" id="loginEmail" name="username" class="ydc-form-control" autocomplete="off" placeholder="账号通行证/邮箱">
							</div>
							<div class="ydc-reg-form-text">
								<p>请填写账号邮箱，作为登录帐号。<br>没有账号邮箱？ <a href="#" @click.prevent="step++">立即注册>></a></p>
							</div>
						</div>
						<div class="ydc-reg-form-group clearfix">
							<label>密码:</label>
							<div class="ydc-reg-form-input">
								<input type="password" id="psd" name="username" class="ydc-form-control" autocomplete="off" placeholder="密码">
							</div>
							<div class="ydc-reg-form-text">
								<p><a href="javascript:;">忘记密码？</a></p>
							</div>
						</div>
						<div class="ydc-reg-form-group">
							<div class="ydc-reg-form-button">
                <router-link :to="{ name: 'login', params: {} } " class="btn">登录</router-link>
								<!-- <a class="btn" type="submit" href="go-reg-username.html"  ></a> -->
							</div>
						</div>
					</form>
				</div>
        <div class="ydc-reg-form clearfix" v-if="step==2">
					<form action="">
						<div class="ydc-reg-form-class ydc-reg-form-reg">
							<div class="ydc-reg-form-group clearfix">
								<label>帐号名称:</label>
								<div class="ydc-reg-form-input">
									<input type="text" id="loginEmail" name="username" class="ydc-form-control" autocomplete="off" placeholder="" style="width:200px;">
									<div class="ydc-reg-form-text">
										<p>请输入2至14字的帐号名称</p>
									</div>
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>帐号简介:</label>
								<div class="ydc-reg-form-input">
									<input type="password" id="psd" name="username" class="ydc-form-control" autocomplete="off" placeholder="">
									<div class="ydc-reg-form-text">
										<p>请输入2至14字的帐号简介</p>
									</div>
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>帐号分类:</label>
								<div class="ydc-reg-form-input">
									<select>
										<option v-for="catalog in catalogs">{{catalog}}</option>
									</select>
								</div>
								<div class="ydc-reg-form-text">
									<p>请输入2至14字的帐号名称</p>
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>帐号图标:</label>
								<div class="ydc-reg-form-input">
									<input type="file" id="" name="username" class="" autocomplete="off" placeholder="">
									<div class="ydc-reg-form-text">
										<p>选取至少160*160尺寸的图片。请勿上传二维码或其他推广性质图片作为图标。</p>
									</div>
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>帐号描述:</label>
								<div class="ydc-reg-form-input ydc-reg-form-input-width">
									<textarea>请详细描述您的帐号，30至120字</textarea>
									<div class="ydc-reg-form-text">
										<p>请输入2至14字的帐号名称</p>
									</div>
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>已有内容渠道及链接:</label>
								<div class="ydc-reg-form-input ydc-reg-form-input-width">
									<textarea>请详细描述您的帐号，30至120字</textarea>
									<div class="ydc-reg-form-text">
										<p>例如已发布文章的网站地址、博客地址、微信号等，方便我们作为审核参考。</p>
									</div>
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>已有内容渠道截图:</label>
								<div class="ydc-reg-form-input">
									<input type="file" id="file" name="username" class="" autocomplete="off" placeholder="">
									<div class="ydc-reg-form-text">
										<p>截图中必须包含个人账号名或昵称等信息,支持.jpg.png格式，大小不超过5M。</p>
									</div>
								</div>

							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>姓名:</label>
								<div class="ydc-reg-form-input">
									<input type="text" id="user1" name="username" class="ydc-form-control" autocomplete="off" placeholder="">
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>身份证号:</label>
								<div class="ydc-reg-form-input clearfix">
									<input type="text" id="user2" name="username" class="ydc-form-control" autocomplete="off" placeholder="">
									<div class="ydc-reg-form-text">
										<p>帐号信息填写需真实有效，如发现虚假以及非个人真实信息导致帐号收益无法提取，责任由帐号个人承担</p>
									</div>
									<div class="ydc-warning-default fl" style="height:auto; font-size:12px;">
										<p>提交本页信息后，使用当前账号登录客户端3.0版本<br>点击「我的」-「实名认证」进行实名认证。</p>
									</div>
								</div>

							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>所在城市:</label>
								<div class="ydc-reg-form-input">
									<select>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
										<option>北京市</option>
									</select>
									<select>
										<option>海淀区</option>
										<option>海淀区</option>
										<option>海淀区</option>
										<option>海淀区</option>
										<option>海淀区</option>
										<option>海淀区</option>
										<option>海淀区</option>
										<option>海淀区</option>
										<option>海淀区</option>
										<option>海淀区</option>
										<option>海淀区</option>
									</select>
								</div>

							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>联系手机:</label>
								<div class="ydc-reg-form-input">
									<input type="text" id="user4" name="username" class="ydc-form-control" autocomplete="off" placeholder="">
									<div class="ydc-reg-form-text">
										<p>请输入手机号并验证</p>
									</div>
								</div>
								<div class="ydc-reg-yzm">
									<button>获取验证码</button>
								</div>

							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>邮箱:</label>
								<div class="ydc-reg-form-input">
									<input type="text" id="user5" name="username" class="ydc-form-control" autocomplete="off" placeholder="">
								</div>
								<div class="ydc-reg-form-text">
									<p>请使用自己日常使用邮箱便于接受相关信息</p>
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>QQ/微信号:</label>
								<div class="ydc-reg-form-input">
									<input type="text" id="user6" name="username" class="ydc-form-control" autocomplete="off" placeholder="">
								</div>
								<div class="ydc-reg-form-text">
									<p>请输入常用QQ/微信号方便联系沟通</p>
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label>推荐人:</label>
								<div class="ydc-reg-form-input">
									<input type="text" id="user7" name="username" class="ydc-form-control" autocomplete="off" placeholder="">
								</div>
								<div class="ydc-reg-form-text">
									<p>选填，若有网易员工推荐您入驻，请填写相应推荐码。</p>
								</div>
							</div>
							<div class="ydc-reg-form-group clearfix">
								<label></label>
								<div class="ydc-reg-form-input ydc-reg-form-input-agreement">
									<label><input type="checkbox" value="yes" id="agreement" checked=""> 我已经阅读并同意 <a href="agreement.html" target="_blank">《车讯号媒体开放平台注册协议》</a>。</label>
								</div>
							</div>
						</div>
						<div class="ydc-reg-form-group">
							<div class="ydc-reg-form-button" style="margin-left:255px;">
								<a class="btn btn-border fl"  @click="step--">上一步</a>
								<a class="btn fl"  @click.prevent="step++">提交申请</a>
							</div>
						</div>
					</form>
				</div>
        <div class="ydc-reg-form clearfix" v-if="step==1">
					<form action="">
						<div class="ydc-reg-form-class">
							<div class="ydc-reg-text-center">
                <div class="ydc-text-center-item" v-for="item,index in items">
									<div class="ydc-text-item-list">
										<div class="ydc-text-item-list-title">
											<div class="ydc-text-ab">
												<input type="radio" name="rdo" class="rdolist" />
												<label :class="['rdobox',cur_type==index?'checked':'unchcked']" @click="cur_type=index">
													<span :class="[cur_type==index?'checked-image':'unchecked-image']"></span>
													<span class="radiobox-content"></span>
												</label>
											</div>
											<div class="ydc-text-item-list-mt1">
												<img :src='item.img' alt="">
											</div>
										</div>
										<div class="ydc-text-item-list-text">
											<h2>{{item.title}}</h2>
											<p>{{item.desc}}</p>
										</div>
									</div>
								</div>
							</div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div class="ydc-reg-form-group">
							<div class="ydc-reg-form-button clearfix">
								<a class="btn" @click="step++">下一步</a>
							</div>
						</div>
					</form>
				</div>
				<div class="ydc-right-banner" style="margin-top:80px;">
					<div class="slideshow-container">
						<a href="https://xihazahuopu.taobao.com/" target="_blank" class="mySlides fade">
							<img src="../assets/images/ad/ad1.jpg" style="width:100%">
						</a>
						<a href="https://weibo.com/525135676" target="_blank" class="mySlides fade">
							<img src="../assets/images/ad/ad2.jpg" style="width:100%">
						</a>
						<a href="http://www.a-ui.cn/" target="_blank" class="mySlides fade">
							<img src="../assets/images/ad/ad3.jpg" style="width:100%">
						</a>
					</div>
				</div>
			</div>
		</div>
		<Footer/>
	</section>
<!-- content YDC end -->
    </div>
</template>
<script>
// import '@/assets/css/core.css'
import Footer from "@/components/footer";
import mt1 from "../assets/images/icon/mt1.png";
import mt2 from "../assets/images/icon/mt2.png";
import mt3 from "../assets/images/icon/mt3.png";
import mt4 from "../assets/images/icon/mt4.png";
import {SERVER} from '@/config'
export default {
  async created() {
    let res = await fetch(SERVER+"api/account_catalog");
    let arr = await res.json();
    this.catalogs = arr;
  },
  data() {
    return {
      step: 0,
      datas: ["登录邮箱账号", "选择帐号类别", "填写媒体信息"],
      cur_type: -1,
      catalogs: [],
      items: [
        {
          img: mt1,
          title: "媒体",
          desc:
            "适合报纸、杂志、电视台、网站等以内容生产为主，有国家新闻出版广电总局认可资质的媒体机构申请。"
        },
        {
          img: mt2,
          title: "自媒体",
          desc:
            "适合垂直领域专家、意见领袖、评论家等个人创作者或以内容生产为主的自媒体公司/机构申请。"
        },
        {
          img: mt3,
          title: "组织机构",
          desc:
            "适合党政机关、事业单位和各类公共场馆、公益机构、学校/培训机构、民间组织等申请。"
        },
        {
          img: mt4,
          title: "企业",
          desc:
            "适合企业、公司及其分支机构、旗下品牌等申请，品牌宣传，主要用于商业品牌推广等申请。"
        }
      ]
    };
  },
  components: {
    Footer
  }
};
</script>
<style lang="css" scoped>
.ydc-entered {
  background-color: #2b2b2b;
  -webkit-transform: translate3d(0, -30px, 0);
  transform: translate3d(0, -30px, 0);
  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
  opacity: 0.05;
}

.ydc-entered {
  opacity: 1;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.ydc-header-content {
  margin: 0 auto;
  width: 1180px;
  height: 70px;
}

.ydc-column {
  -ms-flex: 1 1 0px;
  -webkit-flex: 1 1 0%;
  flex: 1 1 0%;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  max-width: 100%;
}

.ydc-column-ydc-logo {
  width: 130px;
  display: block;
  margin-top: 5px;
}

.ydc-column-ydc-logo img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
}

.ydc-column-user {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: 15px;
}

.ydc-user-photo {
  width: 40px;
  height: 40px;
  margin-right: 25px;
}

.ydc-user-photo a img {
  border-radius: 100%;
  width: 100%;
  height: auto;
  display: block;
  border: none;
}

.ydc-user-info-name a {
  font-size: 16px;
  color: #fff;
  font-weight: normal;
}

.ydc-user-info {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ydc-tag {
  display: inline-block;
  color: #ffffff;
  font-size: 12px;
  height: 17px;
  line-height: 18px;
  margin: 0 5px;
  padding: 0 8px;
  cursor: pointer;
  background: #ff6565;
}

.ydc-user-info-func {
  padding-top: 4px;
}

.ydc-user-info-func a {
  position: relative;
  color: #fff;
}

.ydc-mal {
  height: 22px;
  line-height: 18px;
}
.ydc-content-slide {
  position: relative;
  width: 1180px;
  margin: 20px auto;
  -webkit-transform: translate3d(0, 30px, 0);
  transform: translate3d(0, 30px, 0);
  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: transform 0.5s, opacity 0.5s;
  transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;
  opacity: 1;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.ydc-page-content {
  background: #f4f4f4;
  min-height: 100%;
  overflow: auto;
  font-family: "Microsoft YaHei";
  width: 1000px;
  margin: 0 auto;
  padding: 40px 50px;
  box-sizing: border-box;
  overflow: hidden;
}
.ydc-reg-title ul {
  width: 600px;
  margin: 0 auto;
}

.ydc-reg-title ul li {
  float: left;
  color: rgba(226, 80, 80, 0.3);
  position: relative;
  transition: all 2s ease;
}

.ydc-reg-title ul li em {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  z-index: 9;
  position: relative;
  border: 5px solid #f4f4f4;
}

.ydc-reg-title ul li h3 {
  margin: 10px 0;
}

.ydc-reg-title li.ydc-reg-step + li::before {
  content: "";
  position: absolute;
  height: 15px;
  width: 245px;
  top: 8px;
  left: -190px;
  z-index: 5;
  background-color: #ffcacb;
  transition: all 0.5s ease;
}

.ydc-reg-title li.ydc-reg-step em,
.ydc-reg-title li.ydc-reg-step.active::before {
  background-color: #ffcacb;
}

.ydc-reg-title li.ydc-reg-step.active em {
  background-color: #ff6a81;
}

.ydc-reg-title li.ydc-reg-step + li {
  margin-left: 135px;
}

.ydc-reg-form-group label {
  padding-right: 5px;
  font-size: 16px;
  color: #333;
  text-align: right;
  white-space: nowrap;
  width: 255px;
  float: left;
  margin-bottom: 0;
  padding-top: 9px;
  padding-left: 10px;
}
.ydc-reg-form-input {
  width: 350px;
  white-space: nowrap;
  float: left;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  min-height: 1px;
  box-sizing: border-box;
}

.ydc-reg-title {
  padding: 40px 0;
}
.ydc-reg-form-input .ydc-form-control {
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  box-shadow: none;
  border-radius: 0;
  height: 40px;
  box-sizing: border-box;
  font-size: 12px;
  color: #333;
}

.ydc-reg-form-text {
  white-space: nowrap;
  /* width: 25%; */
  position: relative;
  min-height: 1px;
  /* padding-left: 15px; */
  padding-right: 15px;
  float: left;
}

.ydc-reg-form-text p {
  margin: 0 0 10px;
  padding-bottom: 9px;
  margin-bottom: 0;
  font-size: 12px;
  padding-top: 0;
  color: #a1a1a1;
}

.ydc-reg-form-text p a {
  color: #29adeb;
}

.ydc-reg-form-group {
  margin-bottom: 30px;
  padding: 0 10px;
  margin-left: -15px;
  margin-right: -15px;
}

.ydc-reg-form-button {
  margin-left: 355px;
  /* width: 83.33333333%; */
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}

.ydc-reg-form-button a {
  color: #fff;
  background-color: #ff6980;
  border-color: #ff6980;
  font-size: 14px;
  width: 101px;
  display: block;
  box-sizing: content-box;
  transition: all 0.2s;
  padding: 10px 12px;
  border-radius: 3px;
}

.ydc-reg-title li.ydc-reg-step em,
.ydc-reg-title li.ydc-reg-step.active::before {
  background-color: rgba(226, 80, 80, 0.6);
}

.ydc-reg-title li.ydc-reg-step em,
.ydc-reg-title li.ydc-reg-step.active h3 {
  color: #ff6a81;
}

.ydc-reg-text-center {
  text-align: center;
}
.ydc-reg-text-center {
  text-align: center;
}

.ydc-text-center-item {
  width: 174px;
  text-align: center;
  vertical-align: top;
  padding: 0;
  margin: 0 15px 30px;
  display: inline-block;
}
.ydc-text-item-list {
  position: relative;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
  vertical-align: middle;
}
.ydc-text-item-list-text h2 {
  width: 100%;
  font-size: 16px;
  color: #636363;
  padding-top: 20px;
}

.ydc-text-item-list-text p {
  margin-top: 15px;
  color: #a1a1a1;
  font-size: 12px;
  padding: 0 10px 20px 10px;
}

.ydc-text-item-list:hover {
  background: #fbe4e6;
}

.ydc-text-item-list-mt1 {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.ydc-text-item-list-mt1 img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
}

.ydc-text-item-list-title {
  padding-top: 20px;
  position: relative;
}
.ydc-text-ab {
  width: 100%;
  position: absolute;
}
.ydc-reg-form-reg .ydc-reg-form-input select {
  height: 42px;
  line-height: 42px;
  width: 100px;
  border-radius: 0;
  border: 1px solid #ccc;
}

.ydc-reg-form-reg .ydc-reg-form-input select option {
  height: 42px;
  line-height: 42px;
  display: block;
}

.ydc-reg-form-input textarea {
  width: 480px;
  border: 1px solid #ccc;
  padding: 10px;
  height: 160px;
  background: #fff;
}
.ydc-reg-form-input-width {
  width: 510px;
}

.ydc-reg-form-input .ydc-form-control:hover {
  border-color: #ff6980;
}

.ydc-reg-form-input textarea:hover {
  border-color: #ff6980;
}

.ydc-reg-form-button a:hover {
  background: #ff6464;
}

.ydc-reg-form-input-agreement label {
  font-size: 12px;
  padding-left: 0;
  padding-right: 5px;
}

.ydc-reg-form-input-agreement label a {
  color: #ff6464;
}
.ydc-reg-yzm button {
  background: #ff6464;
  border: none;
  font-size: 13px;
  padding: 11px 16px;
  color: #fff;
}
.ydc-reg-yzm button {
  background: #ff6464;
  border: none;
  font-size: 13px;
  padding: 11px 16px;
  color: #fff;
  border-radius: 3px;
}
.ydc-warning-default p {
  padding: 0 20px;
  color: #969696;
}
.ydc-warning-default {
  display: block;
  background-color: #fceded;
  font-size: 14px;
  color: #666;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
}
</style>