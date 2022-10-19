import express from "express";
import { v4 as uuidv4 } from 'uuid';
const router=express.Router();
const users=[
    {
    firstname:"John",
    lastname:"Doe",
    age:25
}
];
router.get('/',(req,res)=>{
    res.send(users);
})
router.post('/',(req,res)=>{
    console.log('POST ROUTE REACHED');
    const userId=uuidv4(); 
    const userwID={
        id:userId,
        ...req.body 
    }
    users.push(userwID);
    res.send("User Added");
    console.log(users);

});
router.get('/:id',(req,res)=>{
    const id=req.params.id;
    res.send(users[id]);
});
router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    users.filter(user=>user.id!==id);
});
router.patch('/:id',(req,res)=>{
    const id=req.params;
    const userUpdated=users.find((user)=>user.id===id);
    const {firstname,lastname,age}=req.body;
    if(firstname){
        userUpdated.firstname=firstname;
    }
    res.send("User updated");

})
export default router;