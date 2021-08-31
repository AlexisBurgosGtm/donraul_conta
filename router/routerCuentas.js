const express = require('express');
const router = express.Router();
const execute = require('./connection');

// 
router.post("/listado", async(req,res)=>{
	
	const {empnit,activo} = req.body;

	let qry = `SELECT ID,CODCUENTA AS CODIGO,DESCRIPCION,NIVEL,ACTIVO FROM DRC_CUENTAS
	WHERE EMPNIT='${empnit}' AND ACTIVO='${activo}' 
	ORDER BY CODCUENTA` ;
		
	execute.Query(res,qry);

});


router.post("/insert", async(req,res)=>{
	
	const {empnit,cod,descripcion,nivel} = req.body;

	let qry = `INSERT INTO DRC_CUENTAS 
	(EMPNIT,CODCUENTA,DESCRIPCION,NIVEL,ACTIVO) 
	VALUES ('${empnit}','${cod}','${descripcion}',${nivel},'SI')`;
	
	execute.Query(res,qry);

});

router.post("/edit", async(req,res)=>{
	
	const {empnit,id,cod,descripcion,nivel} = req.body;
	console.log(req.body);

	let qry = `UPDATE DRC_CUENTAS SET EMPNIT='${empnit}',CODCUENTA='${cod}',DESCRIPCION='${descripcion}',NIVEL=${nivel} 
				WHERE ID=${id} `;
	
	execute.Query(res,qry);

});

router.post("/delete", async(req,res)=>{
	
	const {id} = req.body;

	let qry = `DELETE FROM DRC_CUENTAS
	WHERE ID=${id}` ;


	
	execute.Query(res,qry);

});

router.post("/block", async(req,res)=>{
	
	const {id} = req.body;

	let qry = `UPDATE DRC_CUENTAS SET ACTIVO='NO'
				WHERE ID=${id}` ;
	
	execute.Query(res,qry);

});

router.post("/unblock", async(req,res)=>{
	
	const {id} = req.body;

	let qry = `UPDATE DRC_CUENTAS SET ACTIVO='SI'
				WHERE ID=${id}` ;
	
	execute.Query(res,qry);

});

module.exports = router;