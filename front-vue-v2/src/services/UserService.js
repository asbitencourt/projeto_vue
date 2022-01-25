/**
 * file: src/services/UserService.js
 * data: 19/01/2022
 * description: file responsible for APIs request methods via HTTP
 * author: André Bitencourt <Instagram: @asbitencourt10>
 */

 import Api from './Api';

 export default {
   /**
    * Method responsible for creating a new  'User'
    * (POST): localhost:3000/api/user
    */
   async createNewUser(user) {
     try {
       const response = await Api().post('/user', user);
       return response.data;
     } catch (error) {
       return console.log(error);
     }
   },
 
   /**
    * Method responsible for listing all 'Users'
    * (GET): localhost:8000/api/user
    */
   async getUsers() {
     try {
       const response = await Api().get('/user');
       return response.data;
     } catch (error) {
       return console.log(error);
     }
   },
 
   /**
    * Method responsible for List by Id a certain 'User'
    * (GET): localhost:8000/api/user/:id
    */
   async getUserId(id) {
     try {
       const response = await Api().get(`/user/${id}`);
       return response.data;
     } catch (error) {
       return console.log(error);
     }
   },

   /**
    * Method responsible for checking if the UUID is already registered
    * (GET): localhost:8000/api/user/UUID/:UUID
    */
   async getUserUUID(UUID) {
    try {
      const response = await Api().get(`/user/UUID/${UUID}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
    * Method responsible for checking if the email is already registered
    * (GET): localhost:8000/api/user/EMAIL/:email
    */
  async getUserEmail(email) {
    try {
      const response = await Api().get(`/user/EMAIL/${email}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
 
   /**
    * Method responsible for updating a certain 'User' by Id
    * (PUT): localhost:8000/api/user/:id
    */
   async updateUser(user) {
     try {
       const id = user._id;
       const response = await Api().put(`/user/${id}`, user);
       return response.data;
     } catch (error) {
       return console.log(error);
     }
   },
 
   /**
    * Method responsible for excluding a certain 'User' by Id
    * (DELETE): localhost:8000/api/user/:id
    */
   async deleteUser(id) {
     try {
       const response = await Api().delete(`/user/${id}`);
       return response.data;
     } catch (error) {
       return console.log(error);
     }
   },
 };
