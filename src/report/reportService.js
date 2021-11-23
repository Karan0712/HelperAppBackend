const db = require("../../model");
const Reports = db.reports;
const Users = db.users;

const Helper = require("../../Helper/helper");
const Sequelize = require("sequelize");

const Op = Sequelize.Op;

// const { where } = require("sequelize/types");

class reportService {
  /* User registration function */
  async createReport(req, res) {
    console.log('insode report create');
    try {
      const report = {
          user_flagged: Number(req.body.user_flagged),
          user_reporter: Number(req.body.user_reporter),
          description: req.body.description,
          status: 0
        };
        return await Reports.create(report);

    } catch (error) {
      console.log(error,'error')
      throw error;
    }
  }


  async getReport(req, res) {
    try {
       const report =  await Reports.findAll({
         attributes: ['id', 'user_flagged','user_reporter','description'],
        })
        let acc = []

        for(let i = 0; i < report.length; i++) {
          const {dataValues} = report[i]
          const index = acc.findIndex(userData => userData.user_id == dataValues.user_flagged)
          if (index == -1){
            const user = await Users.findOne({ where: { id: dataValues.user_flagged } })
            const obj = {
              user_id: dataValues.user_flagged,
              username:user.dataValues.username,
              user_flagged_count: 1,
              unique_user_reported: [dataValues.user_reporter]
            }
            acc.push(obj)
          } else {
            const clone = acc[index]
            clone.user_flagged_count += 1
            clone.unique_user_reported =  clone.unique_user_reported.includes(dataValues.user_reporter) ? clone.unique_user_reported : [...clone.unique_user_reported, dataValues.user_reporter]
            acc[index] = clone
          }
        }

        const data = acc.map(v => {
          v.unique_user_reported = v.unique_user_reported.length
          return v
        })
        return data;

    } catch (error) {
      console.log(error,'error')
      throw error;
    }
  }



  async getUserReport(req, res) {
    console.log('zzz',req.params)
    try {
      const user = await Users.findOne({ where: { id: req.params.user_id } })
       const report =  await Reports.findAll({
         where: { user_flagged: req.params.user_id },
         attributes: ['id', 'user_flagged','user_reporter','description'],
        })
        let acc = {
          user_id: user.dataValues.id,
          username: user.dataValues.username,
          reports: []
        }

        for(let i = 0; i < report.length; i++) {
          const {dataValues} = report[i]
            const user = await Users.findOne({ where: { id: dataValues.user_reporter } })

            const obj = {
              user_id: dataValues.user_reporter,
              username:user.dataValues.username,
              description: dataValues.description
            }
            acc.reports.push(obj)
        }

        return acc;

    } catch (error) {
      console.log(error,'error')
      throw error;
    }
  }
}

// [UserList]{
//   UserName: string
//   user_id: id
//   flagged_count: Int
//   repoted_count: Int
//   unique_flagged_count: Int
// }

// [userReport/ID/flagged]{
//    {
//     description: report.description
//     reporter_id: id
//     reporter_name: str
//   }]

//   userReport/ID/created
//   {
//     {
//       description: report.description
//       flag_id: id
//       flag_name: str
//     }
//   }
// }

module.exports = new reportService();

