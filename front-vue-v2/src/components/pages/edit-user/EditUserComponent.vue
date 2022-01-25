<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Alterar Usuário</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateFormUser()">

         <!--START OF BLOCK: UUID-->
          <div class="form-group">
            <label class="font-weight-bold">UUID:</label>
            <input
              type="text"
              id="UUID"
              name="UUID"
              disabled = "disabled"
              class="form-control"
              v-model="userForm.UUID"
            >
          </div>
          <!--END OF BLOCK: UUID-->

          <!--START OF BLOCK: User Name-->
          <div class="form-group">
            <label class="font-weight-bold">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              class="form-control"
              v-model="userForm.nome"
            >
          </div>
          <!--END OF BLOCK: User Name-->

          <!--START OF BLOCK: email -->
          <div class="form-group">
            <label class="font-weight-bold">E-mail:</label>
            <input
              type="text"
              id="email"
              name="email"
              class="form-control"
              v-model="userForm.email"
            >
          </div>
          <!--END OF BLOCK: email -->

          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-edit']"/> Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./EditUser.js"></script>

<style src="" scoped></style>
