# jfocus
JQuery 插件封装（轮播图）
``` bash
用法：
//轮播图

【滑动】
  -------------------
  html:
  -------------------
  <div class="focus">
    <ul>
      <li><a href="" title="" target="_blank" style="background:url('') no-repeat center center transparent"></a></li>
      <li><a href="" title="" target="_blank" style="background:url('') no-repeat center center transparent"></a></li>
      <li><a href="" title="" target="_blank" style="background:url('') no-repeat center center transparent"></a></li>
    </ul>
  </div>
  -------------------
  js:
  -------------------
  $(".focus").jfocus({"effectType":"slider"});

  -------------------
  css:
  --------------------
  .focus {width: 780px;height: 300px;position: relative;overflow: hidden;margin-bottom:10px;}
  .focus ul {width:55555px;height: 300px;position: absolute;z-index: 1;}
  .focus ul li {width: 780px;height: 300px;overflow: hidden;float: left;}
  .focus ul li a{display: block;width: 780px;height: 300px;}
  .focus img {width: 780px;height: 300px;}
  .focus .pagination {font-size: 0;*word-spacing: -1px;text-align: center;width: 300px;height: 6px;padding: 7px 10px;position:absolute;z-index: 3;left: 50%;margin-left:-150px;bottom: 5px;}
  .focus .pagination span {background: #ccc;vertical-align: top;letter-spacing: normal;word-spacing: normal;display: inline-block;*display: inline;list-style: none;width: 20px;height: 20px;margin-left: 4px;cursor: pointer;}
  .focus .pagination span.on {background: #000;}

  =====================================================
  【淡入淡出】
  -------------------
  html
  -------------------
  <div class="focus-fadeIn">
    <ul>
      <li><a href="" title="" target="_blank"> <img src="" alt=""></a></li>
      <li><a href="" title="" target="_blank"> <img src="" alt=""></a></li>
      <li><a href="" title="" target="_blank"> <img src="" alt=""></a></li>
      <li><a href="" title="" target="_blank"> <img src="" alt=""></a></li>
    </ul>
  </div>
  -------------------
  js
  -------------------
  $(".focus-fadeIn").jfocus({"effectType":"fadeinout"});

  -------------------
  css:
  --------------------
  .focus-fadeIn {width:100%;height: 530px;position: relative;overflow: hidden;}
  .focus-fadeIn ul {width:100%;height: 530px;z-index: 1;}
  .focus-fadeIn ul li {width:100%;height: 530px;overflow: hidden;float: left;position: absolute;left:0px;top:0px;}
  .focus-fadeIn ul li a{display:block;width:100%;height: 530px;}
  .focus-fadeIn img {width:100%;height: 530px;}
  .focus-fadeIn .pagination {font-size: 0;*word-spacing: -1px;text-align: center;width: 300px;height: 6px;padding: 7px 10px;position: absolute;z-index: 3;left: 50%;margin-left:-150px;bottom: 15px;}
  .focus-fadeIn .pagination span {background: #343434;vertical-align: top;letter-spacing: normal;word-spacing: normal;display: inline-block;*display: inline;list-style: none;width: 60px;height: 15px;margin-left: 4px;cursor: pointer;}
  .focus-fadeIn .pagination span.on {background: #4e4e4e;}
```
