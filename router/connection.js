const configLocal = {
	user: 'iEx', password: 'iEx', 
	server:'DEVELOPER\\SQLEXPRESS',
	database: 'DONRAULCON', 
	pool: {
		max: 100,min: 0,idleTimeoutMillis: 30000
	}};



	const config = {
		user: 'DB_A6478C_donraul_admin',
		password: 'razors1805',
		server: 'sql5006.site4now.net',
		database: 'DB_A6478C_donraul',
		pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
	};
	
const sql = require('mssql');

let execute = {
	Query : (res,sqlqry)=>{	
		
		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					res.send(err.message)
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
		  })
		} catch (error) {
			console.log(error);
		  res.send('Error al ejecutar la consulta: ' + error)   
		  sql.close();
		}
	},
	QueryNoSend : (res,sqlqry)=>{
		
		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {				
				if(err){
					res.send(err.message)
				}else{
					res.send('Ejecución exitosa');
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
		  })
		} catch (error) {
			console.log(error);
		  res.send('Error al ejecutar la consulta: ' + error)   
		  sql.close();
		}
	},
	start:()=>{
		try {
			sql.connect(config).then(()=>{sql.close();})
			console.log('primera conexion exitosa...');
		} catch (error) {
			console.log('primera conexion fallo: ' & error);
		}
	},
	existencia:(empnit,codprod)=>{

		let sqlqry = `SELECT ISNULL(INV_INTERNO,0) AS INVENTARIO FROM PRODUCTOS WHERE EMP_NIT='${empnit}' AND CODPROD='${codprod}' `;
		let valor;

		try {
			const pool1 = new sql.ConnectionPool(config, err => {
			  new sql.Request(pool1)
			  .query(sqlqry, (err, result) => {
				  if(err){
					  valor = 0;
				  }else{
					  valor = result;
				  }					
			  })
			  sql.close();
			  return valor;  
			})
			pool1.on('error', err => {
				console.log('error sql = ' + err);
				sql.close();
				return 0;
			})
		  } catch (error) {
			sql.close();
			return 0;
		  }
	}
}

module.exports = execute;

