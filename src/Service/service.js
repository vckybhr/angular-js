app.service('getDataService', ['$http', function($http){
    this.get = function(url, callback){
                    $http({url: '/fixtures',
                         method: 'GET',
                         headers: {
                            'X-Auth-Token': x
                         },
                         timeout:5000
                     }).success(function(data,status){
                         callback(data,status);

                         })
                       .error(function (err,status){
                         callback(err,status);
                         });
    return $http.get(url,callback);
    }
}]);