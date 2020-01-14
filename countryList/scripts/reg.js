function register() {
    var nom = $("#nom").val();
    var ape = $("#ape").val();
    var edd = $("#edd").val();
    var pa = $("#pa").val();
    var ci = $("#ci").val();

    console.log(nom, ape, edd, pa, ci);

    var jsn = {
        "name":nom,
        "lastName": ape,
        "age":edd,
        "country":pa,
        "city":ci
    }
    console.log(jsn);

    $.ajax({
        url: 'http://localhost:10.200.48.197/register',
        type: 'POST',
        data: jsn,
        success : function(res) {
            console.log(res)
            $("#pr").html(res.messages);
        }
    });    
}