/**
 * PhoneSerivce class
 * @author imysh
 */

export default class PhoneService {
    constructor($http, $stateParams) {
        this.$http = $http;
        this.$stateParams = $stateParams;
    }

    /**
     * Get all phones
     * @returns {Promise}
     */
    getPhones() {
        //todo: path is relative to public folder, figure out why?
        return this.$http.get('/phones/phones.json');
    }

    /**
     * Get phone details by given state param id.
     * @param {String} phone
     * @returns {Promise}
     */
    getPhoneDetails(id) {
        // return this.$http.get('/phones/' + this.$stateParams.phoneId + '.json');
        return this.$http.get(`/phones/${id}.json`);
    }

}

PhoneService.$inject = ['$http','$stateParams'];