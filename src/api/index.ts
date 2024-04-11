import { Base64 } from 'js-base64';
let loginUrl = '/pages/begin/begin'
let noTokenUrl = ['/api/v1/login']
let isRefreshing = false
// 存储请求的数组
let refreshSubscribers: any[] = []
const toast = (msg: string): void => {
  setTimeout(() => {
    uni.showToast({
      title: msg,
      icon: 'none',
      duration: 3000
    });
  }, 200);
}
const toastLoading = (msg?:string):void => {
  uni.showLoading({
    title: '加载中',
  });
}
const toastHideLoading = (msg?:string):void => {
  uni.hideLoading();
}
 // 刷新token 注意这里用到的service
const getRefreshToken = async ()=> {
  let res = await RequestMethods.post(API_URl.REFRESH_TOKEN + '/auth-svc/refresh_token', uni.getStorageSync('refreshToken'))
  return res
}
const analysisToken = (token:string) => {
  token = token.replace('Bearer ', '')
  token = token.split('.')[1]
  var json = Base64.decode(token)
  return json
}
// 刷新token的过期时间判断
const isRefreshTokenExpired =  () =>{
  /* 从localStorage中取出token过期时间 */
  let expiredTime = uni.getStorageSync('tokenExpireTime')
      /* 获取本地时间 */
  let nowTime = Math.round(new Date().getTime() / 1000)
      /* 如果 < 10分钟，则说明即将过期 */
  return (expiredTime - nowTime) < 10 * 60
}
// 请求url是否校验token判断
const isTokenUrl =  (url: string | string[]):boolean =>{
  if (noTokenUrl.some((item) => url.includes(item))) {
    return false
  } else {
    return true
  }
}
// 数组中的请求得到新的token之后自执行，用新的token去请求数据
const onRrefreshed = (token:string) => {
  refreshSubscribers.map(cb => cb(token))
}
/* 将所有的请求都push到数组中 */
const subscribeTokenRefresh = (cb: (token: any) => void) => {
  refreshSubscribers.push(cb)
}
const reqInterceptors = (config:any,url:any) => {
	const authTk = uni.getStorageSync('token') // 本地保存的token
	const userCode = uni.getStorageSync('userCode') // 本地保存的userCode
  config.header['jtpf.userId'] = userCode
  config.header['userId'] = userCode
  config.header['jtpf.sysCode'] = 'sys_sequip_ei'
  config.header['clientType'] = '03'
        /* 判断token是否存在 */
    if (authTk && isTokenUrl(url)) {
        /* 在请求头中添加token类型、token */
        config.header.Authorization = authTk
            // config.url = config.url + '?t=' + (new Date()).getTime().toString() // 清楚缓存
            /* 判断token是否将要过期 */
        if (isRefreshTokenExpired()) {
            if (!isRefreshing) {
				      let urlString = ''
              isRefreshing = true
                  /* 发起刷新token的请求 */
              getRefreshToken().then(res => {
                urlString = res.url;
                isRefreshing = false
                uni.setStorageSync('token', res.access_token)
                var jsonObj = JSON.parse(analysisToken(res.access_token))
                uni.setStorageSync('tokenExpireTime', jsonObj.exp)
                // saveTimeStamp(new Date().getTime())
                /* 执行数组里的函数,重新发起被挂起的请求 */
                config.header.Authorization = res.access_token
                onRrefreshed(res.access_token)
                /* 执行onRefreshed函数后清空数组中保存的请求 */
                refreshSubscribers = []
              }).catch(errs => {
                  /* 清除本地保存的 */
                  uni.clearStorageSync()
                  // clearAllCache()
                  uni.navigateTo({
                    url: loginUrl,
                  });
                })
                  /* 把请求(token)=>{....}都push到一个数组中 */
                  // 不把刷新token的url加入到请求挂起中 如果加入，上面的刷新token将调用不了
                if (urlString && urlString.indexOf('refresh_token') === -1) {
                    let retry = new Promise((resolve, reject) => {
                        /* (token) => {...}这个函数就是回调函数 */
                        subscribeTokenRefresh((token) => {
                            // config.headers.common['Authorization'] = 'bearer ' + token;
                            config.header.Authorization = token
                                /* 将请求挂起 */
                            resolve(config)
                        })
                    })
                    return retry
                }
            }
            return config
        } else {
            return config
        }
    } else {
        return config
    }
    /* 未登录直接返回配置信息 */
    // return config
}
/**
 * 统一处理响应成功
 */
const successFunc = (res:any, callback:(result:result) => void) => {
  if(res.statusCode == 406){
    uni.removeStorageSync('token');
    uni.navigateTo({
      url: loginUrl,
      success: () => {
        toast('暂未登录或登录过期，请重新登录');
      }
    });
    return;
  } else if (res.statusCode !== 200) {
    toast('请求出错');
    return;
  }
  let result:result;
  if (typeof res.data === 'string') {
    result = JSON.parse(res.data as string);
  } else {
    result = res.data as result;
  }
  switch (result.code) {
    case 200:
    case '0000':
      callback && callback(result);
      break;
    default:
      callback && callback(result);
      toast(result.msg??'请求出错');
      break;
  }
}

export const requestFun = (
  method:'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT', 
  url:string,
  param:requestConfig,
  success?:(any: any) => void, 
  fail?:(any: any) => void, 
  complete?:(any: any) => void
) => {

  let headers = {
    "Accept":  "application/json,text/x-json,application/jsonrequest,text/json"
  }
  console.log(url,param.header,'param')
  if (param.header) {
    param.header = Object.assign(param.header, headers);
  } else {
    param.header = headers;
  }
  let reqInterceptorsFunction = reqInterceptors(param,url);
  param = Object.assign(param, reqInterceptorsFunction);
  if (param.formData) {
    param.header['content-type'] = 'application/x-www-form-urlencoded';
  }
  if (!param.dataType) param.dataType = 'JSON';
  if (!param.timeout) param.timeout = 120000;
  if (!success && !fail && !complete) {
    toastLoading()
    return new Promise((resolve:(value:any) => void, reject) => {
      uni.request({
        method: method,
        url: url,
        ...param,
        success: res => {
          successFunc(res, (result:result) => resolve(result));
        },
        fail: res => {
          toast('请求出错');
          reject(res);
        },
        complete(){
          toastHideLoading()
        },
      });
    });
  } else {    
    return uni.request({
      method: method,
      url: url,
      ...param,
      success: res => {
        successFunc(res, (result:result) => success && success(result));
      },
      fail: res => {
        toast('请求出错');
        fail && fail(res);
      },
      complete: res => {
        complete && complete(res);
      }
    });
  }

}