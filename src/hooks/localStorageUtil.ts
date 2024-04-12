interface Storage {
    [key: string | number]: string |number | boolean| Array<Object>;  //动态添加属性
}
const getLocalStorage = (...args: any[]) => {
    let storage:Storage = {}
    for (let arg of args) {
      storage[arg] = uni.getStorageSync(arg) || ''
    }
    return storage
  }
  
  const setLocalStorage = (data: { [x: string]: any }) => {
    for (let prop in data) {
      uni.setStorageSync(prop, data[prop])
    }
  }
  
  const removeLocalStorage = (...args: any[]) => {
    for (let arg of args) {
      uni.removeStorageSync(arg)
    }
  }
  const getLocationParam = function (name: string) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    }
    return ''
  }
  export {
    getLocalStorage,
    setLocalStorage,
    removeLocalStorage,
    getLocationParam
  }
  