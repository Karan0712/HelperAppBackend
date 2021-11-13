const db = require("../../model");
const Messages = db.messages;
const Helper = require("../../Helper/helper");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../model");
// const Op = Sequelize.Op;

class messageService {
  //   async createPost(req, res) {
  //     try {
  //       const post = {
  //         title: req.body.title,
  //         content: req.body.content,
  //         user: req.body.user,
  //         userName: req.body.userName,
  //         anonymous: req.body.anonymous,
  //       };
  //       return await Posts.create(post);
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  //   async getAll(req, res) {
  //     try {
  //       return await Posts.findAll({
  //         where: { user: { [Op.ne]: req.body.user } },
  //         order: [["id", "DESC"]],
  //       });
  //     } catch (error) {}
  //   }
  //   async getMyPosts(req, res) {
  //     try {
  //       return await Posts.findAll({
  //         where: { user: req.body.user },
  //         order: [["id", "DESC"]],
  //       });
  //     } catch (error) {}
  //   }
  async sendMessage(req, res) {
    try {
      const message = {
        user_one: req.body.user_one,
        user_two: req.body.user_two,
        messages: Helper.encryptMessage(req.body.messages),
        sender: req.body.sender,
      };
      return await Messages.create(message);
    } catch (error) {
      throw error;
    }
  }
  async getMessageList(req, res) {
    try {
      return await sequelize.query(
        "SELECT DISTINCT user_two as user from Messages WHERE user_one = :user UNION SELECT DISTINCT user_one FROM Messages where user_two = :user",
        {
          replacements: { user: req.params.id },
          type: QueryTypes.SELECT,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async getMessagesWithUser(req, res) {
    try {
      const userId = req.params.userId;
      const receiverId = req.params.receiverId;
      const temp = await sequelize.query(
        `SELECT id, messages as text, sender, "createdAt" FROM Messages WHERE (user_one = :userId AND user_two = :receiverId) OR (user_one = :receiverId AND user_two = :userId) ORDER BY "createdAt" DESC`,
        {
          replacements: { userId: userId, receiverId: receiverId },
          type: QueryTypes.SELECT,
        }
      );

      const msg = temp.map((arg) => {

        return ({
          _id: arg.id,
          text: Helper.dencryptMessage(arg.text) || '',
          createdAt: arg.createdAt,
          user: {
            _id: parseInt(arg.sender),
          },
        });
      });
      return msg;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
}

module.exports = new messageService();
