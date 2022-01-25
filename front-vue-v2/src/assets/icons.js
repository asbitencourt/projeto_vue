/**
 * file: assets/icons.js
 * date: 19/01/2022
 * description: file responsible for handling icon logic in the application
 * author: André Bitencourt - Instagram <@asbitencourt10>
 */

 import Vue from 'vue';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
 library.add(faUserPlus, faUserEdit, faTrash);
 
 Vue.component('font-awesome-icon', FontAwesomeIcon);
