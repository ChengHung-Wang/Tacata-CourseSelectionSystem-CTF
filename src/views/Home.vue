<template>
  <div class="row" style="margin-top: 70px;">
    <div class="col-md-offset-2 col-md-8 col-md-offset-2 panel panel-default">
      <h3>公告訊息</h3>
      <div>
        <ul>
          <p>※<a href="https://academic.ntust.edu.tw/var/file/48/1048/img/2570/736173803.pdf" target="_blank" style="background-color: rgb(255, 255, 255);">112 學年度第 1 學期選課作業時程表</a><br></p><p>※<a href="https://www.academic.ntust.edu.tw/var/file/48/1048/img/2563/627618988.pdf" target="_blank">選課系統操作手冊</a>&nbsp;/ <span style="background-color: rgb(255, 255, 255);"><a href="https://www.academic.ntust.edu.tw/var/file/48/1048/img/2563/234745917.mp4" target="_blank">選課系統操作影片</a></span></p><p>※<a href="https://www.academic.ntust.edu.tw/var/file/48/1048/img/2563/544158721.ppsx" target="_blank">志願序抽選規則（P.6 ~ P.9）</a></p><p><span style="color: rgb(255, 0, 0); font-size: 18px;">※</span><span style="color: rgb(255, 0, 0); font-size: 18px;">提醒！於「<a href="https://querycourse.ntust.edu.tw/querycourse/" target="_blank">課程查詢系統</a>」加入「待選清單」並非已經完成選課！請於</span><span style="color: rgb(255, 0, 0); font-size: 18px;">「<a href="https://courseselection.ntust.edu.tw/" target="_blank">選課系統</a>」</span><span style="color: rgb(255, 0, 0); font-size: 18px;">開放時間進入</span><font color="#ff0000"><span style="font-size: 18px;">將待選清單之課程，加入登記志願清單，才算完成初選志願序登記！</span></font></p><p><font color="#ff0000"><span style="font-size: 18px;">※本校嚴禁使用機器人程式搶課，如經查獲（人工不合理的加選行為），將封鎖該生24小時內不得進入選課系統。</span><br></font></p>
        </ul>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
