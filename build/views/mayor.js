function getView(){
    let view = {
        tabs :()=>{
            return `
           
            <div class="panel-container show" id="">
                <h3 class="text-campesino">Libro Mayor</h3>
                <div class="panel-content">
                    <ul class="nav nav-pills nav-justified" style="height:0cm;" role="tablist">
                        <li class="nav-item hidden" style="height:0cm;" ><a class="nav-link active" data-toggle="tab" href="#panelListado" id="btnTabListado">L</a></li>
                        <li class="nav-item hidden" style="height:0cm;" ><a class="nav-link" data-toggle="tab" href="#panelPolizas" id="btnTabPolizas">P</a></li>
                        <li class="nav-item hidden" style="height:0cm;" ><a class="nav-link" data-toggle="tab" href="#panelNuevaPartida" id="btnTabPartida">x</a></li>
                    </ul>
                    <div class="tab-content py-2">

                        <div class="tab-pane fade active show" id="panelListado" role="tabpanel">
                          
                            <div class="row">
                                <div class="col-5">
                                    <select class="form-control" id="cmbMes"></select>
                                </div>
                                <div class="col-5">
                                    <select class="form-control" id="cmbAnio"></select>
                                </div>
                            </div>

                            ${view.listado() }
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
                            <input type="text" class="form-control" id="txtBuscar" placeholder="Escriba para buscar...">
                        </div>
                        <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                            <button class="btn btn-outline-info btn-md shadow" id="btnImprimir" onclick="window.print()">
                                <i class="fal fa-print"></i>Imprimir
                            </button>
                        </div>
                        
                    </div>
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-striped" id="tableMayor">
                            <thead class="bg-trans-gradient text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>PARTIDA</td>
                                    <td>CÓDIGO</td>
                                    <td>CUENTA</td>
                                    <td>DESCRIPCIÓN</td>
                                    <td>DEBE</td>
                                    <td>HABER</td>
                                    <td>ACUMULADO</td>
                                </tr>
                            </thead>
                            <tbody id="tblMayor">
                            
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

    document.getElementById('txtBuscar').addEventListener('keydown', ()=>{
        funciones.FiltrarTabla('tableMayor','txtBuscar');
    })
  
    getMayor('tblMayor', cmbMes.value, cmbAnio.value);

};


function InicializarVista(){
    getView();
    addListeners();
};


function getMayor(idContenedor, mes,anio){

    let container = document.getElementById(idContenedor);
    container.innerHTML = GlobalLoader;

    let strdata = '';  
    let totaldebe= 0; let totalhaber = 0;

    axios.post('/diario/mayor_mes', {
        empnit:GlobalEmpnit,
        mes:mes,
        anio:anio
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{  
                totaldebe = totaldebe + Number(rows.DEBE);
                totalhaber = totalhaber + Number(rows.HABER);                  
                    strdata = strdata + `
                    <tr>
                        <td>${funciones.cleanFecha(rows.FECHA)}</td>
                        <td>${rows.NOPARTIDA}</td>
                        <td>${rows.CODCUENTA}</td>
                        <td>${rows.DESCUENTA}</td>
                        <td>${rows.DESCRIPCION}</td>
                        <td>${funciones.setMoneda(rows.DEBE,'Q')}</td>
                        <td>${funciones.setMoneda(rows.HABER,'Q')}</td>
                        <td>${funciones.setMoneda((Number(totaldebe) - Number(totalhaber)),'Q')}</td>
                    </tr>`;
        })
        container.innerHTML = strdata;
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = ''; 
        container.innerHTML = 'No se pudo cargar la lista';
    });
    

};