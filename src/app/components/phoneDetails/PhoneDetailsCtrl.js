export default class PhoneDetailsCtrl {
    // constructor($stateParams, PhoneSrv) {
        // this.phoneId = $stateParams.phoneId;
        // this.PhoneSrv = PhoneSrv;
    // }
    $onInit() {
        this.setImage(this.phone.images[0]);

        // this.PhoneSrv.getPhoneDetails(this.phoneId).then(resp => {
        //     this.phone = resp.data;
        //     this.setImage(this.phone.images[0]);
        // });
    }
    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
    }
}

// PhoneDetailsCtrl.$inject = ['$stateParams', 'PhoneSrv'];
