//为了格式统一重构格式
exports.libiao = function (data) { //活动列表 和赛事列表
    let sd_der={}
    sd_der.id=data.id
    sd_der.activityImg = data.activityImg||data.eventImg //封面
    
    sd_der.activityName = data.activityName||data.eventName //标题
    sd_der.activityTime = data.activityTime||data.eventTime //日期
    sd_der.state = data.state //1.报名中 2.未开始 3.已结束
    
    return sd_der
}




exports.xxiangq_w = function (data) { //活动详情 和赛事详情
    let sd_der={}
    
    sd_der.activityImg=data.activityImg||data.eventImg//封面
    sd_der.activityName = data.activityName||data.eventName //标题
    sd_der.activityTime = data.activityTime||data.eventTime //日期
    sd_der.state = data.state //1.报名中 2.未开始 3.已结束
    sd_der.signNum=data.signNum//报名人数
    sd_der.activityAddr=data.activityAddr||data.eventAddr//地点
    sd_der.signStartTime=data.signStartTime||data.eventTime//报名时间\
    sd_der.signEndTime=data.signEndTime//报名截止
    sd_der.activityIntroduce=data.activityIntroduce||data.eventDetail//活动介绍
    sd_der.activityTrip=data.activityTrip//行程安排
    sd_der.activityMatter=data.activityMatter||data.eventDescribe
    return sd_der
}