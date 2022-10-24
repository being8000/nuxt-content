


export default defineNuxtPlugin((nuxtApp) => {
  const easeInOutQuad = function(t, b, c, d) {
    t /= d / 2
    if (t < 1) {
      return c / 2 * t * t + b
    }
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }

  const route = useRoute()
  var requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) }
  })()
  
  /**
   * @date July 2020
   * Because it's so fucking difficult to detect the scrolling element, just move them all
   * @param {number} amount
   */
   function move(amount) {
    document.documentElement.scrollTop = amount
    document.body.parentNode.scrollTop = amount
    document.body.scrollTop = amount
  }
  
  function position() {
    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
  }
  
  function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result
  
    const later = function() {
      // 据上一次触发时间间隔
      const last = +new Date() - timestamp
      // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last)
      } else {
        timeout = null
        // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
        if (!immediate) {
          result = func.apply(context, args)
          if (!timeout) context = args = null
        }
      }
    }
  }
  
  
  return {
    provide: {
      scrollTo(to, duration, callback) {
        const start = position()
        const change = to - start
        const increment = 20
        let currentTime = 0
        duration = (typeof (duration) === 'undefined') ? 500 : duration
        var animateScroll = function() {
          currentTime += increment
          var val = easeInOutQuad(currentTime, start, change, duration)
          move(val)
          if (currentTime < duration) {
            requestAnimFrame(animateScroll)
          } else {
            if (callback && typeof (callback) === 'function') {
              callback()
            }
          }
        }
        animateScroll()
      },
      position,
      debounce
    },
     
  }
})