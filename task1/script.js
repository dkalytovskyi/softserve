$(document).ready(function() {
    let item = {};
    $("#country").on('change', function() {
        const val = $(this).val();
        $("#city").html("");
        $("#airport").html("");
        $("#city").prop("disabled", true);
        $("#airport").prop("disabled", true);
        if (val!="") {
            console.log("hey");
            fetch("./data.json")
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    for (let i=0; i<data.length; i++) {
                        if (data[i].country==val) {
                            item=data[i];
                        }
                    }
                    $("#city").removeAttr("disabled");
                    for (let i=0; i<item.cities.length; i++) {
                        $("#city").append(`<option value='${item.cities[i].name}'>${item.cities[i].name}</option>)`);
                    }
                })
                .catch(function(err) {
                    console.log(err);
                })
        } else {
            $("#city").prop("disabled", true);
            $("#airport").prop("disabled", true);
        }
    });
    $("#city").on('change', function() {
        const val = $(this).val();
        $("#airport").html("");
        let list = [];
            /*let list = [];
            fetch("./cities.json")
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    for (let i=0; i<data.length; i++) {
                        if (data[i].country==item.country) {
                            for (let j=0; j<item.cities.length; j++) {
                                if (item.cities[j].name==val) list=item.cities[j].airports;
                            }
                        };
                    }*/
                    for (let i=0; i<item.cities.length; i++) {
                        if (item.cities[i].name==val) {
                            list = item.cities[i].airports;
                            $("#airport").removeAttr("disabled");
                            for (let i=0; i<list.length; i++) {
                                $("#airport").append(`<option value='${list[i]}'>${list[i]}</option>)`);
                            }
                        }
                }
                /*})
                .catch(function(err) {
                    console.log(err);
                })*/
    });
});