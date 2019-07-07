<template lang="html">
    <div class="ydc-tabPanel">
		<div>
			<ul>
				<li v-for="data,index in datas" :class="index==cur? 'hit':''" @click="cur=index">{{data.title}}</li>
			</ul>
		</div>
		<div class="ydc-panes">
			<div class="ydc-pane" v-for="data,index in datas" :style="{display:index==cur?'block':'none'}" @click="cur=index">
				<ol class="ydc-pane-list">
					<li v-for="news in data.data">
						<a href="news.href" target="_blank">{{news.title}}<i v-if="news.isNew">new</i></a>
						<span>{{news.time}}</span>
					</li>
				</ol>
				<Pagination/>
			</div>
		</div>
	</div>
</template>
<script>
import Pagination from "@/components/pagination";
import { fail } from 'assert';
export default {
  name: "tabPanel",
  data() {
    return {
      cur: 0,
      datas: [
        {
          title: "公告栏",
          data: [
            {
              id: 2,
              title:
                "一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日）",
              isNew: false,
							href: "http:www.baidu.com",
							time:"1065300355"
            }
          ]
        },
        {
          title: "一点车资讯",
          data: [
            {
              id: 2,
              title:
                "一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日）",
              isNew: true,
							href: "http:www.baidu.com",
							time:"1562390355"
            }
          ]
        }
      ]
    };
  },
  components: {
    Pagination
  }
};
</script>
<style lang="css" scoped>
.ydc-loading-box {
  margin-top: 20px;
  border: 1px solid #ddd;
  /* border-radius: 53px; */
  padding-bottom: 40px;
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

.ydc-page-head h3 {
  height: 60px;
  line-height: 60px;
  color: #ff6565;
  font-size: 24px;
  text-align: center;
  margin: 0 auto;
}

.ydc-page-head h4 {
  font-weight: bold;
  font-size: 14px;
  color: #333;
  padding: 20px 0;
}

.ydc-page-head p {
  font-weight: normal;
  font-size: 14px;
  color: #616161;
  line-height: 22px;
  padding-bottom: 10px;
}

.ydc-page-aut {
  padding-top: 40px;
  text-align: right;
  font-size: 15px;
  color: #000;
}
</style>