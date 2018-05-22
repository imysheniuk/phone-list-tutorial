import PhoneService from './PhoneService';
import StateProvider from './Config';
import CheckmarkFilter from './CheckmarkFilter';

angular.module('app.common', [])
       .service('PhoneSrv', PhoneService)
       //create CheckmarkFilter class
       .filter('CheckmarkFilter', /*CheckmarkFilter*/
       function() {
            return function(input) {
            return input ? '\u2713' : '\u2718';
            };
        });