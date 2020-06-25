<template>
  <div class="container" id="listUsers">
    <TopNavbar />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Avatar</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Company</th>
          <th scope="col">URL</th>
          <th scope="col">Text</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users.data" v-bind:key="user.id"> 
          <router-link v-bind:to="'/users/' + user.id"><th scope="row">{{user.id}}</th></router-link>
          <td>
            <img v-bind:src="user.avatar">
          </td>
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>{{user.email}}</td>
          <td>{{users.ad.company}}</td>
          <td>{{users.ad.url}}</td>
          <td>{{users.ad.text}}</td>
        </tr>
      </tbody>
    </table> 
    
  </div> 
</template>

<script>
    import axios from 'axios';
    import TopNavbar from '@/components/TopNavbar'
    export default {
      components: {
        TopNavbar
      },
        name: 'ListUsers',
        data() {
            return { 
                rows: 100,
                currentPage:1,
                users: [],
            };
        },
        mounted: function(){
            axios
            .get('https://reqres.in/api/users')
            .then((res) => {this.users = res.data})
        }
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    background-color: #f1f1f1;

    
  }
  

  .container {
   border: 1px solid #999;
    border-radius: 4px;
    color: #333;
    overflow: auto;
    padding: 0px;
}

  table {
    border-collapse: collapse;
    width: 100.%;
        
  }

   img {
     border: 1px solid #bbb;
     border-radius: 50%;
     overflow: hidden;
    }

   

    th {
     
      text-align: center;
      font-size: 10px;
      
    }

      
</style>