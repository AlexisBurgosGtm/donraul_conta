function getView(){
    let view = {
        listado: ()=>{
            return `
            <div class="card shadow p-2">
                <div class="card-header">
                    
                    <div class="row">
                        <div class="col-5">
                            <select class="form-control" id="cmbMes"></select>
                        </div>
                        <div class="col-5">
                            <select class="form-control" id="cmbAnio"></select>
                        </div>
                    </div>

                    <hr class="solid">
                    
                    <div class="row">
                        <div class="col-6">
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
                                    <td>FECHA</td>
                                    <td>PARTIDA</td>
                                    <td>CODIGO</td>
                                    <td>CUENTA</td>
                                    <td>DEBE</td>
                                    <td>HABER</td>
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
                                <div class="col-lg-3 col-xl-3 col-sm-6 col-md-3">
                                    <div class="form-group">
                                        <label>Fecha</label>
                                        <input type="date" class="form-control" id="txtPFecha">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-xl-3 col-sm-6 col-md-3">
                                    <div class="form-group">
                                        <label>No.</label>
                                        <input type="number" class="form-control" id="txtPNoPoliza">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label>Póliza</label>
                                        <select class="form-control" id="cmbPolizas">
                                        
                                        </select>
                                    </div>    
                                </div>
                            </div>
                            
                            <div class="row">
                                
                                        

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
        }
    };

    root.innerHTML = view.listado() + view.modalNuevo() + view.modalNuevaPoliza();
};

function addListeners(){
  
    let cmbMes = document.getElementById('cmbMes');
    cmbMes.innerHTML = funciones.ComboMeses();

    let cmbAnio = document.getElementById('cmbAnio');
    cmbAnio.innerHTML = funciones.ComboAnio();
    
    let f = new Date();
    cmbMes.value = f.getMonth()+1; cmbAnio.value = f.getFullYear();


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
                    getPolizas('cmbPolizas');
                    $('#modalNuevaPoliza').modal('hide');
                })

            }
        })
    });

    getPolizas('cmbPolizas');

    //PARTIDAS
    document.getElementById('txtPFecha').value = funciones.getFecha(); 

    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        $('#modalNuevo').modal('show');
    });

    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Guardar esta Partida?')
        .then((value)=>{
            if(value==true){

                

            }
        })
    });

    getListado('tblPartidas');
       
};


function InicializarVista(){
    getView();
    addListeners();
};

function getListado(idContainer){

    let contenedor = document.getElementById(idContainer);
    contenedor.innerHT = GlobalLoader;

};


function insertPartida(){

};

function getPolizas(idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
            
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
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = '';
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
