// @ts-nocheck
/**
 * file: src/components/pages/create-user/CreateUser.js
 * data: 19/01/2022
 * description: file responsible for component logic
 *  'CreateUserComponent.vue'
 * author: André Bitencourt <Instagram: @asbitencourt10>
 */

 import { required, email } from 'vuelidate/lib/validators';
 import UserService from '@/services/UserService';
 
 export default {
   name: 'CreateUserComponent',
   data() {
     return {
       userForm: {
         UUID: null,
         nome: null,
         email: null,
       },
       isSubmitted: false,
     };
   },
   validations: {
     userForm: {
       UUID: {
         required
        },
       nome: { required },
       email: {
          required,
          email
       },
     },
   },
   methods: {
     handleSubmitForm() {},
 
     async submitNewUser() {
       try {
         this.isSubmitted = true;
 
         this.$v.$touch();
         if (this.$v.$invalid) {
           this.$swal('Oops!', 'You need to include all the required fields', 'error');
           return;
         }
         
         const response = await UserService.getUserUUID(this.userForm.UUID);
          
          // eslint-disable-next-line eqeqeq
          if(response != '') {
          this.$swal('Oops!', 'UUID já Cadastrado!', 'error');
           return;
          }

          const resposta = await UserService.getUserEmail(this.userForm.email);
          
          // eslint-disable-next-line eqeqeq
          if(resposta != '') {
          this.$swal('Oops!', 'E-mail já Cadastrado!', 'error');
           return;
          }
           
         this.$swal({
           title: 'Tem certeza de que deseja cadastrar o usuário?',
           icon: 'success',
           showConfirmButton: true,
           allowOutsideClick: false,
           allowEnterKey: true,
           allowEscapeKey: false,
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Deseja Cadastrar esse usuário!'
         }).then(async (result) => {
          if (result.value) {
            await UserService.createNewUser(this.userForm);
            this.$swal('Cadastrado', 'Usuário Cadastrado com sucesso!', 'success');
            this.$router.push({ path: '/list-user' });
           }else {
            this.$swal('Cancelado', 'Deseja Cancelar o Cadastro', 'info');
            this.$router.push({ path: '/list-user' });
          }
         });
       } catch (error) {
         console.log(error);
       }
     },
   },
 };
