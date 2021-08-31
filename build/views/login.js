function getView(){
    let view = {
        login:()=>{
            return `
            <div class="card shadow col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="card-header">
                    <img src="./img/logo.png" width="70" height="70">
                </div>
                <div class="card-body">
                    
                    <div class="form-group">
                        <label>Usuario</label>
                        <input type="text" class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control">
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary btn-xl " id="btnIniciar">
                            <i class="fal fa-lock"></i> Ingresar
                        </button>
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.login();

};

function addListeners(){

    btnMenu.style = "visibility:hidden";

    let btnIniciar = document.getElementById('btnIniciar')
    btnIniciar.addEventListener('click',()=>{
        classNavegar.inicio();
    });

};

function InicializarVista(){
    getView();
    addListeners();
}