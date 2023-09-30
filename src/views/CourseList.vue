<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <br />
    <br />
    <br />
    <div class="container">

      <div class="row">



        <!-- 第一組清單   -->





        <div class="col-md-12" style="text-align:right">
          <span style="font-size: medium">選課清單 >> 選課清單</span>

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
              </tr>

              <tr>
                <td style="text-align:center">2</td>
                <td style="text-align:center">
                  9:10～<br>
                  10:00
                </td>
              </tr>
              <tr>
                <td style="text-align:center">3</td>
                <td style="text-align:center">
                  10:20～
                  11:10
                </td>
              </tr>
              <tr>
                <td style="text-align:center">4</td>
                <td style="text-align:center">11:20～
                  12:10</td>
              </tr>
              <tr>
                <td style="text-align:center">5</td>
                <td style="text-align:center">
                  12:20～
                  13:10
                </td>
              </tr>
              <tr>
                <td style="text-align:center">6</td>
                <td style="text-align:center">
                  13:20～
                  14:10
                </td>
              </tr>
              <tr>
                <td style="text-align:center">7</td>
                <td style="text-align:center">
                  14:20～
                  15:10
                </td>
              </tr>
              <tr>
                <td style="text-align:center">8</td>
                <td style="text-align:center">
                  15:30～
                  16:20
                </td>
              </tr>
              <tr>
                <td style="text-align:center">9</td>
                <td style="text-align:center">
                  16:30～
                  17:20
                </td>
              </tr>
              <tr>
                <td style="text-align:center">10</td>
                <td style="text-align:center">
                  17:30～
                  18:20
                </td>
              </tr>
              <tr>
                <td style="text-align:center">A</td>
                <td style="text-align:center">
                  18:25～
                  19:15
                </td>
              </tr>
              <tr>
                <td style="text-align:center">B</td>
                <td style="text-align:center">
                  19:20～
                  20:10
                </td>
              </tr>
              <tr>
                <td style="text-align:center">C</td>
                <td style="text-align:center">
                  20:15～
                  21:05
                </td>
              </tr>
              <tr>
                <td style="text-align:center">D</td>
                <td style="text-align:center">
                  21:10～
                  22:00
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
                    <p><br></p>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <br />
        <div id="PrintArea">
          <div class="row">
            <div class="col-md-offset-0 col-md-2 col-md-offset-10 label-warning" style="border-radius: 10px; text-align:center">
              <span style="color: white">選課清單</span>
            </div>
          </div>


          <div class="modal-body">
            <div style="color:red">
              總學分數:
              28        </div>
            <table style="width: 100%" border="1">
              <tr>
                <td align="center">課碼</td>
                <td align="center">課程名稱</td>
                <td align="center">學分數</td>
                <td align="center">必、選修</td>
                <td align="center">上課教師</td>
                <td align="center">備註</td>
              </tr>
              <tr>
                <td>CS1006302</td>
                <td>
                  線性代數
                </td>
                <td>3</td>
                <td>
                  <span>必修</span>
                </td>
                <td>周詩梵                           </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>CS2001301</td>
                <td>
                  工程數學
                </td>
                <td>3</td>
                <td>
                  <span>必修</span>
                </td>
                <td>Binayak Kar                   </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>CS2006301</td>
                <td>
                  計算機組織
                </td>
                <td>3</td>
                <td>
                  <span>必修</span>
                </td>
                <td>劉一宇                           </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>CS2008301</td>
                <td>
                  機率與統計
                </td>
                <td>3</td>
                <td>
                  <span>必修</span>
                </td>
                <td>沈上翔                           </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>CS3001302</td>
                <td>
                  演算法
                </td>
                <td>3</td>
                <td>
                  <span>必修</span>
                </td>
                <td>王紹睿                           </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>CS3007701</td>
                <td>
                  多媒體資訊系統導論
                </td>
                <td>3</td>
                <td>
                  <span>選修</span>
                </td>
                <td>花凱龍                           </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>CS4003701</td>
                <td>
                  資訊安全導論
                </td>
                <td>3</td>
                <td>
                  <span>選修</span>
                </td>
                <td>王紹睿                           </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>FE2031703</td>
                <td>
                  體育英文
                </td>
                <td>2</td>
                <td>
                  <span>選修</span>
                </td>
                <td>方博杰                           </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>MBG214301</td>
                <td>
                  傳播技能
                </td>
                <td>3</td>
                <td>
                  <span>必修</span>
                </td>
                <td>胡家紋                           </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>PE115B022</td>
                <td>
                  體育(排球)(下)
                </td>
                <td>0</td>
                <td>
                  <span>必修</span>
                </td>
                <td>周宗豪                           </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>TCG099301</td>
                <td>
                  影像記事中的近代兩岸
                </td>
                <td>2</td>
                <td>
                  <span>必修</span>
                </td>
                <td>管美蓉                           </td>
                <td>
                </td>
              </tr>
            </table>
          </div>

          <hr />

          <div class="row">
            <div class="col-md-offset-0 col-md-2 col-md-offset-10 label-warning" style="border-radius: 10px; text-align:center">
              <span style="color: white">功課表</span>
            </div>
          </div>
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
                演算法<br>
                TR-412-1            <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                計算機組織<br>
                TR-409-2            <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                線性代數<br>
                TR-313              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
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
                線性代數<br>
                TR-310-1            <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                計算機組織<br>
                TR-313              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                演算法<br>
                TR-409-2            <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
              </td>
              <td>
                機率與統計<br>
                TR-313              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td style="text-align:center">4</td>
              <td style="text-align:center">
                11:20～
                12:10
              </td>
              <td>
                線性代數<br>
                TR-310-1            <br>
                <span style = "background-color:Red;color:white" >  </span>
                <br>
              </td>
              <td>
                計算機組織<br>
                TR-313              <br>
                <span style = "background-color:Red;color:white" >  </span>
                <br>
              </td>
              <td>
                演算法<br>
                TR-409-2            <br>
                <span style = "background-color:Red;color:white" >  </span>
                <br>
              </td>
              <td>
              </td>
              <td>
                機率與統計<br>
                TR-313              <br>
                <span style = "background-color:Red;color:white" >  </span>
                <br>
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
                多媒體資訊系統導論<br>
                TR-309              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
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
                工程數學<br>
                TR-313              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                體育(排球)(下)<br>
                <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
              </td>
              <td>
                資訊安全導論<br>
                TR-309              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                多媒體資訊系統導論<br>
                TR-309              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
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
                工程數學<br>
                TR-313              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                體育(排球)(下)<br>
                <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                機率與統計<br>
                TR-313              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                資訊安全導論<br>
                TR-309              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                多媒體資訊系統導論<br>
                TR-309              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
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
                體育英文<br>
                TR-409-1            <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
                資訊安全導論<br>
                TR-309              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                傳播技能<br>
                TR-213              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
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
                體育英文<br>
                TR-409-1            <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                影像記事中的近代兩岸<br>
                TR-413-1            <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
                傳播技能<br>
                TR-213              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
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
                影像記事中的近代兩岸<br>
                TR-413-1            <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
                工程數學<br>
                TR-313              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
              </td>
              <td>
              </td>
              <td>
                傳播技能<br>
                TR-213              <br>
                <span style="background-color:Red;color:white"></span>
                <br>
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
        <br />
        <input id="Print" type="button" onclick="onprint()" value=列印 class="btn-lg btn-success" />&nbsp;<input id="EMail" type="button" value=郵寄 class="btn-lg btn-success" />


      </div>
    </div>
  </div>
  <div id="loading" style="display:none;
    position:   fixed;
    z-index:    1000;
    top:        0;
    left:       0;
    height:     100%;
    width:      100%;
    background: rgba( 255, 255, 255, .8 )
                50% 50%
                no-repeat;">
  </div>
</template>

<style scoped lang="stylus">

</style>
