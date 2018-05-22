import angular from 'angular';
import uiRouter from 'angular-ui-router';


import './App.css';
import './components';

import './common';
// import './config';
import AppCmp from './AppCmp';

import test from './common/Config';

angular.module('app', ['app.components', 'app.common', 'ui.router'])
.component('app', new AppCmp()).config(test);
