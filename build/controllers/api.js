let api = {
    runqry: (qry,st)=>{
        return new Promise((resolve,reject)=>{
            axios.post('/noticias/qry',{qry:qry,status:st})
            .then((response) => {
                //console.log(response.data.recordset);
               resolve(response.data);             
            }, (error) => {
                reject();
            });


        })
        
    }
}