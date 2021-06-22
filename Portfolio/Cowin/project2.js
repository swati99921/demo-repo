var test = document.getElementById("mybtn");
test.addEventListener("click", function () {
const data_url = (`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`)
xhr.open('GET', data_url);
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var res = JSON.parse(xhr.responseText);
        console.log(res);
        const res_len = res_len.locations.length;
        var output = '';
        for (let i = 0; i < res_len; i++) {
            output += `<tr><b>${res.locations.length[i].id}
               </b><br>${res.locations.length[i].name}
               </b><br>${res.locations.length[i].climate}
               </b><br>${res.locations.length[i].terrian}
               </b><br>${res.locations.length[i].surface_water}
               </b><br>${res.locations.length[i].residence}</tr><hr> `


        }
        id.innerHTML = output
    }
}
})
xhr.send()