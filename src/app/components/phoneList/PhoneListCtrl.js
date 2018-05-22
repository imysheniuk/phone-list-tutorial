export default class PhoneListCtrl {
    constructor(PhoneSrv) {
        this.PhoneSrv = PhoneSrv;
    }
    $onInit() {
        this.PhoneSrv.getPhones().then(resp => {
            this.phones = resp.data;
        });
       
    }
}

PhoneListCtrl.$inject = ['PhoneSrv'];