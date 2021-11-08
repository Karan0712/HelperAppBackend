const db = require("../../model");
const Posts = db.posts;
const Helper = require("../../Helper/helper");
const Sequelize = require("sequelize");

const Op = Sequelize.Op;

class postService {
  async createPost(req, res) {
    try {
      const post = {
        title: req.body.title,
        content: req.body.content,
        user: req.body.user,
      };

      return await Posts.create(post);
    } catch (error) {
      throw error;
    }
  }

  async getAll(req, res) {
    try {
      return await Posts.findAll({
        where: { user: { [Op.ne]: req.body.user } },
        order: [["id", "DESC"]],
      });
    } catch (error) {}
  }

  async getMyPosts(req, res) {
    try {
      return await Posts.findAll({
        where: { user: req.body.user },
        order: [["id", "DESC"]],
      });
    } catch (error) {}
  }

  async getIdPost(req, res) {
    try {
      return await Posts.findOne({
        where: { id: req.params.id },
      });
    } catch (error) {}
  }

  async changeDetails(req, res) {
    try {
      const token = {
        title: req.body.title,
        content: req.body.content,
      };
      return await Posts.update(token, {
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async deletePost(req, res) {
    try {
      return await Posts.destroy({ where: { id: req.params.id } });
    } catch (err) {
      throw err;
    }
  }

  async getPostInfo(req, res) {
    const post = await this.getIdPost(req);
    const token = {
      title: post.dataValues.title,
      content: post.dataValues.content,
      user: post.dataValues.user,
    };
    return token;
  }
}

module.exports = new postService();
