export default class PhoneListCtrl {
    constructor(PhoneSrv) {
        this.PhoneSrv = PhoneSrv;
    }

    $onInit() {
        this.PhoneSrv.getPhones().then(resp => {
            this.phones = resp.data;
        });

        this.onDelete = (item => {
            this.phones.splice(this.phones.indexOf(item), 1);
            // this.phones.splice(3,1);
        });
    }
}

PhoneListCtrl.$inject = ['PhoneSrv'];