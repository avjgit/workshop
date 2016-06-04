angular.module('recipeApp')
    .directive('browseContent', [function () {           
        return {    
            scope: {
                index: '=', // = - object, @ - object value
                // 2nd type value: '@filter'
            },
                                                       
            templateUrl: 'templates/browseContent.html'         
        };                                                  
    }]);