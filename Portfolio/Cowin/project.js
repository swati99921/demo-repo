
const api_url = 
    //   "https://ghibliapi.herokuapp.com/locations";
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021/${districts_id}"
// Defining async function
async function getapi() {
    
    // Storing response
    const response = await fetch(api_url);
    console.log(response)
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

// Calling that async function
getapi(api_url);
  // Function to hide the loader
 function hideloader() {
     document.getElementById('loading').style.display = 'none';
 }
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>ID</th>
          <th>Name</th>
          <th>Cliamte</th>
          <th>Terrian</th>
          <th>Surface_water</th>
          <th>Residence</th>
          <th>Todo</th>
         </tr>`;
    
    // Loop to access all rows 
    for(let i = 0; i<data.length; i++) {
        tab += `<tr> 
     <td>${data[i].id} </td>
     <td>${data[i].name}</td>
     <td>${data[i].climate}</td> 
     <td>${data[i].terrian}</td> 
     <td>${data[i].surface_water}</td> 
     <td>${data[i].residence}</td> 
     <td>${data[i].todo}</td>          
 </tr>`;
    }
    // Setting innerHTML as tab variable
   
    
    document.getElementById("tabl").innerHTML = tab;
}
