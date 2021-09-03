const express = require('express');
const router = express.Router();
const execute = require('./connection');

// 
router.post("/listado", async(req,res)=>{
	
	const {empnit,activo} = req.body;

	let qry = `SELECT ID,CODCUENTA AS CODIGO,DESCRIPCION,DA,PD,NIVEL,ESTFIN,TIPOEF,ACTIVO FROM DRC_CUENTAS
	WHERE EMPNIT='${empnit}' AND ACTIVO='${activo}' 
	ORDER BY CODCUENTA` ;
		
	execute.Query(res,qry);

});


router.post("/insert", async(req,res)=>{
	
	const {empnit,cod,descripcion,nivel,da,pd,estfin,tipoef} = req.body;

	let qry = `INSERT INTO DRC_CUENTAS 
	(EMPNIT,CODCUENTA,DESCRIPCION,NIVEL,ACTIVO,DA,PD,ESTFIN,TIPOEF) 
	VALUES ('${empnit}','${cod}','${descripcion}',${nivel},'SI','${da}','${pd}','${estfin}','${tipoef}')`;
	
	execute.Query(res,qry);

});

router.post("/edit", async(req,res)=>{
	
	const {empnit,id,cod,descripcion,nivel,da,pd,estfin,tipoef} = req.body;
	console.log(req.body);

	let qry = `UPDATE DRC_CUENTAS SET EMPNIT='${empnit}',CODCUENTA='${cod}',
				DESCRIPCION='${descripcion}',NIVEL=${nivel},
				DA='${da}',PD='${pd}',ESTFIN='${estfin}',TIPOEF='${tipoef}' 
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