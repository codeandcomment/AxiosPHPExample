
        let data = new FormData();
        data.append('axios', 1);
        data.append('ID', $('#ID').val());

        axios.post('/MyURL', data).then(function (response) {

            if (response.data.trim()) {
                console.log(respionse.data)
            }
        });
