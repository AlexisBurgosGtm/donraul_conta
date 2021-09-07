function getView(){
    let view = {
        encabezado:()=>{
            return `
            <div class="card col-12">
                <div class="card-header">
                    <h3>Gestión de Cuentas Contables</h3>
                </div>
                <div class="card-body">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="form-control border-info shadow" id="txtBuscar" placeholder="Escriba para buscar...">
                            </div>
                            <div class="col-6 text-right">
                                <button class="btn btn-success btn-xl btn-circle shadow" id="btnNuevo">
                                    <i class="fal fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="table-responsive col-12">
                            <table class="table table-responsive table-bordered" id="tableCuentas">
                                <thead class="bg-primary text-white">
                                    <tr>
                                        <td>Código</td>
                                        <td>Cuenta</td>                                     
                                        <td>D/A</td>
                                        <td>P/D</td>
                                        <td>Nivel</td>
                                        <td>Est Fin</td>
                                        <td>Tipo EF</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblCuentas">
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>
                    
                </div>
            </div>
            `
        },
        modalNuevo:()=>{
            return `
            <div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                           
                            <h5 class="modal-title" id="">Datos de la Cuenta</h5>
                           
                        </div>
                        <div class="modal-body">
                            
                            <div class="form-group">
                                <label>Codigo</label>
                                <input autocomplete="off" type="text" class="form-control col-4" id="txtCod">
                            </div>
                            <div class="form-group">
                                <label>Descripción</label>
                                <input autocomplete="off" type="text" class="form-control" id="txtDescripcion">
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">D/A</label>
                                        <select class="form-control" id="cmbDA">
                                            <option value="A">A</option>
                                            <option value="D">D</option>
                                        </select>
                                    </div>    
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">P/D</label>
                                        <select class="form-control" id="cmbPD">
                                            <option value="P">A</option>
                                            <option value="D">D</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Nivel</label>
                                <select class="form-control col-6" id="cmbNivel">
                                    <option value="1">Nivel 1</option>
                                    <option value="2">Nivel 2</option>
                                    <option value="3">Nivel 3</option>
                                    <option value="4">Nivel 4</option>
                                    <option value="5">Nivel 5</option>
                                </select>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">Est Fin</label>
                                        <select class="form-control" id="cmbEstFin">
                                            <option value="ACTIVO">ACTIVO</option>
                                            <option value="CAPITAL">CAPITAL</option>
                                            <option value="COSTOS">COSTOS</option>
                                            <option value="GASTOS">GASTOS</option>
                                            <option value="INGRESOS">INGRESOS</option>
                                            <option value="PASIVO">PASIVO</option>
                                        </select>
                                    </div>    
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">Tipo EF</label>
                                        <select class="form-control" id="cmbTipoEF">
                                            <option value="BG">BG</option>
                                            <option value="CP">CP</option>
                                            <option value="ER">ER</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-secondary" data-dismiss="modal" id="btnCerrarModal">Cerrar</button>
                            
                            <button type="button" class="btn btn-success" id="btnGuardar">
                                <i class="fal fa-save"></i>Guardar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            `
        },
        modalEdit:()=>{
            return `
            <div class="modal fade" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                           
                            <h5 class="modal-title" id="">Edición de la Cuenta</h5>
                           
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Codigo Sistema</label>
                                <input disabled="true" type="text" class="form-control col-4" id="txtIdE">
                            </div>
                            <div class="form-group">
                                <label>Codigo</label>
                                <input autocomplete="off" type="text" class="form-control col-4" id="txtCodE">
                            </div>
                            <div class="form-group">
                                <label>Descripción</label>
                                <input autocomplete="off" type="text" class="form-control" id="txtDescripcionE">
                            </div>


                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">D/A</label>
                                        <select class="form-control" id="cmbDAE">
                                            <option value="A">A</option>
                                            <option value="D">D</option>
                                        </select>
                                    </div>    
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">P/D</label>
                                        <select class="form-control" id="cmbPDE">
                                            <option value="P">A</option>
                                            <option value="D">D</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Nivel</label>
                                <select class="form-control col-6" id="cmbNivelE">
                                    <option value="1">Nivel 1</option>
                                    <option value="2">Nivel 2</option>
                                    <option value="3">Nivel 3</option>
                                    <option value="4">Nivel 4</option>
                                    <option value="5">Nivel 5</option>
                                </select>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">Est Fin</label>
                                        <select class="form-control" id="cmbEstFinE">
                                            <option value="ACTIVO">ACTIVO</option>
                                            <option value="CAPITAL">CAPITAL</option>
                                            <option value="COSTOS">COSTOS</option>
                                            <option value="GASTOS">GASTOS</option>
                                            <option value="INGRESOS">INGRESOS</option>
                                            <option value="PASIVO">PASIVO</option>
                                        </select>
                                    </div>    
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">Tipo EF</label>
                                        <select class="form-control" id="cmbTipoEFE">
                                            <option value="BG">BG</option>
                                            <option value="CP">CP</option>
                                            <option value="ER">ER</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-secondary" data-dismiss="modal" id="btnCerrarModalE">Cerrar</button>
                            
                            <button type="button" class="btn btn-success" id="btnGuardarE">
                                <i class="fal fa-save"></i>Guardar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.encabezado() + view.modalNuevo() + view.modalEdit();

};

function addListeners(){

   let btnNuevo = document.getElementById('btnNuevo');
   btnNuevo.addEventListener('click',()=>{
        document.getElementById('txtCod').value='';
        document.getElementById('txtDescripcion').value='';
        $('#modalNuevo').modal('show');
   })
  
 


   document.getElementById('btnCerrarModal').addEventListener('click',()=>{
        $('#modalNuevo').modal('hide');
   });

   let btnGuardar = document.getElementById('btnGuardar');
   btnGuardar.addEventListener('click',()=>{

        let txtCodigo = document.getElementById('txtCod');
        let txtDescripcion = document.getElementById('txtDescripcion');
        let cmbNivel = document.getElementById('cmbNivel');
        let cmbDA = document.getElementById('cmbDA');
        let cmbPD = document.getElementById('cmbPD');
        let cmbEstFin = document.getElementById('cmbEstFin');
        let cmbTipoEF = document.getElementById('cmbTipoEF');

        funciones.Confirmacion('¿Está seguro que desea guardar esta Cuenta?')
        .then((value)=>{
            if(value==true){
                
                insertCuenta(txtCodigo.value, txtDescripcion.value,cmbNivel.value,cmbDA.value,cmbPD.value,cmbEstFin.value,cmbTipoEF.value)
                .then(()=>{
                    $('#modalNuevo').modal('hide');
                    funciones.Aviso('Cuenta guardada exitosamente !!');
                    getListado('tblCuentas');
                    txtCodigo.value = '';
                    txtDescripcion.value = '';
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo Guardar esta Cuenta')
                })  


            }
        })

   });



    document.getElementById('btnCerrarModalE').addEventListener('click',()=>{
        $('#modalEdit').modal('hide');
    });

    let btnGuardarE = document.getElementById('btnGuardarE');
    btnGuardarE.addEventListener('click',()=>{

        let txtIdE = document.getElementById('txtIdE');
        let txtCodigo = document.getElementById('txtCodE');
        let txtDescripcion = document.getElementById('txtDescripcionE');
        let cmbNivel = document.getElementById('cmbNivelE');
        let cmbDA = document.getElementById('cmbDAE');
        let cmbPD = document.getElementById('cmbPDE');
        let cmbEstFin = document.getElementById('cmbEstFinE');
        let cmbTipoEF = document.getElementById('cmbTipoEFE');
       

        funciones.Confirmacion('¿Está seguro que desea EDITAR esta Cuenta?')
        .then((value)=>{
            if(value==true){
                
                editCuenta(txtIdE.value,txtCodigo.value, txtDescripcion.value,cmbNivel.value,cmbDA.value,cmbPD.value,cmbEstFin.value,cmbTipoEF.value)
                .then(()=>{
                    $('#modalEdit').modal('hide');
                    funciones.Aviso('Cuenta actualizada exitosamente !!');
                    getListado('tblCuentas');
                    txtCodigo.value = '';
                    txtDescripcion.value = '';
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo Editar esta Cuenta')
                })  


            }
        })

    });

    document.getElementById('txtBuscar').addEventListener('keydown',()=>{
        funciones.FiltrarTabla('tableCuentas','txtBuscar');
    })
    
    getListado('tblCuentas');

};

function InicializarVista(){
    getView();
    addListeners();
};



function getListado(idContenedor){

    let container = document.getElementById(idContenedor);
    container.innerHTML = GlobalLoader;
            
    let strdata = ''; 

    axios.post('/cuentas/listado', {
        empnit:GlobalEmpnit,
        activo:'SI'
    })
    .then((response) => {
        const data = response.data.recordset;
        
        data.map((rows)=>{                    
                    strdata = strdata + `<tr class=''>
                    <td>${rows.CODIGO}</td>
                    <td>${rows.DESCRIPCION}</td>
                    <td>${rows.DA}</td>
                    <td>${rows.PD}</td>
                    <td>${rows.NIVEL}</td>
                    <td>${rows.ESTFIN}</td>
                    <td>${rows.TIPOEF}</td>
                    <td>
                        <button class="btn btn-info btn-sm btn-circle" 
                        onclick="editarCuenta(${rows.ID},'${rows.CODIGO}','${rows.DESCRIPCION}','${rows.NIVEL}','${rows.DA}','${rows.PD}','${rows.ESTFIN}','${rows.TIPOEF}')">
                            <i class="fal fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-circle" onclick="eliminarCuenta(${rows.ID})">
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                </tr>`             
        })
        container.innerHTML = strdata;
        

    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = 'No se pudo cargar la lista';
    });
    

};

function insertCuenta(codigo,descripcion,nivel,da,pd,estfin,tipoef){
    return new Promise((resolve,reject)=>{
        axios.post('/cuentas/insert',{
           empnit:GlobalEmpnit,
           cod:codigo,
           descripcion:descripcion,
           nivel:nivel,
           da:da,
           pd:pd,
           estfin:estfin,
           tipoef:tipoef
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve();             
            }else{
                reject();
            }               
        }, (error) => {
            reject();
        });
    })
};


function editarCuenta(id,codigo,descripcion,nivel,da,pd,estfin,tipoef){

    
   document.getElementById('txtIdE').value=id;
   document.getElementById('txtCodE').value=codigo;
   document.getElementById('txtDescripcionE').value=descripcion;
   document.getElementById('cmbNivelE').value=nivel;
   document.getElementById('cmbDAE').value = da;
   document.getElementById('cmbPDE').value = pd;
   document.getElementById('cmbEstFinE').value = estfin;
   document.getElementById('cmbTipoEFE').value = tipoef;

   $('#modalEdit').modal('show');

};

function editCuenta(id,codigo,descripcion,nivel,da,pd,estfin,tipoef){
    return new Promise((resolve,reject)=>{
        axios.post('/cuentas/edit',{
           empnit:GlobalEmpnit,
           id:id,
           cod:codigo,
           descripcion:descripcion,
           nivel:nivel,
           da:da,
           pd:pd,
           estfin:estfin,
           tipoef:tipoef
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve();             
            }else{
                reject();
            }               
        }, (error) => {
            reject();
        });
    })
};


function eliminarCuenta(id){
    funciones.Confirmacion('¿Está seguro que desea ELIMINAR esta cuenta?')
    .then((value)=>{
        if(value==true){

            deleteCuenta(id)
            .then(()=>{
                funciones.Aviso('Cuenta Eliminada Exitosamente!!')
                getListado('tblCuentas');
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo eliminar esta cuenta')
            });

        }
    })
};

function deleteCuenta(id){
    return new Promise((resolve,reject)=>{
        axios.post('/cuentas/delete',{
           id:id
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve();             
            }else{
                reject();
            }               
        }, (error) => {
            reject();
        });
    })
};