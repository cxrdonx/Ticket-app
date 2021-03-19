'use strict'
const mongoose = require('mongoose');

var controller ={
    
getView: function(req, res){
    res.render('index',{
       title: 'inicio'
    });
},

}