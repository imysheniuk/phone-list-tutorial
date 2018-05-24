import angular from 'angular';
import uiRouter from 'angular-ui-router';
//todo: figure out how to import styles inside .css files
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import './App.css';
import './components';

import './common';
import AppCmp from './AppCmp';

angular.module('app', ['ui.router', 'app.components', 'app.common'])
.component('app', new AppCmp());
