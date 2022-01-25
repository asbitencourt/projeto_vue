<template>
  <div>
     <button @click="newUser" class="btn btn-primary">
       <font-awesome-icon :icon="['fas', 'user-plus']" /> Cadastrar Usuário
            </button>
    <h3 class="text-center">Listar Todos Usuários</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">UUID</th>
          <th class="text-center">Nome</th>
          <th class="text-center">E-mail</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{ user.UUID }}</td>
          <td>{{ user.nome }}</td>
          <td>{{ user.email }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: user._id } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'user-edit']" /> Alterar
            </router-link>
          </td>
          <td>
            <button @click="removeUser(user._id)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" /> Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./ListUser.js"></script>

<style src="" scoped></style>
