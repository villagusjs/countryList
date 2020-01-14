function getCountry() {
    var url = new URL(window.location.href);
    var countryCode = url.searchParams.get("c");
    console.log(countryCode);

    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/'+countryCode,
        type: 'GET',
        dataType: "JSON",
        success : function(res) {
           console.log(res)
        }
    });
}
getCountry();