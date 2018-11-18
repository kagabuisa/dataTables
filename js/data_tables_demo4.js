$('document').ready(function () {
    //"example" in ('#example') is the table id, this is declared under table class
    $('#example').DataTable({
        "ajax": "people.json",
        "dataSrc": "",
        "columns": [{
                "data": "name"
            },
            {
                "data": "position"
            },
            {
                "data": "office"
            },
            {
                "data": "extn"
            },
            {
                "data": "start_date"
            },
            {
                "data": "salary"
            }
        ],
        "dom": "Bftrip",
        "buttons": ['copy', 'csv', 'excel', 'pdf', 'print']
    });

});