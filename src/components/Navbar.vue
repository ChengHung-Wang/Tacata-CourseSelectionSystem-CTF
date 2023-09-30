<template>
  <nav class="navbar navbar-default navbar-fixed-top label-warning">

    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="text-success">
                <a class="navbar-brand" href="/">國立臺灣科技大學選課系統</a>
            </span>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navigation">
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="font-size:18px;"><span class="text-success">初選選課</span><span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li class="disabled"><a style="font-size:16px; text-align:left; text-decoration:line-through; text-decoration-color: red;" href="/First/A02/A02">初選登記選課</a></li>

              <li class="disabled"><a style="font-size:16px; text-align:left; text-decoration:line-through; text-decoration-color: red;" href="/First/A07/A07">新生暨交換生初選登記選課</a></li>

              <li class="disabled"><a style="font-size:16px; text-align:left; text-decoration:line-through; text-decoration-color: red;" href="/First/A03/A03">臺灣大學系統登記選課</a></li>

              <li class="disabled"><a style="font-size:16px; text-align:left; text-decoration:line-through; text-decoration-color: red;" href="/First/A06/A06">電腦抽選後選課</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="font-size:18px;"><span class="text-success">加退選課</span> <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a style="font-size:16px; text-align:left;" href="/AddAndSub/B01/B01">加退選課</a></li>



              <li class="disabled"><a style="font-size:16px; text-align:left; text-decoration:line-through; text-decoration-color: red;" href="/AddAndSub/B02/B02">EMBA暑期選課</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="font-size:18px;"><span class="text-success">授權碼選課</span> <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a style="font-size:16px; text-align:left;" href="/Authorization/C01/C01">授權碼選課</a></li>
              <li class="disabled"><a style="font-size:16px; text-align:left; text-decoration:line-through; text-decoration-color: red;" href="/Authorization/C02/C02">暑期授權碼選課</a></li>

            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="font-size:18px;"><span class="text-success">選課清單</span> <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li> <a style="font-size:18px;" href="/ChooseList/D01/D01">選課清單</a></li>


              <li> <a style="font-size:18px;" href="/ChooseList/D02/D02">暑期選課清單</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="font-size:18px;"><span class="text-success">二次退選</span> <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li> <a style="font-size:18px;" href="/TwoSub/E01/Announcement">二次退選</a></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="font-size:18px;"><span class="text-success">Language</span> <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a style="font-size:18px; text-align:left;" href="/Home/SetCulture?Culture=zh-TW&amp;returnUrl=%2F">繁體中文</a></li>
              <li><a style="font-size:18px; text-align:left;" href="/Home/SetCulture?Culture=en-US&amp;returnUrl=%2F">English</a></li>
            </ul>
          </li>
        </ul>

        <form action="/Account/Logout" class="navbar-right" id="logoutForm" method="post"><input name="__RequestVerificationToken" type="hidden" value="YJiGSgASlQZJ4pDLpeGU7J-SF-pPTSyqj99N6d_7KN4eQ2E-6yQmti7_CXV9qdZnJuyW0EyfKSdvqXJLdGsJ7YMSmUnjQ6vOnwRfYagbZ5pcJ3bKFUda8frLxjUN8Fx7IWSTLrx8hxw52Ybc33A79w2">        <ul class="nav navbar-nav navbar-right">
          <li>


            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="font-size:18px;"><span class="text-success">王正宏</span><span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li>
                <a href="#" style="font-size:18px; pointer-events: none;" disabled="disabled"><span>選課身份</span></a>
              </li>
              <li class="divider"></li>



            </ul>

          </li>
          <li>
            <a href="javascript:document.getElementById('logoutForm').submit();" style="font-size:18px;"><span class="text-success">登出</span></a>
          </li>
        </ul>
        </form>
      </div>
    </div><!-- /.container-fluid -->

  </nav>
</template>

<script setup lang="ts">
  import { useNavbarStore } from "@/store/navbar";
  import { storeToRefs } from "pinia";
  const navbar = useNavbarStore();
  const { itemColor, brandColor } = storeToRefs(navbar);
</script>

<style scoped>
.text-success, .navbar-default .navbar-nav>li>a {
  color: v-bind(itemColor)!important;
}
.navbar-brand {
  color: v-bind(brandColor)!important;
}
</style>
