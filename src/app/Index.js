import angular from 'angular';

import './App.css';
import './components';
// import './config';
import AppCmp from './AppCmp';

angular.module('app', ['app.components'])
.component('app', new AppCmp());

// import angular from 'angular';

// import './App.css';
// import './components';
// import './config';
// import AppCmp from './AppCmp';

// angular.module('app', ['app.components', 'app.config'])
// .component('app', new AppCmp());
