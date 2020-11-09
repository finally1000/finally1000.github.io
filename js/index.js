/**
 * Created by Momo 20201109.
 */

class Stock {

    // var stock[5];
    // var etf[2];

    constructor(){
        this.stock = [0, 0, 0, 0, 0];
        this.etf = [0, 0];
        this.reset_stock();
    }

    add_stock(idx){
        this.update_etf();
        this.stock[idx]++;
    }

    sub_stock(idx){
        this.update_etf();
        this.stock[idx]--;
    }

    update_etf(){
        var temp_stock = [0, 0, 0, 0, 0];

        for (var i = 0; i < temp_stock.length; i++) 
            temp_stock[i] = this.stock[i];

        for (var i = 0; i < temp_stock.length; i++) {
            for (var j = 0; j < (temp_stock.length - 1); j++) {
                if(temp_stock[j] > temp_stock[j+1]){
                    var temp = temp_stock[j];
                    temp_stock[j] = temp_stock[j+1];
                    temp_stock[j+1] = temp;
                }
            }
        }

        var sum = 0;
        for (var i = 0; i < temp_stock.length; i++) 
            sum += this.stock[i];

        this.etf[0] = Math.ceil(sum / 5.0) - 12;

        sum = temp_stock[4] + temp_stock[3] + temp_stock[2];

        this.etf[1] = Math.ceil(sum / 3.0) - 15;     

    }

    get_stock_array(){
        return this.stock;
    }

    get_etf_array(){
        return this.etf;
    }

    get_stock(idx){
        return this.stock[idx];
    }

    get_etf(idx){
        return this.etf[idx];
    }

    reset_stock(){
        for (var i = 0; i < this.stock.length; i++){
            this.stock[i] = 18;
        }
        this.etf[0] = 6;
        this.etf[1] = 3;
    }

}

function load() {

    myStock = new Stock();

    var btns = document.querySelectorAll('#calculator #button');
    var inputScreen = document.querySelectorAll('#screen');

    // for(var i=0; i< btns.length; i++) {

    //     var idx = i/2;
    //     if((i%2)==0)
    //     {
    //         btns[i].addEventListener('click', function (e) {
    //             number_array[idx]++;
    //         });
    //     }
    //     else
    //     {
    //         btns[i].addEventListener('click', function (e) {
    //             number_array[idx]++;
    //         });
    //     }

    // }

    document.querySelector('#clear').addEventListener('click', function () {
        myStock.reset_stock();
        screen_update();
    });


    btns[0].addEventListener('click', function () {
        myStock.add_stock(0);
        screen_update();
    });

    btns[1].addEventListener('click', function () {
        myStock.sub_stock(0);
        screen_update();
    });

    btns[2].addEventListener('click', function () {
        myStock.add_stock(1);
        screen_update();
    });

    btns[3].addEventListener('click', function () {
        myStock.sub_stock(1);
        screen_update();
    });

    btns[4].addEventListener('click', function () {
        myStock.add_stock(2);
        screen_update();
    });

    btns[5].addEventListener('click', function () {
        myStock.sub_stock(2);
        screen_update();
    });

    btns[6].addEventListener('click', function () {
        myStock.add_stock(3);
        screen_update();
    });

    btns[7].addEventListener('click', function () {
        myStock.sub_stock(3);
        screen_update();
    });

    btns[8].addEventListener('click', function () {
        myStock.add_stock(4);
        screen_update();
    });

    btns[9].addEventListener('click', function () {
        myStock.sub_stock(4);
        screen_update();
    });

    // for(var i=0; i< btns.length; i++) {

    //     btns[i].addEventListener('click', function (e) {

    //         btnValue = this.innerHTML;

    //         switch (btnValue) {
    //             case 'R':
    //                 for(var k=0; k< number_array.length; k++)
    //                     number_array[k] = 15;
    //                 break;

    //             case '+':
    //                 number_array[0]++;
    //                 break;
    //             case '-':
    //                 number_array[0]--;
    //                 break;
    //             default:

    //                 break;
    //         }

    //         screen_update();
    //     });
    // }

    function screen_update() {

        var inputScreen = document.querySelectorAll('#screen');
        var showScore = document.querySelectorAll('#score_01,#score_02,#score_03,#score_04,#score_05');
        var totalScore = document.querySelector('#hide_01');    
        var stock_ary = myStock.get_stock_array();
        var etf_ary = myStock.get_etf_array();
        var sum = 0;

        for(var i=0; i< stock_ary.length; i++){
            inputScreen[i].innerHTML = stock_ary[i];
            sum += stock_ary[i];
        }

        for(var i=0; i< etf_ary.length; i++)
            inputScreen[i+5].innerHTML = etf_ary[i];

        for(var i=0; i< showScore.length; i++){

            var line = Math.floor(i/5);
            var idx = i%5;
            var price = stock_ary[line] / Math.pow(2,idx+1)

            showScore[i].innerHTML = Math.ceil(price);
        }
        totalScore.innerHTML = sum;


    }

    screen_update();

}

