angular
    .module('getdataFactory', [])
    .factory('getdataFactory', getdataFactory);
 
function getdataFactory($http) {
    exports = {
        getData: null
    };
    exports.getData= function () {
        return $http.get("app/data/exampledata.json");
    };
    return exports;
}