## 浏览器

### 1.实现全屏

当你需要将当前屏幕显示为全屏时

```JavaScript
function fullScreen() {
    const el = document.documentElement
    const rfs =
    el.requestFullScreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullscreen
    if(typeof rfs != "undefined" && rfs) {
        rfs.call(el)
    }
}
fullScreen()
```

### 2.退出全屏

当你需要退出全屏时

```JavaScript
function exitScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    }
    else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
    }
    else if (document.msExitFullscreen) {
        document.msExitFullscreen()
    }
    if(typeof cfs != "undefined" && cfs) {
        cfs.call(el)
    }
}
exitScreen()
```

### 3.页面打印

当您需要打印当前页面时

```JavaScript
window.print()
```

### 4.打印内容样式改变

当需要打印出当前页面，但又需要修改当前布局时

```css
<style>
/* Use @media print to adjust the print style you need */
@media print {
    .noprint {
        display: none;
    }
}
</style>
<div class="print">print</div>
<div class="noprint">noprint</div>
```

### 5.阻止关闭事件

当需要阻止用户刷新或关闭浏览器时，可以选择触发 beforeunload 事件，部分浏览器无法自定义文本内容。

```JavaScript
window.onbeforeunload = function(){
    return 'Are you sure you want to leave the haorooms blog？';
};
```

### 6.屏幕录制

当您需要录制当前屏幕并上传或下载屏幕录像时

```JavaScript
const streamPromise = navigator.mediaDevices.getDisplayMedia()
streamPromise.then(stream => {
    var recordedChunks = [];// recorded video data
var options = { mimeType: "video/webm; codecs=vp9" };// Set the encoding format
    var mediaRecorder = new MediaRecorder(stream, options);// Initialize the MediaRecorder instance
    mediaRecorder.ondataavailable = handleDataAvailable;// Set the callback when data is available (end of screen recording)
    mediaRecorder.start();
    // Video Fragmentation
    function handleDataAvailable(event) {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);// Add data, event.data is a BLOB object
            download();// Encapsulate into a BLOB object and download
        }
    }
// file download
    function download() {
        var blob = new Blob(recordedChunks, {
            type: "video/webm"
        });
        // Videos can be uploaded to the backend here
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "test.webm";
        a.click();
        window.URL.revokeObjectURL(url);
    }
})
```

### 7.判断横竖屏

当你需要判断手机横屏或竖屏状态时

```JavaScript
function hengshuping(){
    if(window.orientation==180||window.orientation==0){
        alert("Portrait state！")
    }
    if(window.orientation==90||window.orientation==-90){
        alert("Landscape state！")
    }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
```

### 9.标签页隐藏

当你需要监听标签显示和隐藏的事件时

```JavaScript
const {hidden, visibilityChange} = (() => {
    let hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
      // Opera 12.10 and Firefox 18 and later support
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
    return {
      hidden,
      visibilityChange
    }
})();

const handleVisibilityChange = () => {
    console.log("currently hidden", document[hidden]);
};
document.addEventListener(
    visibilityChange,
    handleVisibilityChange,
    false
);
```

## 图片

### 10.本地图片预览

当你从客户端获取图片但不能立即上传到服务器，需要预览时

```Javascript
<div class="test">
    <input type="file" name="" id="">
    <img src="" alt="">
</div>
<script>
const getObjectURL = (file) => {
    let url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // webkit or chrome
        url = window.URL.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    }
    return url;
}
document.querySelector('input').addEventListener('change', (event) => {
    document.querySelector('img').src = getObjectURL(event.target.files[0])
})
</script>
```

### 11.图片预加载

当你有很多图片时，你需要预加载图片以避免白屏

```Javascript
const images = []
function preloader(args) {
    for (let i = 0, len = args.length; i < len; i++) {
        images[i] = new Image()
        images[i].src = args[i]
    }
}
preloader(['1.png', '2.jpg'])
```

## JavaScript

### 12.字符串脚本

当需要将一串字符串转成 js 脚本时，该方法存在 xss 漏洞，慎用

```Javascript
const obj = eval('({ name: "jack" })')
// obj will be converted to object{ name: "jack" }
const v = eval('obj')
// v will become the variable obj
```

### 13.递归函数名解耦

当你需要写一个递归函数时，你声明了一个函数名，但是每次修改函数名时，你总是忘记修改内部函数名。argument 是函数的内部对象，包括传入函数的所有参数，arguments.callee 代表函数名。

```Javascript
// This is a basic Fibonacci sequence
function fibonacci (n) {
    const fn = arguments.callee
    if (n <= 1) return 1
    return fn(n - 1) + fn(n - 2)
}
```

## DOM 元素

### 14.隐性判断

当需要判断一个 dom 元素当前是否出现在 page view 中时，可以尝试使用 IntersectionObserver 来判断。

```html
<style>
.item {
    height: 350px;
}
</style>

<div class="container">
  <div class="item" data-id="1">Invisible</div>
  <div class="item" data-id="2">Invisible</div>
  <div class="item" data-id="3">Invisible</div>
</div>
<script>
  if (window?.IntersectionObserver) {
    let items = [...document.getElementsByClassName("item")]; // parses as a true array, also available Array.prototype.slice.call()
let io = new IntersectionObserver(
      (entries) => {
        entries.forEach((item) => {
          item.target.innerHTML =
            item.intersectionRatio === 1 // The display ratio of the element, when it is 1, it is completely visible, and when it is 0, it is completely invisible
              ? `Element is fully visible`
              : `Element is partially invisible`;
        });
      },
      {
        root: null,
        rootMargin: "0px 0px",
        threshold: 1, // The threshold is set to 1, and the callback function is triggered only when the ratio reaches 1
      }
    );
    items.forEach((item) => io.observe(item));
  }
</script>
```

### 15.元素可编辑

当你需要编辑一个 dom 元素时，让它像 textarea 一样点击

```html
<div contenteditable="true">here can be edited</div>
```

### 16.元素属性监控

```javascript
<div id="test">test</div>
<button onclick="handleClick()">OK</button>

<script>
  const el = document.getElementById("test");
  let n = 1;
  const observe = new MutationObserver((mutations) => {
    console.log("attribute is changede", mutations);
  })
  observe.observe(el, {
    attributes: true
  });
  function handleClick() {
    el.setAttribute("style", "color: red");
    el.setAttribute("data-name", n++);
  }
  setTimeout(() => {
    observe.disconnect(); // stop watch
  }, 5000);
</script>
```

### 17.打印 dom 元素

在开发过程中需要打印 dom 元素时，使用 console.log 往往只能打印出整个 dom 元素，无法查看 dom 元素的内部属性。您可以尝试使用 console.dir

```Javascript
console.dir(document.body)
```

## 其他

### 18.激活应用

当你在移动端开发时，你需要打开其他应用程序。location.href 赋值也可以操作以下方法。

```html
<a href="tel:12345678910">phone</a>
<a href="sms:12345678910,12345678911?body=hello">android message</a>
<a href="sms:/open?addresses=12345678910,12345678911&body=hello">ios message</a>
<a href="wx://">ios message</a>
```

总结

以上就是今天与你分享的 18 个 JavaScript 技巧。
