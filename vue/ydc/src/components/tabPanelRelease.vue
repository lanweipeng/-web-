<template lang="html">
    <div class="ydc-tabPanel ydc-tabPanel-release">
        <div class="ydc-release-tab-head">
            <ul>
                <li v-for="tab,index in tabs" :class="index==cur? 'hit':''" @click="cur=index">{{tab.title}}</li>
            </ul>
            <slot name="amount"/>
        </div>
        <div class="ydc-panes">
            <div class="ydc-pane" v-for="tab,index in tabs" :style="{display:index==cur?'block':'none'}">
                <slot :name="tab.slotname"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'tabPanelRelease',
    props:['tabs'],
    data(){
        return {cur:0}
    }
}
</script>
<style lang="css" scoped>
/* .ydc-tabPanel ul {
    height: 44px;
    border-bottom: 1px solid #d0d0d0;
    background: #eaeaea;
    line-height: 44px;
}

.ydc-tabPanel ul li {
    float: left;
    margin: 0 2px 0 0;
    font-size: 14px;
    height: 44px;
    line-height: 45px;
    width: 111px;
    text-align: center;
    cursor: pointer;
    background: -moz-linear-gradient(top, #eee, #ddd);
}

.ydc-tabPanel .hit {
    border-bottom: 2px solid #ff5f5f;
    cursor: pointer;
    color: #ffffff;
    background: #ff5f5f;
    background: -moz-linear-gradient(top, #e1e1e1, #fff);
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
}*/
.ydc-form-group-label{
    width: 90px;
    float:left;
    height: 40px;
    line-height: 40px;
    text-align: left;
}
.ydc-release-form-group-ms{
    margin-top:20px;
}
    .ydc-tabPanel-release ul {
    background: none;
    border-bottom: 2px solid #d0d0d0;
}

.ydc-tabPanel-release .hit {
    border-bottom: 2px solid #ff5f5f;
    cursor: pointer;
    color: #ff5f5f;
    background: none;
    background: -moz-linear-gradient(top, #e1e1e1, #fff);
    font-size: 16px;
}

.ydc-tabPanel-release ul li {
    font-size: 16px;
} 

.ydc-release-tab-head {
    position: relative;
}

.ydc-release-amount {
    position: absolute;
    right: 0;
    top: 10px;
    font-size: 14px;
    color: #999;
}

.ydc-release-amount a {
    color: #ff5f5f;
    padding-left: 10px;
}

.ydc-release-amount span em {
    color: #ff5f5f;
}

.ydc-release-form-group {
    margin-bottom: 20px;
    font-size: 14px;
}

.ydc-form-control {
    width: 100%;
    height: 40px;
    padding: 8px 12px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
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

.ydc-warning-default p {
    padding: 0 20px;
    color: #969696;
}

.ydc-release-form-group-input {
    position: relative;
}

.ydc-form-group-jl {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 14px;
    color: #999;
}

.ydc-form-group-jl span {
    color: #ff3c3c;
}
.aui-card-form-item {
    margin-bottom: 15px;
    clear: both;
}

.aui-card-form-ad {
    padding-top: 20px;
}

.aui-card-form-label {
    float: left;
    display: block;
    padding: 9px 10px;
    width: 92px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #464545;
}

.aui-card-form-input {
    margin-left: 95px;
    min-height: 36px;
    width: 630px;
    position: relative;
}

.aui-card-form-input input {
    height: 35px;
    line-height: 1.3;
    line-height: 38px\9;
    background-color: #fff;
    border-radius: 2px;
    display: block;
    width: 100%;
    padding-left: 10px;
    border: 1px solid #e0e0e0;
}

.aui-card-form-input select {
    height: 38px;
    line-height: 1.3;
    line-height: 38px\9;
    background-color: #fff;
    border-radius: 2px;
    display: block;
    border: 1px solid #e0e0e0;
    width: 120px;
    float: left;
    margin-right: 10px;
    text-align: center;
}

.aui-card-form-input:focus {
    border: 1px solid #fc5830;
}

.aui-card-form-input textarea {
    min-height: 100px;
    height: auto;
    line-height: 20px;
    padding: 6px 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
    resize: none
}
.aui-card-form-input .aui-info-rd {
    width: 20px;
    display: block;
    float: left;
}

.aui-card-form-input ul li {
    float: left;
    width: 50px;
}

.aui-card-form-input ul li label {
    float: left;
    height: 38px;
    line-height: 38px;
}

.aui-release {
    display: inline-block;
    height: 35px;
    line-height: 35px;
    padding: 0 18px;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    font-size: 12px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    background-color: #177ce3;
    background-repeat: repeat-y;
    background-image: -moz-linear-gradient(left,#29adeb,#177ce3);
    background-image: -webkit-linear-gradient(left,#29adeb,#177ce3);
    background-image: -o-linear-gradient(left,#29adeb,#177ce3);
    background-image: linear-gradient(left,#29adeb,#177ce3);
}
.ydc-release-form-text {
    margin-bottom: 20px;
}

.aui-file-up {
    float: left;
    margin-right: 25px;
    margin-bottom: 45px;
}

.aui-file-up-img {
    padding: 4px;
    line-height: 20px;
    border: 1px solid #ddd;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 10px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    width: 200px;
    height: 152px;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
}

.aui-file-up-img img {
    width: 100%;
    height: auto;
    border: none;
    display: block;
}

.aui-btn {
    float: left;
    position: relative;
    display: inline-block;
    display: inline;
    padding: 4px 12px;
    margin-bottom: 0;
    margin-left: .3em;
    font-size: 12px;
    line-height: 20px;
    color: #333333;
    text-align: center;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    vertical-align: middle;
    cursor: pointer;
    background-color: #f5f5f5;
    background-color: #e6e6e6;
    background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));
    background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
    background-repeat: repeat-x;
    border: 1px solid #cccccc;
    /* border: 0; */
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border-bottom-color: #b3b3b3;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    zoom: 1;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
}

.aui-news .aui-file-new-up {
    position: absolute;
    top: 10px;
    right: 0;
    margin: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translate(-300px, 0) scale(4);
    font-size: 23px;
    direction: ltr;
    cursor: pointer;
    width: 35px;
    left: 290px;
    height: 10px;
}

.aui-remarks {
    height: 35px;
    line-height: 35px;
    float: left;
    color: #999;
    padding-left: 10px;
}

.aui-remarks p {
    padding: 0;
}

.aui-file-up-btn {
    padding-left: 94px;
}

.ydc-btn {
    padding-left: 75px;
    padding-top: 40px;
}
.ydc-btn button {
    margin-left: 20px;
    width: 140px;
    border-radius: 4px;
    font-size: 14px;
    padding: 8px 20px;
    color: #fff;
    background-color: #ff6464;
    border-color: #ff6464;
    text-decoration: none;
    transition: all .2s;
    line-height: 1.3333333;
}

.ydc-btn .btn-default {
    background-color: transparent;
    border-color: #e25050;
    color: #e25050;
}
.ydc-release-form-group-input {
    position: relative;
}
.ydc-reg-form-input .ydc-form-control{
    width: 100%;
    height: 38px;
    padding: 8px 12px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    box-shadow: none;
    border-radius: 0;
    height: 40px;
    box-sizing: border-box;
    font-size: 12px;
    color: #333;
}
.ydc-reg-form-input .ydc-form-control:hover{
    border-color:#ff6980;
}
</style>