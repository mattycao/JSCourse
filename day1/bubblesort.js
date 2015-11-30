/**
 * Created by caoyangkaka on 3/13/15.
 */
//
function bubbleSort(arr)
{
    vari = arr.length, j;
    var tempExchangVal;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tempExchangVal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempExchangVal;
            }
        }
        i--;
    }
    returnarr;
}

function sort(list) {
    for(var i = list.length - 1; i>0; i--) {
        for(var j = 0; j < i; j++) {
            if(list[j] > list[j+1]){
                var temp = list[j] | null;
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
}

var arr = [1];
sort(arr);
console.log(arr);
console.log(Number(new Date()));

function bubble(list) {
    for(var i = list.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (list[j] > list[j + 1]) {
                var temp = list[j] | null;
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
}
