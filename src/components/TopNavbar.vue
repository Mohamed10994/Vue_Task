<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
       <li class="nav-item">
        <router-link class="nav-link" to="/Home">AllResources</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/About">ListUsers</router-link>
      </li>
     
    
    </ul>
  </div>
</nav>
</template>

<style scoped>
*{
    border: 0px;
    margin: 0px;
    padding: 0px 0px;
}

</style>