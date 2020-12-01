var db=require('../dbConnection');
const { use } = require('../routes/previous_emp_router');

var previous_emp={
    getAllTasks3:function(callback){

        return db.query('select * from previous_emp',callback);
    },
    getPreviousEmpById: function(id3,callback){
        return db.query('select * from previous_emp where  id3=?',[id3],callback)
    },
      addprevious_emp:function(previous_emp,callback){
          return db.query('insert into previous_emp (from_date,to_date,company,designation,relevant(yy-mm),non-relevant(yy-mm)) values(?,?,?,?,?,?)',[previous_emp.from_date,previous_emp.to_date,previous_emp.company,previous_emp.designation,previous_emp.relevant(yy-mm),previous_emp.non-relevant(yy-mm)],callback);
      },
   deleteprevious_emp:function(id3,callback){
       return db.query('delete from previous_emp where id3=?',[id3],callback);
   },
    updateprevious_emp:function(id3,previous_emp,callback){
       return db.query('update previous_emp set from_date=?,to_date=?,company=?,designation=?,relevant(yy-mm)=?,non-relevant(yy-mm)=? where id3=?',[previous_emp.from_date,previous_emp.to_date,previous_emp.company,previous_emp.designation,previous_emp.relevant(yy-mm),previous_emp.non-relevant(yy-mm)],callback);
   }
   
};

  module.exports=previous_emp;
