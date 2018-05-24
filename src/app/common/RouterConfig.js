const RouterConfig = ['$stateProvider', '$urlServiceProvider', ($stateProvider, $urlServiceProvider) => {
    $stateProvider
    .state('phones', {
        url: '/phones',
        component: 'phoneList'
    })
    .state('phoneDetails', {
        url: '/phones/:phoneId',
        component: 'phoneDetails',
        resolve: {
            phone: [ 'PhoneSrv', '$stateParams', ($PhoneSrv, $stateParams ) => {
                return $PhoneSrv.getPhoneDetails($stateParams.phoneId).then(resp => {
                    return resp.data;
                });
            }]
        }
    })

    $urlServiceProvider.rules.otherwise('/phones');
}]

export default RouterConfig;