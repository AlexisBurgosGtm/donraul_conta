const express = require('express');
const router = express.Router();
const execute = require('./connection');


router.post('/mayor_mes', async(req,res)=>{

	const {empnit,anio,mes} = req.body;

	let qry = `
				SELECT DRC_PARTIDAS.NOPOLIZA, DRC_POLIZAS.DESPOLIZA, DRC_PARTIDAS.FECHA, DRC_PARTIDAS.NOPARTIDA, DRC_PARTIDAS.CODCUENTA, DRC_CUENTAS.DESCRIPCION AS DESCUENTA, 
									DRC_PARTIDAS.DESCRIPCION, DRC_PARTIDAS.DEBE, DRC_PARTIDAS.HABER
				FROM DRC_POLIZAS RIGHT OUTER JOIN
									DRC_PARTIDAS ON DRC_POLIZAS.NOPOLIZA = DRC_PARTIDAS.NOPOLIZA AND DRC_POLIZAS.EMPNIT = DRC_PARTIDAS.EMPNIT LEFT OUTER JOIN
									DRC_CUENTAS ON DRC_PARTIDAS.CODCUENTA = DRC_CUENTAS.CODCUENTA AND DRC_PARTIDAS.EMPNIT = DRC_CUENTAS.EMPNIT
				WHERE (DRC_PARTIDAS.EMPNIT = '${empnit}')
				ORDER BY DRC_PARTIDAS.CODCUENTA, DRC_PARTIDAS.FECHA
	`

	execute.Query(res,qry);

});


// PARTIDAS
router.post("/partidas_insert", async(req,res)=>{
	
	const {empnit,fecha,numero,nopoliza,codcuenta,descripcion,debe,haber} = req.body;

	let f = new Date(fecha);
	
	let qry = `INSERT INTO DRC_PARTIDAS 
	(EMPNIT,NOPOLIZA,FECHA,ANIO,MES,DIA,NOPARTIDA,CODCUENTA,DESCRIPCION,DEBE,HABER)
	VALUES
	('${empnit}',${nopoliza},'${fecha}',${f.getFullYear()},${(f.getUTCMonth()+1)},${f.getDay()},'${numero}','${codcuenta}','${descripcion}',${debe},${haber})`;
	
	execute.Query(res,qry);

});

router.post("/partidas_delete", async(req,res)=>{
	
	const {empnit,id} = req.body;

	let qry = `DELETE FROM DRC_PARTIDAS
				WHERE ID=${id}; `;
	
	execute.Query(res,qry);

});

router.post('/partidas_listado', async(req, res) => {
	const {empnit} = req.body;

	let qry = `SELECT DRC_PARTIDAS.NOPOLIZA, DRC_POLIZAS.DESPOLIZA, 
			DRC_PARTIDAS.FECHA, DRC_PARTIDAS.NOPARTIDA, 
			DRC_PARTIDAS.CODCUENTA, DRC_CUENTAS.DESCRIPCION AS DESCUENTA, 
			DRC_PARTIDAS.DESCRIPCION, 
			DRC_PARTIDAS.DEBE, DRC_PARTIDAS.HABER
		FROM DRC_PARTIDAS LEFT OUTER JOIN
			DRC_POLIZAS ON DRC_PARTIDAS.NOPOLIZA = DRC_POLIZAS.NOPOLIZA AND DRC_PARTIDAS.EMPNIT = DRC_POLIZAS.EMPNIT LEFT OUTER JOIN
			DRC_CUENTAS ON DRC_PARTIDAS.CODCUENTA = DRC_CUENTAS.CODCUENTA AND DRC_PARTIDAS.EMPNIT = DRC_CUENTAS.EMPNIT
		WHERE (DRC_PARTIDAS.EMPNIT = '${empnit}')`;

		execute.Query(res,qry);

});

router.post('/partidas_listado_poliza', async(req, res) => {
	const {empnit,nopoliza} = req.body;

	let qry = `SELECT DRC_PARTIDAS.NOPOLIZA, 
			DRC_POLIZAS.DESPOLIZA, 
			DRC_POLIZAS.FECHA,
			DRC_PARTIDAS.ID AS IDPARTIDA, 
			DRC_PARTIDAS.NOPARTIDA, 
			DRC_PARTIDAS.CODCUENTA, 
			DRC_CUENTAS.DESCRIPCION AS DESCUENTA, 
			DRC_PARTIDAS.DESCRIPCION, 
			DRC_PARTIDAS.DEBE, 
			DRC_PARTIDAS.HABER
		FROM DRC_PARTIDAS LEFT OUTER JOIN
			DRC_POLIZAS ON DRC_PARTIDAS.NOPOLIZA = DRC_POLIZAS.NOPOLIZA AND DRC_PARTIDAS.EMPNIT = DRC_POLIZAS.EMPNIT LEFT OUTER JOIN
			DRC_CUENTAS ON DRC_PARTIDAS.CODCUENTA = DRC_CUENTAS.CODCUENTA AND DRC_PARTIDAS.EMPNIT = DRC_CUENTAS.EMPNIT
		WHERE (DRC_PARTIDAS.EMPNIT = '${empnit}') 
		AND (DRC_PARTIDAS.NOPOLIZA=${nopoliza})`;

		execute.Query(res,qry);

});




//***********************/
//POLIZAS
//***********************/
router.post("/polizas_listado", async(req,res)=>{
	
	const {empnit,activo} = req.body;

	let qry = `SELECT ID, NOPOLIZA, DESPOLIZA,FECHA FROM DRC_POLIZAS
	WHERE EMPNIT='${empnit}' AND ACTIVO='${activo}' 
	ORDER BY NOPOLIZA` ;
		
	execute.Query(res,qry);

});


router.post("/polizas_insert", async(req,res)=>{
	
	const {empnit,codigo,descripcion,fecha} = req.body;

	let qry = `INSERT INTO DRC_POLIZAS 
	(EMPNIT,FECHA,NOPOLIZA,DESPOLIZA,ACTIVO) 
	VALUES ('${empnit}','${fecha}','${codigo}','${descripcion}','SI')`;
	
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