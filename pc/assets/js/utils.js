/**
 * 封装一个操作cookie的对象
 */
export const CookieUtil = {
  get() {
    let cookieName = encodeURIComponent(name) + '='
    let cookieStart = document.cookie.indexOf(cookieName)
    let cookieValue = null
    if (cookieStart > 0) {
      let cookieEnd = document.cookie.indexOf(';', cookieStart)
      if (cookieEnd === -1) {
        cookieEnd = document.cookie.length
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
    }
    return cookieValue
  },
  set(name, value, expire, path, domain, secure) {
    let cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value)
    if (expire instanceof Date) {
      cookieText += '; expires=' + expire.toGMTString()
    }
    if (path) {
      cookieText += '; path=' + path
    }
    if (domain) {
      cookieText += '; domain=' + domain
    }
    if (secure) {
      cookieText += '; secure'
    }
    document.cookie = cookieText
  },
  unset(name, path, domain, secure) {
    this.set(name, '', new Date(0), domain, secure)
  }
}

/**
 * 格式化获取传入的url的参数
 * @param {*} url 传入的url
 */
export function formatParam(url) {
  let paramObj = {}
  let oldUrl = url || window.location.href
  let pos = oldUrl.indexOf('?')
  paramObj['newUrl'] = oldUrl.substring(0, pos)
  if (pos > 0) {
    let paramArr = oldUrl.substr(pos + 1).split('&') // 取得所有参数并用'&'分隔成数组
    for (let i = 0; i < paramArr.length; i++) {
      let p = paramArr[i].indexOf('=')
      if (p > 0) {
        paramObj[paramArr[i].substring(0, p)] = paramArr[i].substr(p + 1) // 将所有参数存入对象中
      }
    }
  }
  return paramObj
}

/**
 * 判断访问的终端
 */
export const Browser = {
  getVersion() {
    let u = navigator.userAgent
    // let app = navigator.appVersion
    return {
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebgetLanguageKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
      qq: u.match(/\sQQ/i) === ' qq' // 是否QQ
    }
  },
  getLanguage
}

export function getLanguage() {
  return (navigator.browserLanguage || navigator.language).toLowerCase()
}

/**
 * 去除字符串首尾两端的空格
 * @param {*} str
 */
export function trimStr(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * DOM元素类的操作
 */
export const ElementClass = {
  hasClass(elements, cName) {
    return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'))
  },
  addClass(elements, cName) {
    if (!this.hasClass(elements, cName)) {
      elements.className += ' ' + cName
    }
  },
  removeClass(elements, cName) {
    if (this.hasClass(elements, cName)) {
      elements.className = elements.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), '')
    }
  }
}
