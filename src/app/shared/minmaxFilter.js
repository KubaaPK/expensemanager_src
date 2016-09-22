// angular
//     .module('minmaxFilter', [])
//
//     .filter('minmax', function () {
//
//         return function (data) {
//             var total = parseFloat(data.total);
//             var min = parseFloat(vm.minAmount);
//             var max = parseFloat(vm.maxAmount);
//
//             if (!total) {
//                 return false;
//             }
//
//             if(min && total < min) {
//                 return false;
//             }
//
//             if(max && total > max) {
//                 return false;
//             }
//
//             return true;
//         };
//
//     });