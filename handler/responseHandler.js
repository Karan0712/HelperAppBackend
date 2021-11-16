const HTTPStatusCode = require('../constants/httpstatuscode');
const _ = require('lodash');

const apiResponseHandler = {

    /* fetch success message and error message based on HTTP status code */
    send(statusCode, response, data) {
        if (response && statusCode) {
            let status = "";
            if (_.values(HTTPStatusCode.success).indexOf(statusCode) >= 0) {
                status = "success";
            } else if (_.values(HTTPStatusCode.error).indexOf(statusCode) >= 0) {
                status = "fail";
            }

            if (statusCode === HTTPStatusCode.error.BAD_REQUEST && _.isObject(data)) {
                data = _.map(data, function ({ msg }) {
                    return { "data": msg };
                });
            }
            return response
                .status(statusCode)
                .send({
                    "status": status,
                    "data": data
                });
        } else {
            return false;
        }
    }
};

module.exports = apiResponseHandler;
