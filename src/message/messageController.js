const messageService = require("./messageService");
const responseHandler = require("../../handler/responseHandler");
const HttpStatusCode = require("../../constants/httpstatuscode");
const Helper = require("../../Helper/helper");

class messageController {
  //   createPost(req, res) {
  //     postService
  //       .createPost(req, res)
  //       .then((data) => {
  //         return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
  //       })
  //       .catch((err) => {
  //         return responseHandler.send(
  //           HttpStatusCode.error.UNPROCESSABLE_ENTITY,
  //           res,
  //           err.message
  //         );
  //       });
  //   }
  //   getAllPosts(req, res) {
  //     postService
  //       .getAll(req, res)
  //       .then((data) => {
  //         return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
  //       })
  //       .catch((err) => {
  //         return responseHandler.send(
  //           HttpStatusCode.error.INTERNAL_SERVER_ERROR,
  //           res,
  //           err.message
  //         );
  //       });
  //   }
  //   getMyPosts(req, res) {
  //     postService
  //       .getMyPosts(req, res)
  //       .then((data) => {
  //         return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
  //       })
  //       .catch((err) => {
  //         return responseHandler.send(
  //           HttpStatusCode.error.INTERNAL_SERVER_ERROR,
  //           res,
  //           err.message
  //         );
  //       });
  //   }
  //   updatePost(req, res) {
  //     postService
  //       .changeDetails(req, res)
  //       .then((data) => {
  //         return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
  //       })
  //       .catch((err) => {
  //         return responseHandler.send(
  //           HttpStatusCode.error.UNPROCESSABLE_ENTITY,
  //           res,
  //           err.message
  //         );
  //       });
  //   }
  sendMessage(req, res) {
    messageService
      .sendMessage(req, res)
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
  getMessageList(req, res) {
    messageService
      .getMessageList(req, res)
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

  getMessagesWithUser(req, res) {
    messageService
      .getMessagesWithUser(req, res)
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
  //   getIdPost(req, res) {
  //     postService
  //       .getPostInfo(req, res)
  //       .then((data) => {
  //         return responseHandler.send(HttpStatusCode.success.SUCCESS, res, data);
  //       })
  //       .catch((err) => {
  //         return responseHandler.send(
  //           HttpStatusCode.error.INTERNAL_SERVER_ERROR,
  //           res,
  //           err.message
  //         );
  //       });
  //   }
}

module.exports = new messageController();
