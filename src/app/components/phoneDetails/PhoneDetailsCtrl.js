export default class PhoneDetailsCtrl {
    constructor($stateParams, PhoneSrv) {
        this.phoneId = $stateParams.phoneId;
        this.PhoneSrv = PhoneSrv;
    }
    $onInit() {
        this.setImage = (imageUrl) => {
            this.mainImageUrl = imageUrl;
        }
 
        this.PhoneSrv.getPhoneDetails().then(resp => {
            this.phone = resp.data;
            this.setImage(this.phone.images[0]);
        });
    }
}

PhoneDetailsCtrl.$inject = ['$stateParams', 'PhoneSrv'];
