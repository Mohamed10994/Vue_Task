<template>
  <div id="app">
    <TopNavbar />
    <AddResources v-on:add-resource="addResource"/>
    <Resources v-bind:resources="resources" v-on:del-resource="deleteResource"/>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar'
import Resources from '../components/Resources'
import AddResources from '@/components/AddResources'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    Resources,
    AddResources,
    TopNavbar
    
  },
  data() {
    return {
      resources: []
    }
    
  },
 


  /*methods: {
    deleteResource(id) {
      axios.delete('https://reqres.in/api/unknown/${id}')
     .then( res => this.resources = this.resources.filter(resource => resource.id != id))
     .catch(err => console.log(err));
    },
    addResource(newResource){
      const {title, completed} = newResource;
      axios.post('https://reqres.in/api/unknown/', {
        title,
        completed
      })
      .then(res =>this.resources = [...this.resources, res.data])
      .catch(err => console.log(err));
    }
  },*/
  created() {
    axios.get('https://reqres.in/api/unknown/')

      .then(res => this.resources = res.data)
      .catch(  (error) => {
        const response = error.response
        console.log(response.data.errors)
    })
  }
  
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  } 
  
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn.hover {
    background: #666;
  }
</style>