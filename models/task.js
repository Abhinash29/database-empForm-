var db=require('../dbConnection');

var Task={
    getAlltasks:function(callback){

        return db.query('select * from task',callback);
    },
    
    getTaskById: function(task_id,callback){
        return db.query('select * from task where task_id=?',[task_id],callback)
    },
      addtask:function(task,callback){
          return db.query('insert into task values(?,?,?)',[task.task_id,task.title,task.status],callback);
      },
   deletetask:function(id,callback){
       return db.query('delete from task where task_id=?',[id],callback);
   },
   updatetask:function(id,task,callback){
       return db.query('update task set title=?,status=? where task_id=?',[task.title,task.status,id],callback);
   }
};

  module.exports=Task;