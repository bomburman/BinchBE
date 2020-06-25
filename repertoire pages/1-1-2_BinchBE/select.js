


var selectColor = document.getElementById('color_selec');
var selectAlcool = document.getElementById('alcool_selec');
var selectAmere = document.getElementById('amertume_selec');
var balise = document.getElementById('balise');
var beerArrey = ["", "", "",]



selectColor.addEventListener('change', function () {
    var color = selectColor.selectedIndex + 1;
    beerArrey[0] = color



    selectAlcool.addEventListener('change', function () {
        var alcool = selectAlcool.selectedIndex + 1;
        beerArrey[1] = alcool



        selectAmere.addEventListener('change', function () {
            var amere = selectAmere.selectedIndex + 1;
            beerArrey[2] = amere



            var beer = (beerArrey[0]) + "-" + (beerArrey[1]) + "-" + (beerArrey[2]);

            var lien = "../" + beer + "_BinchBE/index.html";
            balise.setAttribute('href', lien);
            console.log(beer);


        })
    })
})












/*
switch (color) {

    case 1:
        switch (alcool) {

            case 1:
                switch (amere) {

                    case 1:
                        var beer = '1-1-1';
                        break;

                    case 2:
                        var beer = '1-1-2';
                        break;

                }



            case 2:
                switch (amere) {

                    case 1:
                        var beer = '1-2-1';
                        break;

                    case 2:
                        var beer = '1-2-2';
                        break;


                }
        }

    case 2:

        switch (alcool) {

            case 1:
                switch (amere) {

                    case 1:
                        var beer = '2-1-1';
                        break;

                    case 2:
                        var beer = '2-1-2';
                        break;

                }


            case 2:
                switch (amere) {

                    case 1:
                        var beer = '2-2-1';
                        break;

                    case 2:
                        var beer = '2-2-2';
                        break;

                }

        }


    case 3:
        switch (alcool) {

            case 1:

                switch (amere) {

                    case 1:
                        var beer = '3-1-1';
                        break;

                    case 2:
                        var beer = '3-1-2';
                        break;

                }


            case 2:

                switch (amere) {

                    case 1:
                        var beer = '3-2-1';
                        break;

                    case 2:
                        var beer = '3-2-2';
                        break;


                }

        }


}*/