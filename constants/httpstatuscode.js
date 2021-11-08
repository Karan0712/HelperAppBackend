const HttpStatusCode = {
    success: {
        SUCCESS: 200,
        CREATED: 201,
        NO_CONTENT: 204
    },
    error: {
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        UNPROCESSABLE_ENTITY: 422,
        INTERNAL_SERVER_ERROR: 500,
        NO_JSON: 501,
        INVALID_JSON: 502,
    }
};

module.exports = HttpStatusCode;

