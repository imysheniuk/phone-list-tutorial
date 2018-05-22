export default class PhoneService {
    constructor($http, $stateParams) {
        this.$http = $http;
        this.$stateParams = $stateParams;
    }
    getPhones() {
        //todo: path is relative to public folder, figure out why?
        return this.$http.get('/phones/phones.json');
    }

    getPhoneDetails() {
        return this.$http.get('/phones/' + this.$stateParams.phoneId + '.json');        
    }

}

PhoneService.$inject = ['$http','$stateParams'];