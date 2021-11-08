const postService = require("./postService");
const responseHandler = require("../../handler/responseHandler");
const HttpStatusCode = require("../../constants/httpstatuscode");

class postController {
  createPost(req, res) {
    postService
      .createPost(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.UNPROCESSABLE_ENTITY,
          res,
          err.message
        );
      });
  }

  getAllPosts(req, res) {
    postService
      .getAll(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.INTERNAL_SERVER_ERROR,
          res,
          err.message
        );
      });
  }

  getMyPosts(req, res) {
    postService
      .getMyPosts(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.INTERNAL_SERVER_ERROR,
          res,
          err.message
        );
      });
  }
  updatePost(req, res) {
    postService
      .changeDetails(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.UNPROCESSABLE_ENTITY,
          res,
          err.message
        );
      });
  }
  deletePost(req, res) {
    postService
      .deletePost(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.UNPROCESSABLE_ENTITY,
          res,
          err.message
        );
      });
  }

  getIdPost(req, res) {
    postService
      .getPostInfo(req, res)
      .then((data) => {
        return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
      })
      .catch((err) => {
        return responseHandler.send(
          HttpStatusCode.error.INTERNAL_SERVER_ERROR,
          res,
          err.message
        );
      });
  }
}

module.exports = new postController();
