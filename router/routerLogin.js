const express = require('express');
const router = express.Router();
const execute = require('./connection');


router.post("/login", async(req,res)=>{
	
	const {u,c} = req.body;

    let qr = `SELECT USUARIO,CODDOC FROM COMMUNITY_USUARIOS WHERE USUARIO='${u}' AND CLAVE='${c}' `

	execute.Query(res,qr);
    
});

module.exports = router;