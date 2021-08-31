const express = require('express');
const router = express.Router();
const execute = require('./connection');




//***********************/
//POLIZAS
//***********************/
router.post("/polizas_listado", async(req,res)=>{
	
	const {empnit,activo} = req.body;

	let qry = `SELECT ID,NOPOLIZA, DESPOLIZA FROM DRC_POLIZAS
	WHERE EMPNIT='${empnit}' AND ACTIVO='${activo}' 
	ORDER BY NOPOLIZA` ;
		
	execute.Query(res,qry);

});


router.post("/polizas_insert", async(req,res)=>{
	
	const {empnit,codigo,descripcion} = req.body;

	let qry = `INSERT INTO DRC_POLIZAS 
	(EMPNIT,NOPOLIZA,DESPOLIZA,ACTIVO) 
	VALUES ('${empnit}','${codigo}','${descripcion}','SI')`;
	
	execute.Query(res,qry);

});


router.post("/polizas_block", async(req,res)=>{
	
	const {id} = req.body;

	let qry = `UPDATE DRC_POLIZAS SET ACTIVO='NO'
				WHERE ID=${id}` ;
	
	execute.Query(res,qry);

});

router.post("/polizas_unblock", async(req,res)=>{
	
	const {id} = req.body;

	let qry = `UPDATE DRC_POLIZAS SET ACTIVO='SI'
				WHERE ID=${id}` ;
	
	execute.Query(res,qry);

});

//***********************/
//***********************/

module.exports = router;