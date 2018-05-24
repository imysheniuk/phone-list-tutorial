import PhoneListItemCtrl from './PhoneListItemCtrl';
import './PhoneListItem.css';

export default class PhoneListItemCmp {
    constructor () {
        this.controller = PhoneListItemCtrl;
        this.template = require('./PhoneListItem.html');
        this.bindings = { 
            phone: '<',
            onDelete: '&'
    };
    }
}