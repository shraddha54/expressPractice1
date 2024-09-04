const express = require('express');
const model = require('../model/model');
const controller = {};
controller.getVal = async (req,res)=>{
    try{
    let data = await model.find({});
    console.log(data)
    return res.status(200).json({
        status:'success',
        data:{
            data:data
        }
    })}
    catch(error){
        return res.status(500).json({
            status:'Fail',
            message:error.message
        })
    }
}
controller.getValId = async (req,res)=>{
    try{
        let data = await model.findById(req.params.id);
        console.log(data)
        return res.status(200).json({
            status:'success',
            data:{
                data:data
            }
        })}
        catch(error){
            return res.status(500).json({
                status:'Fail',
                message:error.message
            })
        }
}

controller.postVal = async (req,res)=>{
    try{
    // const ans = new model(req.body);
    // await ans.save();
    // console.log(ans)
    // return res.status(201).json({
    //     status:'success',
    //     data:{
    //         val:ans
    //     }
    // })
    const ans = await model.insertMany(req.body)
    return res.status(201).json({
        status:'success',
        data:{
            data:ans
        }
    })
}
catch(error){
    return res.status(201).json({
        status:'fail',
        message:error.message
    })
}
}
controller.editVal = async (req,res)=>{
    try{
        // const ans = await model.findByIdAndUpdate(req.params.id , req.body);
        // return res.status(200).json({
        //     status:'success',
        //     data:{
        //         updated:ans
        //     }
        // })
        const ans = await model.findOneAndUpdate({_id:req.params.id }, req.body, {new:true});
        return res.status(200).json({
            status:'success',
            data:{
                updated:ans
            }
        })
    }
    catch(error){
        res.status(500).json({
            status:'fail',
            message:error.message
        })
    }
}
controller.deleteVal = async(req,res)=>{
    try{
        const ans = await model.findByIdAndDelete(req.params.id);
        console.log(ans);
        return res.status(204).json({
            status:success,
            data:null
        })
    }
    catch(error){
        return res.status(500).json({
            status:"fail"
        })
    }
}
module.exports = controller;