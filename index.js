const express =require("express");
var app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ijatinyadav:Gag0cYxkjHs2LrjE@cluster0.ndb9da0.mongodb.net/JWT-db").then=()=>{
    console.log("connected to db")
};
const {UserLogin}=require("./user/user");

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs'); // Replace 'ejs' with your preferred engine


app.post("/login",async(req,res)=>{
    const newUser = await UserLogin.findOne(req.body);
    if(!newUser){
        res.redirect("register");
    }else{
        res.redirect("afterlogin");
    }
})



app.post("/register",async(req,res)=>{
    const  result=await UserLogin(req.body);
    const newUser = await UserLogin.findOne(req.body);
    if(newUser){
        return  res.send("This user already exists!");
    }
    else {await result.save()
    res.json({
        msg:"Registered Successfully"
    })};
})

app.get("/",async (req,res)=>{

    res.render('index');
})
app.get("/login",async (req,res)=>{
    res.render('login');
})
app.get("/register",async (req,res)=>{
    res.render('register');
})
app.get("/afterlogin",async (req,res)=>{
    res.render('afterlogin');
})


app.listen(3000).then=()=>{
    console.log("Server is running on port 3000")
}