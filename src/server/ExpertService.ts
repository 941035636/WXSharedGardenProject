
export class ExpertService {
	/**
	 * 首页专家列表
	 * @param {isComplete}  0 是排查中 999 是已排查 -1是全部
	 * @param {expertName}  当前登录人
	 * @param {pageNo}  请求第几页
	 * @param {pageSize } 页面大小
	 */
	public static indexPage = (data?: request) => RequestMethods.get(API_URl.INDEXPAGE, { data })
	/**
	 * 查询服务计划
	 * @param {planCode }  //服务编码
	 */
	public static planSearch = (data?: request) => RequestMethods.get(API_URl.PLANSEARCH, { data })

	/**
	 * 关联服务计划
	 * @param {planCode  }  //服务编码
	 *  @param {templateInstanceId }  //检查项id
	 */
	public static bindPlanId = (data?: request) => RequestMethods.get(API_URl.BINDPLANID, { data })

	/**
	 * 选择企业
	 * @param {integer} pn 请求第几页
	 * @param {integer} ps 页面大小
	 * @param {String} value 企业名称
	 * @param {String} code 省编码
	 */
	public static selectCom = (data?: request) => RequestMethods.post(API_URl.QUERY_INSPECT, { data })

	/*
	* 获取检查表列表 
	*/
	public static getTemplateList = (data?: request) => RequestMethods.get(API_URl.GETTEMPLATELIST, { data })

	/*
	*获取检查表详情
	*/
	public static getCheckDetail = (data?: request) => RequestMethods.get(API_URl.GETCHECKDETAIL, { data })
	/*
	*选择并使用检查表（创建检查表实例）
	*/
	public static chooseCheckTemplate = (data?: request) => RequestMethods.post(API_URl.CHOOSECHECKTEMPLATE, { data })

	/*
	*获取检查表实例
	*/
	public static getTemplateInstanceDetail = (data?: request) => RequestMethods.get(API_URl.GETTEMPLATEINSTANCEDETAIL, { data })


	/*
	*填写问题答案
	*/
	public static answer = (data?: request) => RequestMethods.post(API_URl.ANSWER, { data })


	/*
	 * 删除问题接口 
	 * @param {questionId }  
	 */
	public static deleteOtherQuestionItem = (data?: request) => RequestMethods.get(API_URl.DELETEOTHERQUESTIONITEM, { data })

	/*
	*检查是否需要填写总结
	*/
	public static checkNeedConcluding = (data?: request) => RequestMethods.get(API_URl.CHECKNEEDCONCLUDING, { data })

	//获取所有答案
	public static answerList = (data?: request) => RequestMethods.get(API_URl.ANSWERLIST, { data })

	/**
	* 综合页
	* @param {templateInstanceId}  检查表实例id
	*/
	public static comprehensivePage = (data?: request) => RequestMethods.get(API_URl.COMPREHENSIVEPAGE, { data })

	//填写总结意见并结束 
	public static concludingComments = (data?: request) => RequestMethods.post(API_URl.CONCLUDINGCOMMENTS, { data })

	/**
	 * 查看预览报告
	 * 
	 * @param {templateInstanceId }  //检查项id
	 */
	public static finishedCheck = (data?: request) => RequestMethods.get(API_URl.FINISHEDCHECK, { data })

	/**
	  * 提交报告
	  * 
	 * @param {templateInstanceId }  //检查项id
	  */
	public static commitreport = (data?: request) => RequestMethods.get(API_URl.COMMITREPORT, { data })

	/**
 * 删除检查项
 * @param {templateInstanceId}  检查表实例id
 * @param {groupInstanceId }  检查项id
 */
	public static deleteGroupInstance = (data?: request) => RequestMethods.get(API_URl.DELETEGROUPINSTANCE, { data })


}