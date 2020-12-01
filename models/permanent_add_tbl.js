var db=require('../dbConnection');
const { use } = require('../routes/permanent_add_tbl_router');

var permanent_add_tbl={
    getAllTasks1:function(callback){

        return db.query('select * from permanent_add_tbl',callback);
    },
    getPermanentById: function(Id1,callback){
        return db.query('select * from permanent_add_tbl where  id1=?',[Id1],callback)
    },
      addpermanent_add_tbl:function(permanent_add_tbl,callback){
          return db.query('insert into permanent_add_tbl(address_permanent,city,country,state,district,pin,phone1,phone2,fax1,personnal_email_id,address,address_present,city1,country1,state1,district1,pin1,phone3,phone4,fax2,personal_email_id) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
              permanent_add_tbl.address_permanent,
              permanent_add_tbl.city,
              permanent_add_tbl.country,
              permanent_add_tbl.state,
              permanent_add_tbl.district,
              permanent_add_tbl.pin,
              permanent_add_tbl.phone1,
              permanent_add_tbl.phone2,
              permanent_add_tbl.fax1,
              permanent_add_tbl.personnal_email_id,
             permanent_add_tbl.address,
             permanent_add_tbl.address_present,
             permanent_add_tbl.city1,
             permanent_add_tbl.country1,
             permanent_add_tbl.state1,
             permanent_add_tbl.district1,
             permanent_add_tbl.pin1,
             permanent_add_tbl.phone3,
             permanent_add_tbl.phone4,
             permanent_add_tbl.fax2,
             permanent_add_tbl.personal_email_id,
            ],callback);
      },
   deletepermanent_add_tbl:function(id1,callback){
       return db.query('delete from permanent_add_tbl where id=?',[id1],callback);
   },
    updatepermanent_add_tbl:function(id1,permanent_add_tbl,callback){
       return db.query('update permanent_add_tbl set address_permanent=?,city=?,country=?,state=?,district=?,pin=?,phone1=?,phone2=?,fax=?,personnal_email_id=? where id1=?',[permanent_add_tbl.address_permanent,permanent_add_tbl.city,permanent_add_tbl.country,permanent_add_tbl.state,permanent_add_tbl.district,permanent_add_tbl.pin,permanent_add_tbl.phone1,permanent_add_tbl.phone2,permanent_add_tbl.fax,permanent_add_tbl.personnal_email_id],callback);
   }
   
};

  module.exports=permanent_add_tbl;
