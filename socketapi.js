
const io = require( "socket.io" )();

// var { ToastContainer, toast } = require("react-toastify")
const socketapi = {
    io: io
};
const userModel = require("./routes/users")
const chatModel = require("./routes/chat.js")
const say = require('say')
var onlinename = []
var onlineuser = []

io.on( "connection", async function( socket ) {
var userid = socket.handshake.auth.token
   await userModel.findOneAndUpdate({_id:userid},{$set:{online:"1"}})


 socket.broadcast.emit("getonline",{user_id:userid})  
    // socket.on("setname", function(data){

    //     socket.broadcast.emit('newuser',data)
    //     onlineuser.push(socket.id);
    //     onlinename.push(data)
    //     io.emit("online",onlinename)
    // })
    socket.on("disconnect", async (data) => {
        // socket.broadcast.emit('disuser',{data:onlinename.splice(onlineuser.indexOf(socket.id),1)})
        var userid = socket.handshake.auth.token
        await userModel.findOneAndUpdate({_id:userid},{$set:{online:"0"}})
 socket.broadcast.emit("getoffline",{user_id:userid})  

        // socket.emit("dis")
        // io.emit("usercon")

    });
    console.log( "A user connected" );
    // io.emit("usercon")
// socket.on("msg",function(data){
//     io.emit("msg",data)
// })
socket.on("newChat", function (data) {
    socket.broadcast.emit("loadNewChat", data);
  });

socket.on("existsChat", async function (data) {
    var chats = await chatModel.find({
      $or: [
        { sender_id: data.sender_id, reciever_id: data.reciever_id },
        { sender_id: data.reciever_id, reciever_id: data.sender_id },
      ],
    });
    socket.emit("loadChats", { chats: chats });
  });
  socket.on("messageDeleted", function (deletedMessageId) {
   console.log("garvit");
   console.log(deletedMessageId);
    // if (deletedElement) {
    //   deletedElement.parentElement.remove();
    //   const deletedMessageIds = JSON.parse(localStorage.getItem("deletedMessageIds")) || [];
    //   deletedMessageIds.push(deletedMessageId);
    //   localStorage.setItem("deletedMessageIds", JSON.stringify(deletedMessageIds));
    // }
  });

});
// end of socket.io logic


module.exports = socketapi;