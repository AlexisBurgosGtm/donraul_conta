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
                                <input type="text" class="form-control border-info shadow" id="txtBuscar">
                            </div>
                            <div class="col-6 text-right">
                                <button class="btn btn-success btn-xl btn-circle shadow" id="btnNuevo">
                                    <i class="fal fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="table-responsive col-12">
                            <table class="table table-responsive table-bordered">
                                <thead class="bg-primary text-white">
                                    <tr>
                                        <td>Código</td>
                                        <td>Cuenta</td>
                                        <td>Nivel</td>
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
                            <div class="form-group">
                                <label>Nivel</label>
                                <select class="form-control col-6" id="cmbNivel">
                                    <option value="1">Nivel 1</option>
                                    <option value="2">Nivel 2</option>
                                    <option value="3">Nivel 3</option>
                                    <option value="4">Nivel 4</option>
                                </select>
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
                            <div class="form-group">
                                <label>Nivel</label>
                                <select class="form-control col-6" id="cmbNivelE">
                                    <option value="1">Nivel 1</option>
                                    <option value="2">Nivel 2</option>
                                    <option value="3">Nivel 3</option>
                                    <option value="4">Nivel 4</option>
                                </select>
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

        funciones.Confirmacion('¿Está seguro que desea guardar esta Cuenta?')
        .then((value)=>{
            if(value==true){
                
                insertCuenta(txtCodigo.value, txtDescripcion.value,cmbNivel.value)
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

        funciones.Confirmacion('¿Está seguro que desea EDITAR esta Cuenta?')
        .then((value)=>{
            if(value==true){
                
                editCuenta(txtIdE.value,txtCodigo.value, txtDescripcion.value,cmbNivel.value)
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
                    <td>${rows.NIVEL}</td>
                    <td>
                        <button class="btn btn-info btn-sm btn-circle" onclick="editarCuenta(${rows.ID},'${rows.CODIGO}','${rows.DESCRIPCION}','${rows.NIVEL}')">
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

function insertCuenta(codigo,descripcion,nivel){
    return new Promise((resolve,reject)=>{
        axios.post('/cuentas/insert',{
           empnit:GlobalEmpnit,
           cod:codigo,
           descripcion:descripcion,
           nivel:nivel
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


function editarCuenta(id,codigo,descripcion,nivel){

    
   document.getElementById('txtIdE').value=id;
   document.getElementById('txtCodE').value=codigo;
   document.getElementById('txtDescripcionE').value=descripcion;
   document.getElementById('cmbNivelE').value=nivel;

   $('#modalEdit').modal('show');

};

function editCuenta(id,codigo,descripcion,nivel){
    return new Promise((resolve,reject)=>{
        axios.post('/cuentas/edit',{
           empnit:GlobalEmpnit,
           id:id,
           cod:codigo,
           descripcion:descripcion,
           nivel:nivel
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