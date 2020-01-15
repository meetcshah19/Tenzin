exports.home=(req,res,next)=>{
    res.sendFile(__dirname.replace('controllers',"views/index.html"));
    // res.sendFile('/Users/meet/Desktop/Tenzin/views/index.html');
};