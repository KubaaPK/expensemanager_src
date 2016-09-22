angular
    .module('app.index', ['getdataFactory'])
 
    .controller('indexController', indexController);
 
function indexController(getdataFactory) {
 
    var vm = this;

    vm.orderByField = 'date';
    vm.reverseSort = false;
    vm.totalAmount = 0;

    vm.minmaxFilter = function (data) {
        var total = parseFloat(data.total);
        var min = parseFloat(vm.minAmount);
        var max = parseFloat(vm.maxAmount);

        if (!total) {
            return false;
        }
        if(min > max){
            return false;
        }
        if(min && total < min) {
            return false;
        }

        if(max && total > max) {
            return false;
        }

        return true;
    };


    vm.dateRangeFilter = function (data) {

        var total = Date.parse(data.date);

        var min = Date.parse(vm.afterDate);
        var max = Date.parse(vm.beforeDate);

        if (!total) {
            return false;
        }
        if(min > max){
            return false;
        }
        if(min && total < min) {
            return false;
        }

        if(max && total > max) {
            return false;
        }

        return true;
    };







    getdataFactory.getData()
        .then(function (data) {
            vm.data = data.data;

            for(var i = 0; i<vm.data.length; i++) {
                vm.totalAmount = vm.totalAmount + vm.data[i].total;
            }
            console.log(vm.totalAmount);
        })

}


