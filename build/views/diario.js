function getView(){
    let view = {
        tabs :()=>{
            return `
            <div class="panel-container show" id="containerPartidas">
                
                <div class="panel-content">
                    <ul class="nav nav-pills nav-justified" style="height:0cm;" role="tablist">
                        <li class="nav-item hidden" style="height:0cm;" ><a class="nav-link active" data-toggle="tab" href="#panelListado" id="btnTabListado">L</a></li>
                        <li class="nav-item hidden" style="height:0cm;" ><a class="nav-link" data-toggle="tab" href="#panelPolizas" id="btnTabPolizas">P</a></li>
                        <li class="nav-item hidden" style="height:0cm;" ><a class="nav-link" data-toggle="tab" href="#panelNuevaPartida" id="btnTabPartida">x</a></li>
                    </ul>
                    <div class="tab-content py-2">

                        <div class="tab-pane fade active show" id="panelListado" role="tabpanel">
                            <h5>Pólizas del Mes</h5>
                            <div class="row">
                                <div class="col-5">
                                    <select class="form-control" id="cmbMes"></select>
                                </div>
                                <div class="col-5">
                                    <select class="form-control" id="cmbAnio"></select>
                                </div>
                            </div>

                            ${view.listado() + view.modalNuevaPoliza()}
                        </div>
                        
                        <div class="tab-pane fade" id="panelPolizas" role="tabpanel">
                         
                        </div>

                        <div class="tab-pane fade" id="panelNuevaPartida" role="tabpanel">
                           ${view.nuevaPartida() + view.modalNuevaPartida()}
                        </div>
   
                    </div>
                </div>
            </div>
            `
        },
        listado: ()=>{
            return `
            <div class="card shadow p-2" id="containerPolizas">
                
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                            <input type="text" class="form-control" id="txtBuscarPoliza" placeholder="Escriba para buscar...">
                        </div>
                        <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                            <button class="btn btn-info btn-md shadow" id="btnNuevaPoliza">
                                <i class="fal fa-plus"></i>Nueva Poliza
                            </button>
                        </div>
                        
                    </div>
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-striped" id="tablePolizas">
                            <thead class="bg-trans-gradient text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>NUMERO</td>
                                    <td>DESCRIPCION</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblPolizas">
                            
                            </tbody>
                        </table>
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
                                <input type="number" class="form-control col-sm-12 col-lg-4 col-xl-4 col-md-6" id="txtNoPoliza">
                            </div>
                            <div class="form-group">
                                <label class="negrita">Fecha Póliza</label>
                                <input type="date" class="form-control col-sm-12 col-lg-4 col-xl-4 col-md-6" id="txtFechaPoliza">
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
        nuevaPartida: ()=>{
            return `
            <div class="row">
                <div class="card shadow p-4 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <label class="text-campesino">Seleccione la Póliza</label>

                    <div class="row">
                        <div class="col-lg-3 col-xl-3 col-sm-2 col-md-3">
                            <div class="form-group">
                                <label class="negrita">No.</label>
                                <input type="number" disabled="true" class="form-control form-control-sm" id="txtPNoPoliza">
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-10">
                            <div class="form-group">
                                <label class="negrita">Póliza</label>
                                <input type="text" disabled="true" class="form-control form-control-sm" id="cmbPolizas">
                                        
                            </div>    
                        </div>
                    </div>
                                                        
                    <div class="row">
                        <div class="col-8">
                            <div class="form-group">
                                <label class="negrita">Fecha</label>
                                <input type="date" disabled="true" class="form-control form-control-sm" id="txtPFecha">
                            </div>
                        </div>

                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-success shadow" id="btnNuevaPart">
                                <i class="fal fa-plus"></i>
                            </button>
                        </div>
                   
                    </div>                                      
       
                </div>

                
            </div>

            <div class="row">
                <div class="table-responsive col-12">
                    <table class="table table-responsive table-hover table-striped">
                        <thead class="bg-campesino text-white">
                            <tr>
                                <td>DOCUMENTO</td>
                                <td>CUENTA</td>
                                <td>DESCRIPCION</td>
                                <td>DEBE</td>
                                <td>HABER</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblPartida">
                        
                        </tbody >
                        <tfoot class="bg-amarillo">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><h5 class="negrita" id="lbTotalDebe">0</h5></td>
                            <td><h5 class="negrita"  id="lbTotalHaber">0</h5></td>
                            <td></td>
                        </tfoot>
                        
                    </table>
                    <div class="col-12" id="divSt"></div>
                    
                </div>
            </div>
            
            <div class="fixed-left">
                <button class="btn btn-outline-secondary btn-circle btn-xl shadow" id="btnAtrasPartida">
                    <i class="fal fa-arrow-left"></i>
                </button>        
            </div>
                                `
        },
        modalNuevaPartida:()=>{
            return `
            <div class="modal fade" id="modalNuevaPartida" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-info text-white">
                          
                            <button class="btn btn-info border-white btn-sm" data-dismiss="modal">
                                <<
                            </button>
                            
                            <h5 class="modal-title" id="">Nueva Partida</h5>
                          
                        </div>
                        <div class="modal-body">

                            <div class="card shadow p-4">

                                <div class="row">
                                    <div class="form-group">
                                        <label class="negrita">Documento</label>
                                        <input type="number" class="form-control form-control-sm bg-amarillo col-6" id="txtPNumero">
                                    </div>
                                </div>

                                <label class="text-campesino">Selección de la cuenta contable</label>
                                        
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label class="negrita">Código</label>
                                            <select class="form-control form-control-sm" id="cmbPCodCuenta">
                                                    
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <div class="form-group">
                                            <label class="negrita">Cuenta</label>
                                            <select class="form-control form-control-sm" id="cmbPDesCuenta">
                                                    
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                                                    
                            </div>
                            <div class="card p-4">                      
                                <div class="form-group">
                                    <label class="negrita">Descripción</label>
                                    <input type="text" class="form-control form-control-sm" id="txtPDescripcion">
                                </div>
                            </div>

                        </div>

                        <div class="modal-footer">

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
                                <div class="col-4">
                                    <button type="button" class="btn btn-success btn-xl btn-circle shadow" id="btnGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>
                                </div>

                            </div>

                        </div>

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
    //document.getElementById('btnListaPolizas').addEventListener('click',()=>{document.getElementById('btnTabPolizas').click()})
    //document.getElementById('btnListado').addEventListener('click',()=>{document.getElementById('btnTabListado').click()})
    document.getElementById('btnAtrasPartida').addEventListener('click',()=>{document.getElementById('btnTabListado').click()})

    //POLIZAS
    let txtBuscarPoliza = document.getElementById('txtBuscarPoliza');
    txtBuscarPoliza.addEventListener('keydown',()=>{
        funciones.FiltrarTabla('tablePolizas','txtBuscarPoliza');
    })
    
     let btnNuevaPoliza = document.getElementById('btnNuevaPoliza');
    btnNuevaPoliza.addEventListener('click',()=>{
        document.getElementById('txtFechaPoliza').value = funciones.getFecha(); 
        $('#modalNuevaPoliza').modal('show');
    });

    let btnGuardarPoliza = document.getElementById('btnGuardarPoliza');
    btnGuardarPoliza.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Crear esta nueva Póliza?')
        .then((value)=>{
            if(value==true){

                let codigo = document.getElementById('txtNoPoliza').value;
                let descripcion =document.getElementById('txtDesPoliza').value;
                let fecha = funciones.devuelveFecha('txtFechaPoliza');
                
                btnGuardarPoliza.innerHTML = '<i class="fal fa-save fa-spin"></i>'
                btnGuardarPoliza.disabled = true;

                insertPoliza(codigo,descripcion,fecha)
                .then(()=>{
                    funciones.Aviso('Póliza creada exitosamente!!')
                    getListaPolizas('tblPolizas',cmbMes.value,cmbAnio.value);

                    btnGuardarPoliza.innerHTML = '<i class="fal fa-save"></i> GUARDAR'
                    btnGuardarPoliza.disabled = false;

                    $('#modalNuevaPoliza').modal('hide');
                })
                .catch(()=>{
                    btnGuardarPoliza.innerHTML = '<i class="fal fa-save"></i> GUARDAR'
                    btnGuardarPoliza.disabled = false;
                    funciones.AvisoError('No se pudo guardar la Póliza');

                })

            }
        })
    });

    //PARTIDAS
    document.getElementById('txtPFecha').value = funciones.getFecha(); 

    let btnNuevaPart = document.getElementById('btnNuevaPart');
    btnNuevaPart.addEventListener('click',()=>{
        $('#modalNuevaPartida').modal('show');
    });


    let cmbPCodCuenta = document.getElementById('cmbPCodCuenta');
    let cmbPDesCuenta = document.getElementById('cmbPDesCuenta');


    let lbTotalDebe =document.getElementById('lbTotalDebe');
    let lbTotalHaber = document.getElementById('lbTotalHaber');

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
                let descripcion = document.getElementById('txtPDescripcion').value || 'SN';
                let debe = document.getElementById('txtPDebe').value || '0';
                let haber = document.getElementById('txtPHaber').value || '0';
                
                btnGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
                btnGuardar.disabled = true;

                insertPartida(fecha,documento,nopoliza,codcuenta,descripcion,debe,haber)
                .then(()=>{
                    funciones.Aviso('Movimiento registrado exitosamente!!');
                                      
                    cleanPartidaData();

                    btnGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    btnGuardar.disabled = false;
                    
                    $('#modalNuevaPartida').modal('hide');
                    
                    getListado3('tblPartida','txtPNoPoliza');
                    
                    
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar este movimiento');
                    btnGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    btnGuardar.disabled = false;
                })


            }
        })
    });

    lbTotalDebe.innerText = "0.00"
    lbTotalHaber.innerText = "0.00"
     
    getCuentas('cmbPCodCuenta','cmbPDesCuenta');
  
    getListaPolizas('tblPolizas',cmbMes.value,cmbAnio.value);



    //anima las tabs
    funciones.slideAnimationTabs();
};

function InicializarVista(){
    getView();
    addListeners();
};

//OBTIENE EL LISTADO DE PARTIDAS SEGÚN UNA PÓLIZA
function getListado3(idContainer,idCmbPoliza){

    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
    let nopoliza = document.getElementById(idCmbPoliza);

    let strdata = ''; 
    let debe =0;
    let haber =0;

    axios.post('/diario/partidas_listado_poliza', {
        empnit:GlobalEmpnit,
        nopoliza:nopoliza.value
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{                    
                    strdata = strdata + `<tr class='border-bottom border-secondary'>
                    <td class="negrita">${rows.NOPARTIDA}</td>
                    <td>${rows.DESCUENTA}
                        <br>
                        <small class="text-campesino negrita">${rows.CODCUENTA}</small>
                    </td>
                    <td>${rows.DESCRIPCION}</td>
                    <td>${funciones.setMoneda(rows.DEBE,'Q')}</td>
                    <td>${funciones.setMoneda(rows.HABER,'Q')}</td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-circle" onclick="eliminarPartida(${rows.IDPARTIDA})" id="btnEliminar${rows.IDPARTIDA.toString()}">
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                </tr>`
                debe += Number(rows.DEBE) || 0;
                haber += Number(rows.HABER) || 0;             
        })
        container.innerHTML = strdata;
        document.getElementById('lbTotalDebe').innerText = funciones.setMoneda(debe,'Q');
        document.getElementById('lbTotalHaber').innerText = funciones.setMoneda(haber,'Q');
        getCuadrePartida(debe,haber);
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = 'No se pudo cargar la lista';
        document.getElementById('lbTotalDebe').innerText = '-';
        document.getElementById('lbTotalHaber').innerText = '-';
    });
    
};

function getCuadrePartida(debe,haber){
    let div =document.getElementById('divSt')

    if(Number(debe)==Number(haber)){
        div.innerHTML = ``
    }

    if(Number(debe)>Number(haber)){
        div.innerHTML = `<div class="card bg-danger text-white">
                <h5>Partida no Cuadrada, DEBE mayor al HABER</h5>
            </div>`
    }

    if(Number(debe)<Number(haber)){
        div.innerHTML = `<div class="card bg-danger text-white">
            <h5>Partida no Cuadrada, HABER mayor al DEBE</h5>
        </div>`
    }

}

function eliminarPartida(id){

    funciones.Confirmacion('¿Está seguro que desea ELIMINAR esta Partida?')
    .then((value)=>{
        if(value==true){

            let btnElim = document.getElementById('btnEliminar' + id.toString());
            btnElim.disabled = true;
            btnElim.innerHTML = '<i class="fal fa-trash fa-spin"></i>';
    
            deletePartida(id)
            .then(()=>{
                funciones.Aviso('Partida eliminada exitosamente!!');
                btnElim.disabled = false;
                btnElim.innerHTML = '<i class="fal fa-trash"></i>';
                getListado3('tblPartida','txtPNoPoliza');
    
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo eliminar esta Partida');
                btnElim.disabled = false;
                btnElim.innerHTML = '<i class="fal fa-trash"></i>';
            })

        }
    })
    
};

function deletePartida(id){
    return new Promise((resolve,reject)=>{
        axios.post('/diario/partidas_delete',{
           empnit:GlobalEmpnit,
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

function insertPoliza(numero,descripcion,fecha){

    return new Promise((resolve,reject)=>{
        axios.post('/diario/polizas_insert',{
           empnit:GlobalEmpnit,
           codigo:numero,
           descripcion:descripcion,
           fecha:fecha
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

function getListaPolizas(idContainer,mes,anio){
  
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
  
    let strdata = ''; 

    axios.post('/diario/polizas_listado', {
        empnit:GlobalEmpnit,
        activo:'SI',
        mes:mes,
        anio:anio
    })
    .then((response) => {
        const data = response.data.recordset;
        
        data.map((rows)=>{                    
                    strdata = strdata + `
                    <tr class="border-bottom border-primary">
                        <td>${funciones.cleanFecha(rows.FECHA)}</td>
                        <td>${rows.NOPOLIZA}</td>
                        <td>${rows.DESPOLIZA}</td>
                        <td>
                            <button class="btn btn-info btn-circle btn-sm" onclick="gotoPartida(${rows.NOPOLIZA},'${rows.DESPOLIZA}','${funciones.cleanFecha(rows.FECHA)}')">
                                <i class="fal fa-plus"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-danger btn-circle btn-sm" onclick="">
                                <i class="fal fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    `             
        })
        container.innerHTML = strdata;
       
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = '';
    });
  
};

function gotoPartida(nopoliza,despoliza,fecha){

    document.getElementById('txtPNoPoliza').value = nopoliza;
    document.getElementById('cmbPolizas').value = despoliza;
    document.getElementById('txtPFecha').value = fecha;

    getListado3('tblPartida','txtPNoPoliza');

    document.getElementById('btnTabPartida').click();

};


