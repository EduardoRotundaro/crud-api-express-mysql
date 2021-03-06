const respStatusEnum = require('../enumerators/responseStatusEnum')

module.exports = (resObj, status, data, err)=>{
    resObj.status(status)
    
    return resObj.json({
        status: respStatusEnum(status),
        data: data,
        err: err
    })
}