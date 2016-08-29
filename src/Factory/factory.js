app.factory('teamFactory', ['$q', 'getDataService',
 function($q, getDataService){
 var teamFactory={
  data:function httpRequestHandler(url,callback){
   // console.log(url);
   var promise = getDataService.get(url, callback);
   var deferred = $q.defer();
   // console.log("hi");          
    promise.then(function(data){
       //success handler
       deferred.resolve(data);
   }, function(error){
       //error handler
       deferred.reject(error);
   })
   return deferred.promise;
   }
    }
    return teamFactory;
}]);
