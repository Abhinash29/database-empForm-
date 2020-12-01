var db=require('../dbConnection');
const { use } = require('../routes/qualification_tbl_router');

var qualification_tbl={
    getAllTasks4:function(callback){

        return db.query('select * from qualification_tbl',callback);
    },
    getQualificationById: function(id4,callback){
        return db.query('select * from qualification_tbl where  id4=?',[id4],callback)
    },
      addqualification_tbl:function(qualification_tbl,callback){
          return db.query('insert into qualification_tbl (qualification,institute,passing_year,score,qualification_area) values(?,?,?,?,?)',[qualification_tbl.qualification,qualification_tbl.institute,qualification_tbl.passing_year,qualification_tbl.score,qualification_tbl.qualification_area],callback);
      },
   deletequalification_tbl:function(id4,callback){
       return db.query('delete from qualification_tbl where id4=?',[id4],callback);
   },
    updatequalification_tbl:function(id4,previous_emp,callback){
       return db.query('update qualification_tbl set qualification=?,institute=?,passing_year=?,score=?,qualification_area=? where id4=?',[qualification_tbl.qualification,qualification_tbl.institute,qualification_tbl.passing_year,qualification_tbl.score,qualification_tbl.qualification_area],callback);
   }
   
};

  module.exports=qualification_tbl;