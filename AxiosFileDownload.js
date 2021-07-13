
    var form = document.querySelector('#FomName');
    var fomdata = new FormData(form);

axios({
        url: '/Url',
        method: 'POST',
        responseType: 'blob',
        data:fomdata
    }).then((response) => {
        if(!response.headers["content-error"]) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', response.headers["content-filename"]); 
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
            }, 1000);
        }else if(response.headers["content-error"]=='404'){
            alertdata('File not available at this time','error');
        }
    });
