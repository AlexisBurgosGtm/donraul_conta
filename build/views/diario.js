function getView(){
    let view = {
        tabs :()=>{
            return `
            <div class="panel-container show">
                <div class="row">
                    <div class="col-5">
                        <select class="form-control" id="cmbMes"></select>
                    </div>
                    <div class="col-5">
                        <select class="form-control" id="cmbAnio"></select>
                    </div>
                </div>

                <div class="panel-content">
                    <ul class="nav nav-pills nav-justified" style="height:0cm;" role="tablist">
                        <li class="nav-item hidden" style="height:0cm;" ><a class="nav-link active" data-toggle="tab" href="#panelListado" id="btnTabListado">L</a></li>
                        <li class="nav-item hidden" style="height:0cm;" ><a class="nav-link" data-toggle="tab" href="#panelPolizas" id="btnTabPolizas">P</a></li>
                        <li class="nav-item hidden" style="height:0cm;" ><a class="nav-link" data-toggle="tab" href="#panelCliente" id="btnTabCliente">x</a></li>
                    </ul>
                    <div class="tab-content py-2">

                        <div class="tab-pane fade active show" id="panelListado" role="tabpanel">
                            ${view.listado() + view.modalNuevo() + view.modalNuevaPoliza()}
                        </div>
                        
                        <div class="tab-pane fade" id="panelPolizas" role="tabpanel">
                            ${view.listadoPoliza()}
                        </div>

                        <div class="tab-pane fade" id="panelCliente" role="tabpanel">
                           
                        </div>
   
                    </div>
                </div>
            </div>
            `
        },
        listado: ()=>{
            return `
            <div class="card shadow p-2">
                <div class="card-header">
                    
                    <div class="row">
                        <div class="col-6">
                            <button class="btn btn-outline-secondary btn-circle btn-xl" id="btnListaPolizas">
                               <i class="fal fa-list"></i>
                            </button>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-info btn-md shadow" id="btnNuevaPoliza">
                                <i class="fal fa-book"></i>Nueva Póliza
                            </button>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-success btn-md shadow" id="btnNuevo">
                                <i class="fal fa-plus"></i>Nueva Partida
                            </button>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-striped">
                            <thead class="bg-trans-gradient text-white">
                                <tr>
                                    <td>POLIZA/FECHA</td>
                                    <td>DOCUMENTO</td>
                                    <td>CUENTA</td>
                                    <td>DESCRIPCION</td>
                                    <td>DEBE</td>
                                    <td>HABER</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblPartidas">
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `
        },
        modalNuevo:()=>{
            return `
            <div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-success text-white">
                            <h5 class="modal-title" id="">Detalle de la Nueva Partida</h5>
                        </div>
                        <div class="modal-body">

                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">Fecha</label>
                                        <input type="date" class="form-control" id="txtPFecha">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="negrita">Documento</label>
                                        <input type="number" class="form-control bg-amarillo" id="txtPNumero">
                                    </div>
                                </div>
                            </div>
                            
                            <hr class="solid">

                            <label class="text-campesino">Selección de la Póliza</label>

                            <div class="row">
                                <div class="col-lg-3 col-xl-3 col-sm-2 col-md-3">
                                    <div class="form-group">
                                        <label class="negrita">No.</label>
                                        <input type="number" class="form-control" id="txtPNoPoliza">
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-9 col-md-6 col-sm-10">
                                    <div class="form-group">
                                        <label class="negrita">Póliza</label>
                                        <select class="form-control" id="cmbPolizas">
                                        
                                        </select>
                                    </div>    
                                </div>
                            </div>

                            <hr class="solid">
                            <label class="text-campesino">Selección de la cuenta contable</label>
                            
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="negrita">Código</label>
                                        <select class="form-control" id="cmbPCodCuenta">
                                        
                                        </select>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <label class="negrita">Cuenta</label>
                                        <select class="form-control" id="cmbPDesCuenta">
                                        
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <hr class="solid">
                            <label class="text-campesino">Detalle del movimiento</label>

                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="negrita">Descripción</label>
                                        <input type="text" class="form-control" id="txtPDescripcion">
                                    </div>
                                </div>
                            </div>
                            
                            <hr class="solid">
                            
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="negrita">DEBE</label>
                                        <input type="text" class="form-control negrita border-success" id="txtPDebe">
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="negrita">HABER</label>
                                        <input type="text" class="form-control negrita border-danger" id="txtPHaber">
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="modal-footer">
                            
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-outline-secondary shadow" data-dismiss="modal" id="">
                                        CERRAR
                                    </button>
                                
                                </div>
                                <div class="col-6">
                                    <button type="button" class="btn btn-success shadow" id="btnGuardar">
                                        <i class="fal fa-save"></i>GUARDAR
                                    </button>    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        modalNuevaPoliza:()=>{
            return `
            <div class="modal fade" id="modalNuevaPoliza" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-info text-white">
                            <h5 class="modal-title" id="">Nueva Póliza</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label class="negrita">No. Póliza</label>
                                <input type="number" class="form-control col-4" id="txtNoPoliza">
                            </div>
                            <div class="form-group">
                                <label class="negrita">Descripción de la Póliza</label>
                                <input type="text" class="form-control" id="txtDesPoliza">
                            </div>

                        </div>

                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-outline-secondary shadow" data-dismiss="modal" id="">
                                        CERRAR
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button type="button" class="btn btn-info shadow" id="btnGuardarPoliza">
                                        <i class="fal fa-save"></i>GUARDAR
                                    </button>    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            `
        },
        listadoPoliza: ()=>{
            return `
            <div class="card shadow p-2">
                <div class="card-header">
                    
                    <div class="row">
                        <div class="col-4">
                            <button class="btn btn-outline-secondary btn-circle btn-xl" id="btnListado">
                                <i class="fal fa-arrow-left"></i>
                            </button>
                        </div>
                        <div class="col-8">
                            <div class="form-group">
                                <label>Seleccione una Póliza</label>
                                <select class="form-control" id="cmbPolizasLista">
                                
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-striped">
                            <thead class="bg-info text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>DOCUMENTO</td>
                                    <td>CUENTA</td>
                                    <td>DESCRIPCION</td>
                                    <td>DEBE</td>
                                    <td>HABER</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblPartidas2">
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `
        }
    };

    root.innerHTML = view.tabs();
};

function addListeners(){
  
    let cmbMes = document.getElementById('cmbMes');
    cmbMes.innerHTML = funciones.ComboMeses();

    let cmbAnio = document.getElementById('cmbAnio');
    cmbAnio.innerHTML = funciones.ComboAnio();
    
    let f = new Date();
    cmbMes.value = f.getMonth()+1; cmbAnio.value = f.getFullYear();

    //navegacion
    document.getElementById('btnListaPolizas').addEventListener('click',()=>{document.getElementById('btnTabPolizas').click()})
    document.getElementById('btnListado').addEventListener('click',()=>{document.getElementById('btnTabListado').click()})
    

    //POLIZAS
    let cmbPolizas = document.getElementById('cmbPolizas');
    cmbPolizas.addEventListener('change',()=>{
        document.getElementById('txtPNoPoliza').value = cmbPolizas.value;
    });

    let btnNuevaPoliza = document.getElementById('btnNuevaPoliza');
    btnNuevaPoliza.addEventListener('click',()=>{
        $('#modalNuevaPoliza').modal('show');
    });

    let btnGuardarPoliza = document.getElementById('btnGuardarPoliza');
    btnGuardarPoliza.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Crear esta nueva Póliza?')
        .then((value)=>{
            if(value==true){

                let codigo = document.getElementById('txtNoPoliza').value;
                let descripcion =document.getElementById('txtDesPoliza').value;

                insertPoliza(codigo,descripcion)
                .then(()=>{
                    funciones.Aviso('Póliza creada exitosamente!!')
                    getPolizas('cmbPolizas','cmbPolizasLista');
                    $('#modalNuevaPoliza').modal('hide');
                })

            }
        })
    });

    getPolizas('cmbPolizas','cmbPolizasLista');

    //PARTIDAS
    document.getElementById('txtPFecha').value = funciones.getFecha(); 

    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        $('#modalNuevo').modal('show');
    });

    let cmbPCodCuenta = document.getElementById('cmbPCodCuenta');
    let cmbPDesCuenta = document.getElementById('cmbPDesCuenta');
  
    cmbPCodCuenta.addEventListener('change',()=>{
        cmbPDesCuenta.value = cmbPCodCuenta.value;
    });

    cmbPDesCuenta.addEventListener('change',()=>{
        cmbPCodCuenta.value = cmbPDesCuenta.value;
    });

    //GUARDADO DE LA PARTIDA
    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Guardar esta Partida?')
        .then((value)=>{
            if(value==true){
                let fecha = document.getElementById('txtPFecha').value;
                let documento = document.getElementById('txtPNumero').value;
                let nopoliza = document.getElementById('txtPNoPoliza').value;
                let codcuenta = document.getElementById('cmbPCodCuenta').value;
                let descripcion = document.getElementById('txtPDescripcion').value;
                let debe = document.getElementById('txtPDebe').value || '0';
                let haber = document.getElementById('txtPHaber').value || '0';
                
                btnGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
                btnGuardar.disabled = true;

                insertPartida(fecha,documento,nopoliza,codcuenta,descripcion,debe,haber)
                .then(()=>{
                    funciones.Aviso('Movimiento registrado exitosamente!!');
                    getListado('tblPartidas');
                    cleanPartidaData();
                    $('#modalNuevo').modal('hide');
                    btnGuardar.innerHTML = '<i class="fal fa-save"></i>GUARDAR';
                    btnGuardar.disabled = false;
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar este movimiento');
                    btnGuardar.innerHTML = '<i class="fal fa-save"></i>GUARDAR';
                    btnGuardar.disabled = false;
                })


            }
        })
    });

    getListado('tblPartidas');
  
    getCuentas('cmbPCodCuenta','cmbPDesCuenta');
  
    
    //listado por pólizas
    let cmbPolizasLista = document.getElementById('cmbPolizasLista');
    cmbPolizasLista.addEventListener('change',()=>{
        getListado2('tblPartidas2','cmbPolizasLista');
    })

    getListado2('tblPartidas2','cmbPolizasLista');

    //anima las tabs
    funciones.slideAnimationTabs();
};


function InicializarVista(){
    getView();
    addListeners();
};

function getListado(idContainer){

    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;

    let strdata = ''; 

    axios.post('/diario/partidas_listado', {
        empnit:GlobalEmpnit
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{                    
                    strdata = strdata + `<tr class=''>
                    <td>${rows.DESPOLIZA}(No.${rows.NOPOLIZA})
                        <br>
                        <small class="text-campesino negrita">Fecha: ${funciones.cleanFecha(rows.FECHA)}</small>
                    </td>
                    <td class="negrita">${rows.NOPARTIDA}</td>
                    <td>${rows.DESCUENTA}
                        <br>
                        <small class="text-campesino negrita">${rows.CODCUENTA}</small>
                    </td>
                    <td>${rows.DESCRIPCION}</td>
                    <td>${funciones.setMoneda(rows.DEBE,'Q')}</td>
                    <td>${funciones.setMoneda(rows.HABER,'Q')}</td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-circle" onclick="">
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

function getListado2(idContainer,idCmbPoliza){

    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
    let nopoliza = document.getElementById(idCmbPoliza);

    let strdata = ''; 

    axios.post('/diario/partidas_listado_poliza', {
        empnit:GlobalEmpnit,
        nopoliza:nopoliza.value
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{                    
                    strdata = strdata + `<tr class=''>
                    <td>${funciones.cleanFecha(rows.FECHA)}</td>
                    <td class="negrita">${rows.NOPARTIDA}</td>
                    <td>${rows.DESCUENTA}
                        <br>
                        <small class="text-campesino negrita">${rows.CODCUENTA}</small>
                    </td>
                    <td>${rows.DESCRIPCION}</td>
                    <td>${funciones.setMoneda(rows.DEBE,'Q')}</td>
                    <td>${funciones.setMoneda(rows.HABER,'Q')}</td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-circle" onclick="">
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

function cleanPartidaData(){
    
    //document.getElementById('txtPFecha').value
    //document.getElementById('txtPNumero').value;
    //document.getElementById('txtPNoPoliza').value;
    //document.getElementById('cmbPCodCuenta').value;
    document.getElementById('txtPDescripcion').value = '';
    document.getElementById('txtPDebe').value = '';
    document.getElementById('txtPHaber').value = '';

};


function insertPartida(fecha,numero,nopoliza,codcuenta,descripcion,debe,haber){
    return new Promise((resolve,reject)=>{
        axios.post('/diario/partidas_insert',{
           empnit:GlobalEmpnit,
           fecha:fecha,
           numero:numero,
           nopoliza:nopoliza,
           codcuenta:codcuenta,
           descripcion:descripcion,
           debe:debe,
           haber:haber
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

function getCuentas(idContenedorCodigos, idContenedorDescripciones){

    let container = document.getElementById(idContenedorCodigos);
    container.innerHTML = GlobalLoader;

    let containerDesc = document.getElementById(idContenedorDescripciones);
    containerDesc.innerHTML = GlobalLoader;

    let strdata = ''; 
    let strDesc = '';

    axios.post('/cuentas/listado', {
        empnit:GlobalEmpnit,
        activo:'SI'
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{                    
                    strdata = strdata + `<option value="${rows.CODIGO}">${rows.CODIGO}</option>`;
                    strDesc = strDesc + `<option value="${rows.CODIGO}">${rows.DESCRIPCION}</option>`;             
        })
        container.innerHTML = strdata;
        containerDesc.innerHTML = strDesc;
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = ''; strDesc = '';
        container.innerHTML = 'No se pudo cargar la lista';
        containerDesc.innerHTML ='No se pudo cargar la lista';
    });
    

};


function getPolizas(idContainer,idContainer2){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
    let container2 = document.getElementById(idContainer2);
    container2.innerHTML = GlobalLoader;        

    let strdata = ''; 

    axios.post('/diario/polizas_listado', {
        empnit:GlobalEmpnit,
        activo:'SI'
    })
    .then((response) => {
        const data = response.data.recordset;
        
        data.map((rows)=>{                    
                    strdata = strdata + `
                    <option value="${rows.NOPOLIZA}">${rows.NOPOLIZA}-${rows.DESPOLIZA}</option>
                    `             
        })
        container.innerHTML = strdata;
        container2.innerHTML = strdata;
        try {
            document.getElementById('txtPNoPoliza').value= container.value;
        } catch (error) {
            
        }
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = '';
        container2.innerHTML='';
    });
  
};

function insertPoliza(numero,descripcion){

    return new Promise((resolve,reject)=>{
        axios.post('/diario/polizas_insert',{
           empnit:GlobalEmpnit,
           codigo:numero,
           descripcion:descripcion
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
