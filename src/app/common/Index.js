import PhoneService from './PhoneService';
import RouterConfig from './RouterConfig';
import CheckmarkFilter from './CheckmarkFilter';

angular.module('app.common', [])
       .config(RouterConfig)
       .service('PhoneSrv', PhoneService)
       .filter('CheckmarkFilter', CheckmarkFilter);