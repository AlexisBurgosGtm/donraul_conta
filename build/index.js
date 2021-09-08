//const socket = io();


let btnMenu = document.getElementById('btnMenu');
let btnMenuCerrar = document.getElementById('btnMenuCerrar');


let btnMenuSalir = document.getElementById('btnMenuSalir');
btnMenuSalir.addEventListener('click',()=>{
    classNavegar.login();
});

let btnMenuInicio = document.getElementById('btnMenuInicio');
btnMenuInicio.addEventListener('click',()=>{
    classNavegar.inicio();
});

let btnMenuCuentas = document.getElementById('btnMenuCuentas');
btnMenuCuentas.addEventListener('click',()=>{
    classNavegar.cuentas();
});

let btnMenuProveedores = document.getElementById('btnMenuProveedores');
btnMenuProveedores.addEventListener('click',()=>{
    classNavegar.proveedores();
    btnMenuCerrar.click();
});

let btnMenuClientes = document.getElementById('btnMenuClientes');
btnMenuClientes.addEventListener('click',()=>{
   classNavegar.clientes();
   //btnMenuCerrar.click(); 
});

let btnMenuDiario = document.getElementById('btnMenuDiario');
btnMenuDiario.addEventListener('click',()=>{
    classNavegar.diario();
});


funciones.instalationHandlers('btnInstalarApp');

classNavegar.login();


// FUNCIONES
let empresas = [
    {empnit:"55977464",empresa:"MAYAS DEL PACIFICO S.A."},
    {empnit:"101792069",empresa:"CONSTRUMATERIALES EL CAMPESINO"},
    {empnit:"55977146",empresa:"BLOCKERA DON RAUL"}
]


function getEmpresasCombo(){
    let str = ''
    empresas.map((r)=>{
        str = str + `<option value="${r.empnit}">${r.empresa}</option>`
    })

    return str;
}

function getEmpresaNombre(){
    let emp = '';
    empresas.map((r)=>{
        if(r.empnit==GlobalEmpnit){
            emp = r.empresa;
        }
    })
    return emp;
}