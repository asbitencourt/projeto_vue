/**
 * file: src/components/pages/edit-user/EditUser.js
 * data: 19/01/2022
 * description: file responsible for component logic
 *  'EditUserComponent.vue'
 * author: André Bitencourt <instragram: @asbitencourt10>
 */

 import UserService from '../../../services/UserService';

 export default {
   name: 'EditUserComponent',
   data() {
     return {
       userForm: {
       },
     };
   },
 
   mounted() {
     this.getUserById();
   },
 
   methods: {
     async getUserById() {
       const { id } = this.$route.params;
       const response = await UserService.getUserId(id);
       this.userForm = { ...response };
     },
 
     async updateFormUser() {
       // Service call passing properties through the 'userForm' (it works)
       await UserService.updateUser(this.userForm);
       this.$swal({
         title: 'Usuário Alterado com Sucesso!',
         icon: 'success',
         showConfirmButton: true,
         allowOutsideClick: false,
         allowEnterKey: true,
         allowEscapeKey: false,
       }).then((data) => {
         this.$router.push({
           name: 'list',
         });
       });
     },
   },
 };
