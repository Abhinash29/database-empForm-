var db=require('../dbConnection');
const { use } = require('../routes/present_add_tbl_router');

var present_add_tbl={
    getAllTasks2:function(callback){

        return db.query('select * from present_add_tbl',callback);
    },
    getPresentById: function(id2,callback){
        return db.query('select * from present_add_tbl where  id2=?',[id2],callback)
    },
      addpresent_add_tbl:function(present_add_tbl,callback){
          return db.query('insert into present_add_tbl (address_present,city,country,state,district,pin,phone1,phone2,fax,personal_email_id) values(?,?,?,?,?,?,?,?,?,?)',[present_add_tbl.address_present,present_add_tbl.city,present_add_tbl.country,present_add_tbl.state,present_add_tbl.district,present_add_tbl.pin,present_add_tbl.phone1,present_add_tbl.phone2,present_add_tbl.fax,present_add_tbl.personal_email_id],callback);
      },
   deletepresent_add_tbl:function(id2,callback){
       return db.query('delete from present_add_tbl where id=?',[id2],callback);
   },
    updatepresent_add_tbl:function(id2,present_add_tbl,callback){
       return db.query('update present_add_tbl set address_present=?,city=?,state=?,district=?,pin=?,phone1=?,phone2=?,fax=?,personal_email_id=? where id2=?',[present_add_tbl.address_present,present_add_tbl.city,present_add_tbl.country,present_add_tbl.state,present_add_tbl.district,present_add_tbl.pin,present_add_tbl.phone1,present_add_tbl.phone2,present_add_tbl.fax,present_add_tbl.personal_email_id],callback);
   }
   
};

  module.exports=present_add_tbl;
