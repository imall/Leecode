
// Time Limit Exceeded~~
// export var getWinner = function(arr, k) {
//     let map = new Map();
//     while(map.get(arr[0])!==k){
//         let [smaller] = arr[0] > arr[1] ? arr.splice(1,1) : arr.splice(0,1);
//         arr.push(smaller)
//         map.set(arr[0],map.get(arr[0])?0:map.get(arr[0])+1)
//     }
//     return arr[0];
// };

export var getWinner = function (arr, k) {
    let result = arr[0];
    let winTime = 0

    for (let i = 1; i < arr.length; i++) {
        if(result > arr[i]) {
            winTime++;
        }else{
            winTime =1;
            result=arr[i]
        }

        if(winTime === k){
            break
        }
    }

    return result;
};
