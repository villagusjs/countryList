function getInfo() {    
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'GET',
        dataType: "JSON",
        success : function(res) {
            console.log(res)

            var output = "";

            for(i in res) {
                output += `<tr> 
                    <td> ${res[i].id} </td>
                    <td> ${res[i].id} </td>
                    <td> ${res[i].title} </td>
                    <td> <button> View </button> </td>
                </tr>`;
            }

            document.getElementById("_tbody").innerHTML = output;
        }
    }); 
}
function getAllContries() {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/all',
        type: 'GET',
        dataType: "JSON",
        success : function(res) {
            var output = "";
            var cont = 1
            for(i in res) {
                
                output += `<tr> 
                    <td> ${cont++} </td>
                    <td> <img class='flag' src="${res[i].flag}"> </td>
                    <td> ${res[i].name} </td>
                    <td> ${res[i].alpha2Code} </td>
                    <td> ${res[i].callingCodes[0]} </td>
                    <td> <a class="faIcon far fa-eye" href="http://127.0.0.1/http-ajax/country.html?c=${res[i].alpha2Code}"></a> </td>
                </tr>`;
            }
            document.getElementById("_tbody").innerHTML = output;
            console.log(res)
        }
    });    
}

getAllContries();
