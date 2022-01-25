// @ts-nocheck
/**
 * file: src/components/pages/list-user/ListUsers.js
 * data: 19/01/2022
 * description: file responsible for component logic
 *  ListUserComponent.vue'
 * author: André Bitencourt <instagram: @asbitencourt10>
 */

 import UserService from '../../../services/UserService';

 export default {
   name: 'ListUserComponent',
   data() {
     return {
       users: [],
     };
   },
   mounted() {
     this.listAllUsers();
   },
   methods: {
     async listAllUsers() {
       const response = await UserService.getUsers();
       this.users = response;
     },
 
     async newUser(){
      this.$router.push({ path: '/create-user' });
     },
     async removeUser(id) {
       this.$swal({
         title: 'Tem certeza de que deseja excluir o usuário?',
         text: 'Cuidado! Este usuário será excluído!',
         icon: 'warning',
         showConfirmButton: true,
         allowOutsideClick: false,
         allowEnterKey: true,
         allowEscapeKey: false,
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Sim! Por favor, excluir!',
       }).then(async (result) => {
         if (result.value) {
           await UserService.deleteUser(id);
           this.$swal('Deletado', 'Usuário deletado com sucesso!', 'success');
           this.listAllUsers();
         } else {
           this.$swal('Cancelado', 'Cancelar a exclusão', 'info');
         }
       });
     },
   },
 };
