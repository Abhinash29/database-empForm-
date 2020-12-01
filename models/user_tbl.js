var db=require('../dbConnection');
const { use } = require('../routes/user_tbl_router');

var user_tbl={
    getAllTasks:function(callback){

        return db.query('select * from user_tbl',callback);
    },
    getEmployeeById: function(Id1,callback){
        return db.query('select * from user_tbl where  user_name=?',[Id1],callback)
    },
   adduser_tbl:function(user_tbl,callback){
          return db.query('insert into user_tbl values(?,?,?,?)',[user_tbl.user_email,user_tbl.user_name,user_tbl.user_password,user_tbl.user_mobile_no],callback);
      },
   deleteuser_tbl:function(ID,callback){
       return db.query('delete from user_tbl where user_name=?',[ID],callback);
   },
   updateuser_tbl:function(Id,user_tbl,callback){
       return db.query('update user_tbl set user_email=?,user_password=?,user_mobile_no=? where user_name=?',[user_tbl.user_email,user_tbl.user_password,user_tbl.user_mobile_no,Id],callback);
   }
};

  module.exports=user_tbl;