import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
    userID: {
        type: String,
        unique: false
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    created_at : { // 작성일
        type : Date,
        default : Date.now()
    },
    update_at:  {
        type : Date,
        default : Date.now()
    }  
    });


BoardSchema.static("findAll", function(callback){
    return this.find({}, callback);
});


BoardSchema.virtual('getDate').get(function(){
    var date = new Date(this.created_at);
    return {
        year : date.getFullYear(),
        month : date.getMonth()+1,
        day : date.getDate()
    };
  });
  
const model = mongoose.model("boards", BoardSchema);
export default model;