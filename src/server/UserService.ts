
import btoa from 'btoa'
export class UserService {
	/**
	 * 登录方法
	 * @param {object} param 登录参数
	 */
	public static queryUserInfo = (header:Object,param?: request) => RequestMethods.post(API_URl.QUERY_USER_INFO  + '?sysCode=sys_sequip_ei', { data: param ,header}) // 微信一键登录接口

	public static wxlogin = (param?: request) => RequestMethods.post(API_URl.WX_LOGIN, { data: param }) // 微信一键登录接口
	public static getEmployeePersonalInfo = (param?: request) => RequestMethods.get(API_URl.GET_EMPLOYEE_PERSONAL_INFO, { data: param }) // 获取用户信息


	// 获取图片验证码
	public static getImgCode = (param?: request) => {
		uni.showLoading({
			title: '加载中'
		});
		console.log(window, '-');

		let time = new Date().getTime();
		return new Promise((resolve: (value: any) => void, reject) => {
			uni.request({
				url: API_URl.REGISTER_IMGCODE + time,
				responseType: "arraybuffer",
				success: (response: any) => {
					if (response.statusCode == '200') {
						let imgData: any = {
							data: '',
							header: '',
						};
						const arrayBuffer = new Uint8Array(response.data)
						imgData.data = 'data:image/png;base64,' + uni.arrayBufferToBase64(arrayBuffer);
						imgData.header = response.header;
						resolve(imgData)
					} else {
						uni.showToast({
							icon: 'none',
							title: response.data.msg,
						});
						reject(response.data);
					}
				},
				fail: (response: any) => {
					reject(response.data);
				},
				complete() {
					uni.hideLoading();
				},
			});

		})
	}
	public static registerLogin = (param?: request,imgCode?:object) => RequestMethods.post(API_URl.LOG_IN, { data: param ,header:imgCode}) // 账号密码登录
	public static changePassword = (param?: request) => RequestMethods.post(API_URl.CHANGE_PASS_WORK, { data: param}) // 修改密码
	public static getList = (param?: request) => RequestMethods.post(API_URl.GET_LIST, { data: param}) // 获取资料库列表接口
	public static getBai = (param?: request) => RequestMethods.get(API_URl.GET_BAI + '/' + param) // 获取资料库列表接口详情接口
	public static getIpAddress = (param?: request) => RequestMethods.get(API_URl.GET_IP_ADD_RESS, { data: param}) // 获取ip接口
	public static insert = (param?: request) => RequestMethods.post(API_URl.INSERT, { data: param}) // 保存浏览记录接口
	public static fieldPersonnelList = (param?: request) => RequestMethods.post(API_URl.FIELD_PERSONNEL_LIST, { data: param}) // 外勤人员接口
	public static querySpecialEndorsementList = (param?: request) => RequestMethods.post(API_URl.QUER_SPECIAL_ENDORSEMENT_LIST, { data: param}) // 批单审核
	public static endorsementAudit = (param?: request) => RequestMethods.post(API_URl.ENDORSEMENT_AUDIT, { data: param}) // 批单审核
	public static getSequip = (type:string ,param?: object) => RequestMethods.get(API_URl.SEQUIP + type, { data: param}) // 视频列表页面
	public static getDetails = (type:string) => RequestMethods.get(API_URl.VIDEO_DETAILS + type) // 视频列表页面

	public static payAvisit = () => RequestMethods.get(API_URl.PAY_A_VISIT) //拜访筛选条件接口 
	public static customerVisitPage = (param?: object) => RequestMethods.post(API_URl.CUSTOMER_VISIT_PAGE, { data: param}) // 拜访列表
	public static customerVisit = (id:string) => RequestMethods.post(API_URl.CUSTOMER_VISIT+ '/' + id) // 拜访列表
	public static customePage = (param?: request,caselog?:Boolean) => RequestMethods.post(API_URl.CUSTOMER_PAGE , { data: param,header:{caselog:caselog}}) // 客户公司分页
	public static selectByEmployeeNum = (param?: request) => RequestMethods.get(API_URl.SELECT_EMPLOYEE_NUM, { data: param}) // 拜访查询用户详情接口
	public static enum = (param?: request) => RequestMethods.post(API_URl.CUSTOMER_ENUM ) // 枚举值返回
	public static getAllArea = (code:number) => RequestMethods.get(API_URl.GET_AREA_URL + '/' + code) //获取全部地区信息 
	public static cat = (name:string) => RequestMethods.get(API_URl.CAT + '/' + name + '/cat' + '?extendParam=%7B%22type%22%3A%22JSON%22%7D') //获取全部地区信息
	public static syncCustomerData = (param?: request) => RequestMethods.post(API_URl.CUSTOMER_CREATE, { data: param}) // 新增客户接口
	public static customerVisitEnum = (data:string) => RequestMethods.post(API_URl.CUSTOMER_VISIT_ENUM  + '/' + data ) // 新增拜访的枚举值
	public static customerVisitSave = (param?: request) => RequestMethods.post(API_URl.CUSTOMER_VISIT_SAVE , { data: param}) // 新增拜访记录接口
	public static batchstaff = (param?: request) => RequestMethods.get(API_URl.PAY_BATCHSTAFF, { data: param}) // 查询营销人员接口
	public static create = (param?: request) => RequestMethods.post(API_URl.CUSTOMER_CREATE , { data: param}) // 新增客户接口
	public static caseCategor = () => RequestMethods.get(API_URl.CASE_CATEGOR) //资料库枚举值接口 


	

	public static getCustList = (param?: object) => RequestMethods.post(API_URl.CUSTLIST, { data: param}) // 客户管理列表
	public static getCollectList = (param?: object) => RequestMethods.post(API_URl.COLLECTLIST, { data: param}) // 客户管理列表--我的收藏
	public static getCustEnum = () => RequestMethods.post(API_URl.CUSTENUM) // 客户管理枚举
	public static getCustDetail = (id:string) => RequestMethods.post(API_URl.CUSTDETAIL + id) // 客户详情
	public static collectCom = (param?: object) => RequestMethods.post(API_URl.COLLECT, { data: param}) // 收藏指定公司
	public static cancelCollect = (id:string) => RequestMethods.post(API_URl.CANCELCOLLECT + id) // 收藏指定公司
	public static cancelCollectDetail = (id:string) => RequestMethods.post(API_URl.CANCELCOLLECTDETAIL + id) // 收藏指定公司
	public static customerBranch = () => RequestMethods.post(API_URl.CUSTOMERBRANCH) // 客户管理归属机构
	public static customerCat = (name:string) => RequestMethods.get(API_URl.CAT+ '/' + name + '/cat' + '?extendParam=%7B%22type%22%3A%22JSON%22%7D') // 客户管理-企查猫
	public static createCustomer = (data?: object) => RequestMethods.post(API_URl.CREATECUSTOMER,{data:data}) // 创建客户
	public static updataCustomer = (data?: object) => RequestMethods.post(API_URl.UPDATACUSTOMER,{data:data}) // 编辑客户
	public static getUserByNo = (data?:any) => RequestMethods.get(API_URl.STAFFINFOBUNO,{data:data}) // 查询业务员
	public static setCustomerBranch = (data?:object) => RequestMethods.post(API_URl.SETSTAFF,{data:data}) // 修改从业人员
	public static getPolicyList = (data?:string) => RequestMethods.post(API_URl.POLICYLIST ,{data:data}) // 客户管理-保单跟踪
	public static getContractList = (data?:string) => RequestMethods.post(API_URl.CONTRACTLIST ,{data:data}) // 客户管理-续约跟踪
	public static getSelectData = () => RequestMethods.get(API_URl.LSWXRASON ) // 客户管理-续约跟踪-流失原因
	public static getDateTime = () => RequestMethods.get(API_URl.GETDATE ) // 客户管理-续约跟踪-流失原因
	
	public static inquireContactors = ( creditCode?:string) => RequestMethods.post(API_URl.INQUIRE_CONTACTORS + '/' + creditCode + '/' + 'contactors') // 查询当前企业下的所有联系人
	public static insertLog = ( data?: object) => RequestMethods.post(API_URl.INSERT_LOG,{data:data}) // 查询当前企业下的所有联系人

	public static getYearReport = ( name?:string,year1?:string,year2?:string) => RequestMethods.post(API_URl.GET_REPORT + '/' + name + '/' + year1 + '/' + year2) // 查询当前企业是否有电梯行业客户综合分析报告


	
}