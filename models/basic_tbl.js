var db=require('../dbConnection');
const { use } = require('../routes/basic_tbl_router');

var basic_tbl={
    getAllEmployee:function(callback){

        return db.query('select * from basic_tbl',callback);
    },
    getemployeeById: function(id,callback){
        return db.query('select * from basic_tbl where id=?',[id],callback)
    },

     addbasic_tbl:function(basic_tbl,callback){
          return db.query('insert into basic_tbl (employee_no,title,name,addresses_as,first_name,middle_name,last_name,initials,gender,date_of_birth,employee_age,official_phone,personal_mobile,fax,official_email,personnal_email,personnal_email2,personnal_email3,photo_file,birthplace,religion,caste,domicile,nationality,voter_id,pan_no,adhar_no,marital_status,no_of_children,marriage_date,spouse_name,bank_name,account_type,payment_type,account_no,branch_details,ifsc_code,reimbursement_bank_name,reimbursement_account_no) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
              basic_tbl.employee_no,
            basic_tbl.title,
            basic_tbl.name,
            basic_tbl.addressed_as,
            basic_tbl.first_name,
            basic_tbl.middle_name,
            basic_tbl.last_name,
            basic_tbl.initials,
            basic_tbl.gender,
            basic_tbl.date_of_birth,
            basic_tbl.employee_age,
            basic_tbl.official_phone,
            basic_tbl.personal_mobile,
            basic_tbl.fax,
            basic_tbl.official_email,
            basic_tbl.personal_email,
            basic_tbl.personal_email2,
            basic_tbl.personal_email3,
            basic_tbl.photo_file,
            basic_tbl.birthplace,
            basic_tbl.religion,
            basic_tbl.caste,
            basic_tbl.domicile,
            basic_tbl.nationality,
            basic_tbl.voter_id,
            basic_tbl.pan_no,
            basic_tbl.adhar_no,
            basic_tbl.marital_status,
            basic_tbl.no_of_children,
            basic_tbl.marriage_date,
            basic_tbl.spouse_name,
            basic_tbl.bank_name,
            basic_tbl.account_type,
            basic_tbl.payment_type,
            basic_tbl.account_no,
            basic_tbl.branch_details,
            basic_tbl.ifsc_code,
            basic_tbl.reimbursement_bank_name,
            basic_tbl.reimbursement_acc_no],callback);
      },
   deletebasic_tbl:function(id,callback){
       return db.query('delete from basic_tbl where id=?',[id],callback);
   },
    updatebasic_tbl:function(id,basic_tbl,callback){
       return db.query('update basic_tbl set employee_no=?,title=?,name=?,addressed_as=?,first_name=?,middle_name=?,last_name=?,initials=?,gender=?,date_of_birth=?,employee_age=?,official_phone=?,personal_mobile=?,fax=?,official_email=?,personal_email=?,personal_email2=?,personal_email3=?,photo_file=?,birth_place=?,religion=?,caste=?,domicile=?,nationality=?,voter_id=?,pan_no=?,adhar_no=?,marital_status=?,no_of_children=?,marriage_date=?,spouse_name=?,bank_name=?,account_type=?,payment_type=?,account_no=?,branch_details=?,ifsc_code=?,reimbursement_bank_name=?,reimbursement_acc_no=? where id=?',[basic_tbl.employee_no,basic_tbl.title,basic_tbl.name,basic_tbl.addressed_as,basic_tbl.first_name,basic_tbl.middle_name,basic_tbl.last_name,basic_tbl.initials,basic_tbl.gender,basic_tbl.date_of_birth,basic_tbl.employee_age,basic_tbl.official_phone,basic_tbl.personal_mobile,basic_tbl.fax,basic_tbl.official_email,basic_tbl.personal_email,basic_tbl.personal_email2,basic_tbl.personal_email3,basic_tbl.photo_file,basic_tbl.birthplace,basic_tbl.religion,basic_tbl.caste,basic_tbl.domicile,basic_tbl.nationality,basic_tbl.voter_id,basic_tbl.pan_no,basic_tbl.adhar_no,basic_tbl.marital_status,basic_tbl.no_of_children,basic_tbl.marriage_date,basic_tbl.spouse_name,basic_tbl.bank_name,basic_tbl.account_type,basic_tbl.payment_type,basic_tbl.account_no,basic_tbl.branch_details,basic_tbl.ifsc_code,basic_tbl.reimbursement_bank_name,basic_tbl.reimbursement_acc_no, id],callback);
   }

   
};

  module.exports=basic_tbl;
