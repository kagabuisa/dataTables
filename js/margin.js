$('document').ready(function () {
    //"example" in ('#example') is the table id, this is declared under table class
    $('#example').DataTable({
        "processing": true,
        "serverSide": false,
        "ajax": {
            "url":"http://localhost/phprestapi/api/post/read.php"},
            
        "columns": [{
                "data": "id"
            },
            {
                "data": "firstName"
            },
            {
                "data": "surName"
            },
            {
                "data": "dob"
            },
            {
                "data": "email"
            }
        ],
        // "dom": "Bftrip",
        //"buttons": ['excel', 'pdf', 'print']

    });

});