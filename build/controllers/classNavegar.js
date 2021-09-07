let classNavegar = {
    login : ()=>{
        funciones.loadScript('./views/login.js','root')
        .then(()=>{
            GlobalUsuario='';
            InicializarVista();
        })
    },
    inicio : ()=>{
        funciones.loadScript('./views/inicio.js','root')
        .then(()=>{
            btnMenu.style = "visibility:visible";
            cmbEmpresas.style = 'visibility: visible';
            InicializarVista();
        })
    },
    proveedores : ()=>{
        funciones.loadScript('./views/proveedores.js','root')
        .then(()=>{
            InicializarVista();
        })
    },
    clientes : ()=>{
        funciones.loadScript('./views/clientes.js','root')
        .then(()=>{
            InicializarVista();
        })
    },
    cuentas : ()=>{
        funciones.loadScript('./views/cuentas.js','root')
        .then(()=>{
            InicializarVista();
        })
    },
    diario : ()=>{
        funciones.loadScript('./views/diario.js','root')
        .then(()=>{
            InicializarVista();
        })
    }
}

