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
                        <select class="form-control" id="cmbEmpresas">
                            <option value="55977464">MAYAS DEL PACIFICO S.A.</option>
                            <option value="101792069">CONSTRUMATERIALES EL CAMPESINO</option>
                            <option value="55977146">BLOCKERA DON RAUL</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Usuario</label>
                        <input type="text" class="form-control" id="txtU">
                    </div>
                    
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control" id="txtC">
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
        btnIniciar.disabled = true;
        btnIniciar.innerHTML = '<i class="fal fa-lock fa-spin"></i>';
        log()
        .then(()=>{
            GlobalEmpnit = document.getElementById('cmbEmpresas').value;
            funciones.showToast('Bienvenido ' + GlobalUsuario)
            classNavegar.inicio();    
        })
        .catch(()=>{
            GlobalEmpnit ='';
            btnIniciar.disabled= false;
            btnIniciar.innerHTML = '<i class="fal fa-lock"></i> Ingresar';
            funciones.AvisoError('Usuario o Contraseña incorrectos')
        })

        
    });

};

function InicializarVista(){
    getView();
    addListeners();
}


function log(){
    let u = document.getElementById('txtU').value; let c = document.getElementById('txtC').value;

    return new Promise((resolve,reject)=>{
        axios.post('/login/login',{
           empnit:GlobalEmpnit,
           u:u,
           c:c
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                GlobalUsuario = u;
                resolve();             
            }else{
                GlobalUsuario = '';
                reject();
            }               
        }, (error) => {
            reject();
        });
    })

};