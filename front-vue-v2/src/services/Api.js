/**
 * file: src/services/Api.js
 * data: 19/01/2022
 * description: file responsible for initializing 'axios' and
 * HTTP base url requests.
 * author: André Bitencourt <instragam: @asbitencourt10>
 */

 import axios from 'axios';

 export default () => axios.create({
   // 'baseURL' do Back-End -> Will communicate the front with the back
   baseURL: 'http://localhost:8000/api',
 });
