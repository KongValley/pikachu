'use strict'
/*
 * @Author: Chara
 * @Date: 2019-05-20
 * @LastEditors: Chara
 * @LastEditTime: 2019-08-09 13:03:00
 * @Description: 
 */
!function(){
    let duration = 10
    $('.buttonList').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 80
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    function writeCode(prefix,code,fn){
        let domCode = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        domCode.innerHTML = prefix || ''
        let n = 0
        let timer = setTimeout(function run(){
            n = n+1
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css)
            domCode.scrollTop = domCode.scrollHeight
            styleTag.innerHTML = prefix + code.substring(0,n)
            if(n < code.length){
                timer = setTimeout(run,duration)
            }
        },duration)
    }
    
    let code = `
    /*
    * 首先，需要准备皮卡丘的画板
    */
   .preview {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fee433;
    }
    .wrapper {
      width: 100%;
      height: 170px;
      position: relative;
    }
    /*
      * 接下来，画皮卡丘的鼻子
      */
    .nose {
      width: 0px;
      height: 0px;
      border: 12px solid;
      border-color: black transparent transparent;
      border-radius: 12px;
      position: absolute;
      left: 50%;
      top: 28px;
      margin-left: -12px;
    }
    /*
      * 接下来，画皮卡丘的两只眼睛
      */
    .eye {
      width: 49px;
      height: 49px;
      background-color: #2e2e2e;
      position: absolute;
      border-radius: 50%;
      border: 2px solid #000;
    }
    /*
      * 加眼珠子
      */
    .eye::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background: #fff;
      position: absolute;
      border-radius: 50%;
      left: 6px;
      top: -1px;
      border: 2px solid #000;
    }
    /*
      * 左眼
      */
    .eye.left {
      right: 50%;
      margin-right: 90px;
    }
    /*
      * 右眼
      */
    .eye.right {
      left: 50%;
      margin-left: 90px;
    }
    /*
      * 然后，画皮卡丘的脸
      */
    .face {
      width: 68px;
      height: 68px;
      background-color: #fc0d1c;
      position: absolute;
      border-radius: 50%;
      border: 2px solid black;
      top: 85px;
    }
    /*
      * 左边的红晕
      */
    .face.left {
      right: 50%;
      margin-right: 116px;
    }
    /*
      * 右边的红晕
      */
    .face.right {
      left: 50%;
      margin-left: 116px;
    }
    /*
      * 上嘴唇
      */
    .upperLip {
      position: absolute;
      height: 25px;
      width: 80px;
      border: 2px solid black;
      border-top: none;
      top: 46px;
      background-color: #fee433;
    }
    .upperLip.left {
      overflow: hidden;
      border-right: none;
      background-color: #fee433;
      border-bottom-left-radius: 100px 60px;
      transform: rotate(-20deg) translateZ(0);
      right: 50%;
    }
    .upperLip.right {
      overflow: hidden;
      border-left: none;
      border-bottom-right-radius: 100px 60px;
      transform: rotate(20deg) translateZ(0);
      left: 50%;
    }
    /*
      * 下嘴唇
      */
    .lowerLip-wrapper {
      position: absolute;
      left: 50%;
      margin-left: -150px;
      bottom: 0;
      height: 115px;
      width: 300px;
      overflow: hidden;
    }
    .lowerLip {
      position: absolute;
      bottom: 0;
      right: 50%;
      margin-right: -100px;
      width: 200px;
      height: 1000px;
      background: #9b000a;
      border-radius: 100px/500px;
      border: 2px solid black;
      overflow: hidden;
    }
    /*
      * 小舌头
      */
    .lowerLip::after {
      content: '';
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #ff485f;
      position: absolute;
      bottom: -15px;
      right: 50%;
      margin-right: -50px;
    }
    /*
    * ok，皮卡丘画好惹
    * 妹妹，您满意不？
    */
`
    writeCode('',code)
}.call()
