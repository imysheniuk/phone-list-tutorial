const stateProvider = ['$stateProvider', '$urlServiceProvider', ($stateProvider, $urlServiceProvider) => {
    $stateProvider
    .state('phones', {
        url: '/phones',
        component: 'phoneList'
    })
    .state('phoneDetails', {
        url: '/phones/:phoneId',
        component: 'phoneDetails'
    })

    $urlServiceProvider.rules.otherwise('/phones');
}]

export default stateProvider;