import PhoneDetailsCtrl from './PhoneDetailsCtrl';
import './PhoneDetails.css';

export default class PhoneDetailsCmp {
    constructor () {
        this.controller = PhoneDetailsCtrl;
        this.template = require('./PhoneDetails.html');
    }
}