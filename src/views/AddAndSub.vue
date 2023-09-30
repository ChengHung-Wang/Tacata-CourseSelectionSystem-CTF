<template>
  <div class="profile-tabs">

  <div class="wrapper">
    <br />
    <br />
    <br />
    <div class="container">

      <div class="row">



        <!-- 第一組清單   -->





        <div class="col-md-12" style="text-align:right">
          <span style="font-size: medium">加退選課 >> 加退選課</span>

        </div>
      </div>
    </div>

  </div>

  <div>
    <div class="modal fade" tabindex="-1" id="loginModal" data-keyboard="false" data-backdrop="static">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <h4 class="modal-title">功課表</h4>
          </div>
          <div class="modal-body">
            <table style="width: 100%" border="1">
              <tr>
                <td align="center">節次</td>
                <td align="center">時間</td>
                <td align="center">星期一</td>
                <td align="center">星期二</td>
                <td align="center">星期三</td>
                <td align="center">星期四</td>
                <td align="center">星期五</td>
                <td align="center">星期六</td>
                <td align="center">星期日</td>
              </tr>

              <tr>
                <td style="text-align:center">1</td>
                <td style="text-align:center;width:6%">
                  08:10～<br>
                  09:00
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>

              <tr>
                <td style="text-align:center">2</td>
                <td style="text-align:center">
                  9:10～<br>
                  10:00
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">3</td>
                <td style="text-align:center">
                  10:20～
                  11:10
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">4</td>
                <td style="text-align:center">11:20～
                  12:10</td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">5</td>
                <td style="text-align:center">
                  12:20～
                  13:10
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">6</td>
                <td style="text-align:center">
                  13:20～
                  14:10
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">7</td>
                <td style="text-align:center">
                  14:20～
                  15:10
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">8</td>
                <td style="text-align:center">
                  15:30～
                  16:20
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">9</td>
                <td style="text-align:center">
                  16:30～
                  17:20
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">10</td>
                <td style="text-align:center">
                  17:30～
                  18:20
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">A</td>
                <td style="text-align:center">
                  18:25～
                  19:15
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">B</td>
                <td style="text-align:center">
                  19:20～
                  20:10
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">C</td>
                <td style="text-align:center">
                  20:15～
                  21:05
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td style="text-align:center">D</td>
                <td style="text-align:center">
                  21:10～
                  22:00
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>

            </table>
          </div>
          <div class="modal-footer">
            <button type="button" id="btnHideModal" class="btn-lg btn-success">關閉</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" tabindex="-1" id="loginModal2" data-keyboard="false" data-backdrop="static">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <h4 class="modal-title">選課清單</h4>
          </div>
          <div class="modal-body">
            <div style="color:red">
              總學分數:
            </div>
            <table style="width: 100%" border="1">
              <tr>
                <td align="center">課碼</td>
                <td align="center">課程名稱</td>
                <td align="center">學分數</td>
                <td align="center">必、選修</td>
                <td align="center">上課教師</td>
              </tr>
            </table>
          </div>

          <div class="modal-footer">
            <button type="button" id="btnHideModal2" class="btn-lg btn-success">關閉</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
  <div class="main main-raised">
    <div class="section">
      <div class="container" id="Main">
        <div class="row">
          <div class="col-md-offset-2 col-md-8 col-md-offset-2">
            <div class="panel panel-default">
              <div class="header" style="cursor: pointer">
                <span>訊息公告(點選可展開、收合)</span>
              </div>

              <div class="panel-body">
                <div>
                  <ul>
                    <p>※有人數設限之課程在本階段選課先選先上，至額滿為止</p><p>※研究生得選修大學部所開課程，其所修習之大學部課程學分與成績原則上不
                    計入第一項學業成績計算，其學分數，亦不列入畢業學分，且需另繳學分費。<br></p>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <br />

        課碼：<input name="CourseText" type="text" maxlength="9" />
        <input id="SingleAdd" type="button" value="加選" class="btn-sm btn-success" />
        <br />
        <br />

        <div class="row">
          <div class="col-md-offset-0 col-md-2 col-md-offset-10 label-warning" style="border-radius: 10px; text-align:center">
            <span style="color: white">待選清單</span>
          </div>
        </div>

        <form action="/AddAndSub/A01/A01?enctype=multipart%2Fform-data" method="post">    <Div class="box" id="a1">
          <div class="table" id="draggable">
            <div class="table-row">
              <div class="table-cell">
                課碼
              </div>
              <div class="table-cell">
                課程名稱
              </div>
              <div class="table-cell">
                上課教師
              </div>
              <div class="table-cell">
                加選
              </div>
            </div>

            <div class="table-row">
              <div class="table-cell">
                AT3003301
              </div>
              <div class="table-cell">
                技能競賽專題 (一)
              </div>
              <div class="table-cell">

              </div>
              <div class="table-cell">
                <span class="addbtn btn btn-xs btn-warning">加選</span>
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell">
                CS2001301
              </div>
              <div class="table-cell">
                工程數學
              </div>
              <div class="table-cell">
                Binayak Kar
              </div>
              <div class="table-cell">
                <span class="addbtn btn btn-xs btn-warning">加選</span>
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell">
                CS2901701
              </div>
              <div class="table-cell">
                多媒體實習
              </div>
              <div class="table-cell">
                花凱龍
              </div>
              <div class="table-cell">
                <span class="addbtn btn btn-xs btn-warning">加選</span>
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell">
                TCG101301
              </div>
              <div class="table-cell">
                時間管理
              </div>
              <div class="table-cell">
                王淑俐
              </div>
              <div class="table-cell">
                <span class="addbtn btn btn-xs btn-warning">加選</span>
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell">
                TCG118301
              </div>
              <div class="table-cell">
                性別、關係與個人發展
              </div>
              <div class="table-cell">
                黃淑怡
              </div>
              <div class="table-cell">
                <span class="addbtn btn btn-xs btn-warning">加選</span>
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell">
                TCG121301
              </div>
              <div class="table-cell">
                永續發展與社會(二)
              </div>
              <div class="table-cell">
                黃淑怡
              </div>
              <div class="table-cell">
                <span class="addbtn btn btn-xs btn-warning">加選</span>
              </div>
            </div>

          </div>

        </div>
        </form>
        <hr />





        <div class="row">
          <div class="col-md-offset-0 col-md-2 col-md-offset-10 label-warning" style="border-radius: 10px; text-align:center">
            <span style="color: white">選課清單</span>
          </div>
        </div>
<!--        <script src='/Scripts/jquery-ui.min.js'></script>-->
<!--        <script src="/Scripts/jquery.ui.touch-punch.min.js"></script>-->

        <br>
        <table id="cartTable" style="width:70%">
          <thead>
          <tr>
            <td style="border: 1px solid;text-align:center">
              課碼
            </td>
            <td style="border: 1px solid;text-align:center">
              課程名稱
            </td>
            <td style="border: 1px solid;text-align:center">
              退選
            </td>

          </tr>
          </thead>
          <tbody>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              CS1006302
            </td>
            <td>
              線性代數
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              CS2001301
            </td>
            <td>
              工程數學
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              CS2006301
            </td>
            <td>
              計算機組織
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              CS2008301
            </td>
            <td>
              機率與統計
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              CS3001302
            </td>
            <td>
              演算法
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              CS3007701
            </td>
            <td>
              多媒體資訊系統導論
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              CS4003701
            </td>
            <td>
              資訊安全導論
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              FE2031703
            </td>
            <td>
              體育英文
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              MBG214301
            </td>
            <td>
              傳播技能
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              PE115B022
            </td>
            <td>
              體育(排球)(下)
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          <tr class="data" style="border: 1px solid;text-align:center">
            <td style="border: 1px solid;text-align:center">
              TCG099301
            </td>
            <td>
              影像記事中的近代兩岸
            </td>
            <td style="border: 1px solid;text-align:center">
              <span class="delbtn btn btn-xs btn-warning" style="vertical-align: middle">退選</span>
            </td>
          </tr>
          </tbody>
        </table>


        <button id="btnShowModal" type="button" class="btn-sm btn-success">功課表</button>
        <button id="btnShowModal2" type="button" class="btn-sm btn-success">選課清單</button>


      </div>
    </div>
  </div>
</div>

</template>
<script setup lang="ts">
</script>
