var db=require('../dbConnection');
const { use } = require('../routes/skill_tbl_router');

var skill_tbl={
    getAllTasks5:function(callback){

        return db.query('select * from skill_tbl',callback);
    },
    getSkillById: function(id5,callback){
        return db.query('select * from skill_tbl where  id5=?',[id5],callback)
    },
      addskill_tbl:function(skill_tbl,callback){
          return db.query('insert into skill_tbl (skill_tbl.skill_category,skill_tbl.skill,skill_tbl.skill_level,skill_tbl.is_current,skill_tbl.experience,skill_tbl.remarks ],) values(?,?,?,?,?,?)',[skill_tbl.skill_category,skill_tbl.skill,skill_tbl.skill_level,skill_tbl.is_current,skill_tbl.experience,skill_tbl.remarks ],callback);
      },
   deleteskill_tbl:function(id5,callback){
       return db.query('delete from skill_tbl where id5=?',[id5],callback);
   },
    updateskill_tbl:function(id5,skill_tbl,callback){
       return db.query('update skill_tbl set skill_category=?,skill=?,skill_level=?,is_current=?,experience=?,remarks=? where id5=?',[skill_tbl.skill_category,skill_tbl.skill,skill_tbl.skill_level,skill_tbl.is_current,skill_tbl.experience,skill_tbl.remarks],callback);
   }
   
};

  module.exports=skill_tbl;
