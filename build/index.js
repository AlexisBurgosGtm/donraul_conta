//const socket = io();

let cmbEmpresas = document.getElementById('cmbEmpresas');
cmbEmpresas.addEventListener('change', ()=>{
    GlobalEmpnit = cmbEmpresas.value;
    try {
        getListado('tblCuentas');
    } catch (error) {
        
    };
    try {
        if(GlobalEmpnit=='101792069'){
            document.getElementById('imgLogoInicio').src ='./favicon.png';
        };
        if(GlobalEmpnit=='55977146'){
            document.getElementById('imgLogoInicio').src ='./favicon2.png';
        };
    } catch (error) {    
    };
    try {
        getPolizas('cmbPolizas','cmbPolizasLista');
    } catch (error) {
        
    };

});

cmbEmpresas.style = 'visibility: hidden';

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