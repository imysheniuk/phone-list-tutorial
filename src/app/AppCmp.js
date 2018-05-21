import AppCtrl from './AppCtrl';

export default class AppCmp {
    constructor() {
      this.template = require('./App.html');
      this.controller = AppCtrl;
    }
}