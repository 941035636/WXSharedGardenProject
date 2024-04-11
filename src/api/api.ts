const baseUrl = () => {
  return process.env.VITE_REQUEST_URL;
}
var ROOT_SEQUIP_GW = baseUrl() + "/sequip-svc";
var ROOT_PRODUCT = baseUrl() + "/prod-svc"; // 产品中心
var ROOT_USER = baseUrl() + "/user-svc"; // 用户中心
var POOT_ORDER = baseUrl() + "/ins-order"; //订单中心
var ROOT_TOUBAO = baseUrl() + "/ins-svc"; // 投保中心
var ROOT_RESOURCE_UPLOAD = baseUrl() + "/jtpf/res-svc";
var ROOT_RESOURCE = baseUrl() + "/res-svc";
var ROOT_POL = baseUrl() + "/pol-svc";
var ROOT_INV = baseUrl() + "/invoice-svc"; // 发票
var ROOT_GETEWARY = baseUrl();
var ROOT_SEQUIP_STAFF_H5 = "https://sequip-staff-web-dev.jiangtai.com/#/"
var ROOT_SEQUIP_ENT_H5 = "https://sequip-ent-web-dev.jiangtai.com/#/"
var ROOT_SEQUIP_SVC = baseUrl() + "/sequip-svc"
var ROOT_ABTS_SVC = baseUrl() + "/abts-svc"
var WANGYANG = baseUrl() + '/sequip-man';
var WANGYANG_AB = baseUrl() + '/safety-man';
var ROOT_SAFETY_SVC = baseUrl() + '/sequip-svc'
var ROOT_ABTS_CASE_SVC = baseUrl() + '/abts-case-svc'
// 注册登录
let loginRegUrl = {
  QUERY_USER_INFO:ROOT_USER +  '/api/v1/queryUserInfo',//免登录接口
  WX_LOGIN: ROOT_ABTS_SVC + '/wx/v1/_bai/login',
  ENDORSEMENT_AUDIT: ROOT_POL + '/endorsement/v1/endorsementAudit',
  QUER_SPECIAL_ENDORSEMENT_LIST: ROOT_POL + '/specialSvc/querySpecialEndorsementList',
  GET_IP_ADD_RESS: ROOT_SEQUIP_SVC + '/api/v1/util/getIpAddress',
  INSERT: ROOT_SEQUIP_SVC + '/api/v1/accidentCaseLog/_bai/insert',
  FIELD_PERSONNEL_LIST: ROOT_SEQUIP_GW + '/staff/v1/fieldPersonnelList',
  //登录接口
  LOG_IN: ROOT_USER + '/api/v1/login',//当前登录接口
  CHANGE_PASS_WORK: ROOT_USER + '/api/v1.5/changePassword',//修改密码接口
  GET_LIST: ROOT_SEQUIP_SVC + '/api/v1/accidentCase/_bai/getList',
  GET_BAI: ROOT_SEQUIP_SVC + '/api/v1/accidentCase/_bai',
  GET_EMPLOYEE_PERSONAL_INFO: ROOT_USER + '/api/v1/getEmployeePersonalInfo',//查询身份证
  VRIFY_KAPTCHA: ROOT_USER + '/api/v1.5/vrifyKaptcha', // 验证图片是否正确
  login: ROOT_USER + '/api/v1/login', // 登录接口(GET)
  LOHIN_SMS_CODE: ROOT_USER + '/api/v1.5/regMsg', //登录短信验证码接口(POST)
  REGISTER_CODE: ROOT_USER + '/api/v1.5/register/regMsg', //注册短信验证码接口（POST)
  registerCodeYz: ROOT_USER + '/api/v1/appVerification', //注册短信验证码验证接口(GET)
  REGISTER_IMGCODE: ROOT_USER + '/api/v2/kaptcha?timestamp=', //注册图片验证码服务(GET)
  registerImgCode: ROOT_USER + '/api/v1/vrifyKaptcha', //验证图片是否正确
  REGISTER: ROOT_USER + '/api/v1/appRegister', //注册接口(POST)
  USER_DETAIL: ROOT_USER + '/api/v1/user/insureduserdetails', // 用户企业详情
  loginByToken: ROOT_USER + '/api/v1/channelTokenLogin', //通过token验证登录
  LOGOUT_URL: ROOT_USER + '/api/v2.0/loginOut', //退出登录
  MODIFY_BIND_PHONE: ROOT_USER + '/api/v1/changePhoneNum', // 修改绑定手机号
  IS_EXIT: ROOT_USER + '/api/v1/queryUserIsExist', // 判断用户是否存在
  GET_AREA_URL: ROOT_USER + '/api/v1/getArea', // 获取地区
  CHECK_PHONE_URL: ROOT_USER + '/api/v1.5/verifyidentidy', // 身份验证服务接口
  RESUB_TOKEN: ROOT_GETEWARY + '/idg-svc/api/v1/resub_token', // 重访攻击校验接口（用户中心获取标识）
  RESANDLOGIN: ROOT_USER + '/api/v1/registerAndLogin/regMsg',//登录注册获取短信验证码
  RESLOGIN: ROOT_USER + '/api/v1/registerAndLogin',//登录注册 注册既登录
  SEQUIP: ROOT_ABTS_SVC + '/media/v1/_bai/video/sequip/',//视频列表页面
  VIDEO_DETAILS: ROOT_ABTS_SVC + '/media/v1/_bai/videoDetail/sequip/',//视频播放页接口
  CASE_CATEGOR:ROOT_SAFETY_SVC + '/api/news/_bai//v1/caseCategor',//资料库枚举值接口


  SELECT_EMPLOYEE_NUM: ROOT_USER + '/api/selectByEmployeeNum',//拜访查询用户详情接口
  PAY_A_VISIT: WANGYANG + '/visit/v1/drop-down/list',//客户拜访筛选条件
  CAT: WANGYANG_AB + '/corp/v1/deatils',//企查猫接口
  // PAY_BATCHSTAFF:ROOT_SAFETY_SVC + '/common/v1/batchstaff/list',//查询营销人员接口
  PAY_BATCHSTAFF: ROOT_USER + '/api/v1/controllerList',//查询营销人员接口
  PAY_DOWNLOAD: ROOT_RESOURCE,//文件详情

  CUSTOMER_VISIT_ENUM: ROOT_ABTS_SVC + '/customer/visit/enum',//新增拜访的枚举值
  CUSTOMER_ENUM: ROOT_ABTS_SVC + '/customer/management/enum',//枚举值返回
  CUSTOMER_CREATE: ROOT_ABTS_SVC + '/customer/management/create',//新增客户接口
  // CUSTOMER_CREATE:'http://10.10.71.97:6343' + '/customer/management/create',//新增客户接口




  CUSTOMER_PAGE: ROOT_ABTS_SVC + '/customer/management/page',//客户公司分页
  CUSTOMER_VISIT_PAGE: ROOT_ABTS_SVC + '/customer/visit/page',//拜访列表
  CUSTOMER_VISIT: ROOT_ABTS_SVC + '/customer/visit',//拜访详情
  CUSTOMER_VISIT_SAVE: ROOT_ABTS_SVC + '/customer/visit/save',//新增拜访记录接口

  REFRESH_TOKEN: ROOT_GETEWARY,

  CUSTLIST: ROOT_ABTS_SVC + '/customer/management/page',// 客户管理列表
  COLLECTLIST: ROOT_ABTS_SVC + '/customer/favoritesEntity/page',// 客户管理列表--我的收藏
  CUSTENUM: ROOT_ABTS_SVC + '/customer/management/enum',// 客户管理枚举
  CUSTDETAIL: ROOT_ABTS_SVC + '/customer/management/',// 客户详情
  COLLECT: ROOT_ABTS_SVC + '/customer/favoritesEntity/create',// 收藏指定公司
  CANCELCOLLECT: ROOT_ABTS_SVC + '/customer/favoritesEntity/delete/',// 取消收藏
  CANCELCOLLECTDETAIL: ROOT_ABTS_SVC + '/customer/favoritesEntity/deleteByCompanyId/',// 取消收藏
  CUSTOMERBRANCH: ROOT_ABTS_SVC + '/customer/management/dropList/sequip',// 客户管理归属机构
  CREATECUSTOMER: ROOT_ABTS_SVC + '/customer/management/create',// 创建客户
  UPDATACUSTOMER: ROOT_ABTS_SVC + '/customer/management/update',// 编辑客户
  STAFFINFOBUNO: ROOT_USER + '/api/selectByEmployeeNum',// 查询业务员
  SETSTAFF: ROOT_ABTS_SVC + '/customer/management/assignCustomer',// 修改从业人员
  DECLARATION:ROOT_ABTS_SVC + '/template/v1/custom_template_load',//功能说明文件地址
  POLICYLIST: ROOT_SEQUIP_GW + '/renewal/v1/renewal-tracks',//客户管理-保单跟踪
  CONTRACTLIST: ROOT_SEQUIP_GW + '/renewal/v1/renewalContractList',//客户管理-续约跟踪
  LSWXRASON: ROOT_SEQUIP_GW +  '/renewal/v1/lsWxReason',//流失原因
  GETDATE: ROOT_SEQUIP_GW +  '/api/v1/util/getDateJson',//时间
  INQUIRE_CONTACTORS:ROOT_ABTS_SVC + '/customer/management/sequip',//查询当前企业下的所有联系人
  INSERT_LOG:ROOT_ABTS_SVC + '/case/log/insertLog',//日志埋点
  // INQUIRE_CONTACTORS:'http://10.10.71.97:6343' + '/customer/management/sequip',//查询当前企业下的所有联系人
  GET_REPORT: ROOT_ABTS_CASE_SVC + '/sequipv2/elevatorPolicyAndCaseReportInfo',//报告页面地址，格式化后的文
  GET_REPORT_DETAIL:ROOT_ABTS_CASE_SVC + '/sequipv2/policyAndCaseReport',//下载报告
};
let resUrl = {
  COM_INDENT: ROOT_RESOURCE + '/res/download?fileId=', // 图片回显
  COM_INDENT_SHOW: ROOT_GETEWARY, // 拼接接口地址
  COM_UPLOAD: ROOT_RESOURCE_UPLOAD + '/res/batchupload', // 图片上传
  BATCH_UPLOAD: ROOT_RESOURCE_UPLOAD + '/res/v3/batchupload',
  DOWNLOAD_FILE: ROOT_RESOURCE_UPLOAD + '/res/v3/download',
  IMAGE_URL:process.env.VITE_IMAGE_URL,//图片域名
  CO_BATCH_UPLOAD:ROOT_RESOURCE + '/res/v3/batchupload',//拜访图片上传
  DECLARATION:ROOT_ABTS_SVC + '/template/v1/custom_template_load',//功能说明文件地址
}
let companyUrl = {
  GET_AREA: ROOT_USER + '/api/v1/user/getAreaInfoList',//获取地区信息
}

// 绩效模块
let performanceUrl = {
  ACHIEVE_SEARCH: ROOT_SEQUIP_SVC + '/api/v1/performance/list', //绩效列表查询
  ACHIEVE_DETAIL: ROOT_SEQUIP_SVC + '/api/v1/performance/detail', // 绩效明细接口
  ACHIEVE_MONTH: ROOT_SEQUIP_SVC + '/api/v1/performance/monthList', //月结记录查询
  MY_CLIENT: ROOT_SEQUIP_SVC + '/api/v1/performance/myClient', // 我的客户
  GET_SUM: ROOT_SEQUIP_SVC + '/api/v1/performance/getSum', // 绩效统计
}


let accident = { // 事故预防

  POHOTO_URLS: ROOT_RESOURCE_UPLOAD + '/res/download?fileId=', // 头像图片

  CHECKLIST: ROOT_SEQUIP_GW + '/template/v1/check_template', // 检查表列表
  CHECKDETAILS: ROOT_SEQUIP_GW + '/template/v1/check_template_deatil/', // 检查表详情
  CHECKQUESTION: ROOT_SEQUIP_GW + '/template/v1/check_template_question/', // 题目列表

  QUERY_INSPECT: ROOT_SEQUIP_GW + '/api/organization/v1/orgs', // 企业安全排查查询接口(GET)
  ACTIVITY: ROOT_SEQUIP_GW + '/template/v1/template_activity/', // 活动与模板绑定接口
  CHECKGROUP: ROOT_SEQUIP_GW + '/template/v1/check_template_group', // 获取检查项信息和答题情况
  CHECKANSWER: ROOT_SEQUIP_GW + '/template/v1/answer', // 答题接口
  CHECK_QUESTION: ROOT_SEQUIP_GW + '/template/v1/check_template_question', // app题目列表获取已答题和未答题数据
  CHECK_ANSWER: ROOT_SEQUIP_GW + '/template/v1/check_template_anwser', // 获取答题情况
  CHECK_ANSWERDATA: ROOT_SEQUIP_GW + '/template/v2/answer/_bai/', // 获取答题数据接口
  FILS_UPLOAD: ROOT_SEQUIP_GW + '/files/v1/files', // 附件上传
  CHECK_TYPE: ROOT_SEQUIP_GW + '/template/v1/check_type', // 判断企业排查是常规排查还是检查表排查
  REPORT_GENERTION: ROOT_SEQUIP_GW + '/template/v1/check_complete', // 报告生成
  GET_GENERTION: ROOT_SEQUIP_GW + '/template/v1/check_complete', // 查询报告是否生成 00-未生成 01-已生成
  AREA_GET: ROOT_SEQUIP_GW + '/common/area/v1/next/', // 四级下拉地址
  ALLAREA_GET: ROOT_SEQUIP_GW + '/common/area/v1/0?levels=1,2,3,4', // 四级下拉地址一次性
  GETTEMPLATELIST: ROOT_SEQUIP_GW + '/template/v3/checkTemplateList',  // 获取检查列表
  DICT_GET: ROOT_SEQUIP_GW + '/template/v3/getStaticEnum', // 行业分类，管理分类 
  CREATEORG: ROOT_SEQUIP_GW + '/api/organization/v1/createOrg', // 创建服务企业
  GETCHECKDETAIL: ROOT_SEQUIP_GW + '/template/v3/getTemplateCheckItem', // 获取检查表检查项(详情)
  CHOOSECHECKTEMPLATE: ROOT_SEQUIP_GW + "/template/v3/chooseCheckTemplate",//选择并使用检查表（创建检查表实例）
  GETTEMPLATEINSTANCEDETAIL: ROOT_SEQUIP_GW + "/template/v3/getTemplateInstanceDetail",//获取检查表实例
  ANSWER: ROOT_SEQUIP_GW + "/template/v3/answer",//填写问题答案
  CHECKNEEDCONCLUDING: ROOT_SEQUIP_GW + "/template/v3/checkNeedConcluding",//检查是否需要填写总结
  ANSWERLIST: ROOT_SEQUIP_GW + "/template/v3/answerList",//获取所有答案
  CONCLUDINGCOMMENTS: ROOT_SEQUIP_GW + "/template/v3/concludingComments",//填写总结意见并结束
  INDEXPAGE: ROOT_SEQUIP_GW + "/template/v3/indexPage",//专家首页分页
  PLANSEARCH: ROOT_SEQUIP_GW + "/template/v3/plan/searchPlanByCode",//查询服务计划
  BINDPLANID: ROOT_SEQUIP_GW + "/template/v3/bindPlanId",//关联服务计划
  COMPREHENSIVEPAGE: ROOT_SEQUIP_GW + '/template/v3/_bai/comprehensivePage', //, //综合页
  DELETEGROUPINSTANCE: ROOT_SEQUIP_GW + "/template/v3/deleteGroupInstance",//删除检查项
  FINISHEDCHECK: ROOT_SEQUIP_GW + "/template/v3/finishedCheck",  //查看预览报告
  COMMITREPORT: ROOT_SEQUIP_GW + "/template/v3/commitReport",  //提交报告
  DELETEOTHERQUESTIONITEM: ROOT_SEQUIP_GW + "/template/v3/deleteOtherQuestionItem",  //删除问题的接口   questionId
  DICTITEMS: ROOT_SEQUIP_GW + "/template/v3/dict/items/true", //行业分类 管理分类 
  EXPERTINFOGET: ROOT_SEQUIP_GW + "/template/v3/expertInfo", //专家信息
  USER_SENDMAIL: ROOT_SEQUIP_GW + '/template/v3/sendMail',//发邮箱接口
}

export const API_URl = {
  ...loginRegUrl,
  ...resUrl,
  ...companyUrl,
  ...performanceUrl,
  ...accident

}