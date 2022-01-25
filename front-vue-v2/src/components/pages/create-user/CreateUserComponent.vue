<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Usuário</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">

          <!-- START BLOCK: UUID -->
          <div class="form-group">
            <label class="font-weight-bold">UUID</label>
            <input
              type="text"
              id="UUID"
              name="UUID"
              class="form-control"
              placeholder="Informe seu UUID"
              v-model="userForm.UUID"
              :class="{
                'is-invalid': isSubmitted && $v.userForm.UUID.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.userForm.UUID.required"
              class="invalid-feedback"
            >
              'User Name' field is required!
            </div>
          </div>
          <!-- END BLOCK: UUID -->
          <!-- START BLOCK: User Name -->
          <div class="form-group">
            <label class="font-weight-bold">User Name</label>
            <input
              type="text"
              id="nome"
              name="nome"
              class="form-control"
              placeholder="Informe seu Nome"
              v-model="userForm.nome"
              :class="{
                'is-invalid': isSubmitted && $v.userForm.nome.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.userForm.nome.required"
              class="invalid-feedback"
            >
              'User Name' field is required!
            </div>
          </div>
          <!-- END BLOCK: User Name -->

          <!-- START BLOCK: Email -->
          <div class="form-group">
            <label class="font-weight-bold">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              class="form-control"
              placeholder="Informe seu E-mail"
              v-model="userForm.email"
              :class="{
                'is-invalid': isSubmitted && $v.userForm.email.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.userForm.email.required"
              class="invalid-feedback"
            >
              'Email' field is required!
            </div>
          </div>
          <!-- END BLOCK: email -->
          <div class="form-group">
            <button @click="submitNewUser" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./CreateUser.js"></script>

<style src="" scoped></style>
