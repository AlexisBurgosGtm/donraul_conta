function getView(){
    let view = {
        encabezado:()=>{
            return `
            <div class="card col-12">
                
                <div class="card-body">
                    <img class="" src="./img/logo.png" width="100" height="100" id="imgLogoInicio">
               
                    <div class="row">
                        <div class="col-6">
                            <div id="btnDiario" class="hand p-3 bg-outline-secondary-400 text-secondary rounded overflow-hidden position-relative text-white mb-g shadow top-left-rounded bottom-right-rounded" data-dismiss="modal">
                                <div class="">
                                    <h1 class="display-5 d-block l-h-n m-0 fw-500">
                                        Libro Diario
                                    </h1>
                                    <small class="m-0 l-h-n">Explicación</small>
                                </div>
                                <i class="fal fa-plus position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                            </div>
                        </div>

                        <div class="col-6">
                            <div id="btnMayor" class="hand p-3 bg-outline-secondary-400 text-secondary rounded overflow-hidden position-relative text-white mb-g shadow  top-left-rounded bottom-right-rounded" data-dismiss="modal">
                                <div class="">
                                    <h1 class="display-5 d-block l-h-n m-0 fw-500">
                                        Libro Mayor
                                    </h1>
                                    <small class="m-0 l-h-n">Explicación</small>
                                </div>
                                <i class="fal fa-list position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                            </div>
                        </div>

                    </div>


                    <div class="row">
                        <div class="col-6">
                            <div id="btnVentas" class="hand p-3 bg-outline-secondary-400 text-secondary rounded overflow-hidden position-relative text-white mb-g shadow  top-left-rounded bottom-right-rounded" data-dismiss="modal">
                                <div class="">
                                    <h1 class="display-5 d-block l-h-n m-0 fw-500">
                                        Libro de Ventas
                                    </h1>
                                    <small class="m-0 l-h-n">Explicación</small>
                                </div>
                                <i class="fal fa-dollar-sign position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                            </div>
                        </div>

                        <div class="col-6">
                            <div id="btnCompras" class="hand p-3 bg-outline-secondary-400 text-secondary rounded overflow-hidden position-relative text-white mb-g shadow  top-left-rounded bottom-right-rounded" data-dismiss="modal">
                                <div class="">
                                    <h1 class="display-5 d-block l-h-n m-0 fw-500">
                                        Libro de Compra
                                    </h1>
                                    <small class="m-0 l-h-n">Explicación</small>
                                </div>
                                <i class="fal fa-chart-line position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.encabezado();

};

function addListeners(){
    
    let btnDiario = document.getElementById('btnDiario');
    btnDiario.addEventListener('click',()=>{
        classNavegar.diario();
    })
    
    let btnMayor = document.getElementById('btnMayor');
    btnMayor.addEventListener('click',()=>{
        classNavegar.mayor();
    })

};

function InicializarVista(){
    getView();
    addListeners();
}