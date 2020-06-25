<template>
  <div id="single-resource">
   
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
       
            <div class="d-flex w-100 justify-content-between">

            <h5 class="mb-1">{{resource.name}}</h5>

            <p class="mb-1">{{resource.color}}</p>
            
            
            <small>{{resource.year}}</small>
            
            </div>
            
            <small>{{resource.pantone_value}}</small>
        </a>

  </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'single-resource',
        data() {
            return { 
                id: this.$route.params.id,
                resource: {},
            };
        },
        mounted: function(){
            axios
            .get('https://reqres.in/api/unknown/' + this.id)
            .then((res) => {this.resource = res.data.data;})
        }
    }
</script>