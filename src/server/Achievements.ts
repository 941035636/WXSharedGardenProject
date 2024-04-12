/**
 * 绩效相关接口
 */
 export class Achievements {
    /**
     * 绩效列表查询
     * @param {Object} data 查询数据
     */	
    public static getAch = (data?:request) => RequestMethods.post(API_URl.ACHIEVE_SEARCH, data) 
    /**
     * 绩效明细查询
     * @param {Object} data 查询数据
     */
    public static getAchDetail = (data?:request) => RequestMethods.post(API_URl.ACHIEVE_DETAIL, data) 
    /**
     * 月结记录列表查询
     * @param {Object} data 查询数据
     */	 
     public static getMonth = (data?:request) => RequestMethods.post(API_URl.ACHIEVE_MONTH, data) 
    /**
      * 月结记录列表查询
      * @param {Object} data 查询数据
      */	 
    public static getMyClitent = (data?:request) => RequestMethods.post(API_URl.MY_CLIENT, data) 
    /**
      * 绩效统计
      * @param {Object} data 查询数据
      */	
    public static getSum = (data?:request) => RequestMethods.post(API_URl.GET_SUM, data)  
 }
 