$('document').ready(function () {
    //"example" in ('#example') is the table id, this is declared under table class
    $('#example').DataTable({
        "ajax": "JSON/Margins-report.json",
        "dataSrc": "",
        "columns": [{
                "data": "Date"
            },
            {
                "data": "CSTG"
            },
            {
                "data": "Sales"
            },
            {
                "data": "COGs"
            },
            {
                "data": "Profit"
            },
            {
                "data": "Margin"
            }


        ],
        "dom": "Bftrip",
        //"buttons": ['excel', 'pdf', 'print']

    });

});