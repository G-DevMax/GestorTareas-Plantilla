<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="../src/assets/logo.png" width="50px" style="margin: 5px;">
    <a class="navbar-brand" href="/home">Gestor de Tareas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/addtask"><i class='bx bx-plus-circle'></i> Añadir Tareas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/tasklist"><i class='bx bx-list-ul' ></i> Lista de Tareas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/combinedview"><i class='bx bx-customize' ></i> Vista Combinada</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view>
    
    </router-view>
  </div>
</template>

<style>
#app {
  font-family: "Comfortaa", serif;
}

nav {
  padding: 30px;
  background-color: #2a3e53d4;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.navbar-brand {
  color: #C0EBA6;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navbar-brand:hover{
  color: #60ff00;
}

.nav-link {
  color: #42b983;
  transition: 0.3s ease;
}

.nav-link:hover{ 
  color: #60ff00;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
