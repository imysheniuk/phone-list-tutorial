import PhoneListCtrl from './PhoneListCtrl';
import './PhoneList.css';

export default class PhoneListCmp {
    constructor () {
        this.controller = PhoneListCtrl;
        this.template = require('./PhoneList.html');
    }
}