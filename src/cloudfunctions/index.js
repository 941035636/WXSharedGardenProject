// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.name)
  
  // 发送好友申请
  if (event.function_name == "request") {
    try {
      console.log(event._id)
      return await db.collection(event.name).where({
        _openid:event._id
      }).update({
        data: {
          request: _.push(
          event.user_about
          )
        }
      })
    } catch (e) {
      console.error(e)
    }
  }
  // 追加聊天信息
  else if (event.function_name == "addtext") {

    try {
      return await db.collection(event.name).where({
        key: event.key
      }).update({
        data: {
          content: _.push(
            {
              openid: event.openid, // 该用户的openid
              text: event.text,// 该用户的text
              user_imgpath: event.user_imgpath// 该用户头像地址
            }
          )
        }
      })
    } catch (e) {
      console.error(e)
    }

  }
  // 添加新的好友
  else if (event.function_name == "addfriend") {

    try {
      return await db.collection(event.name).where({
        _openid: event._id
      }).update({
        data: {
          friends: _.push(
            event.user_about
          )
        }
      })
    } catch (e) {
      console.error(e)
    }

  }

}



//云函数的使用
// wx.cloud.callFunction({
//     name: "friend_request", //云函数名字
//     data: {
//       function_name: "addtext", //方法名字
//       name: "chat", // 操作集合name 就是数据库中记录的名字
     
//       key:key_2, //  传递的值 在event中 在云函数中该值=event.key 以下类似
//       openid: openid_1,
//       text: text,
//       user_imgpath: user_1.user_imgpath
//     },
//     success: function (res) {
//       console.log(res)
//    },
//     fail: function (res) {
//       console.log(res)
//     }
//   })
