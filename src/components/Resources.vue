<template>
    <div>
        <div v-bind:key="resource.id" v-for="resource in resources.data" v-bind:style="{backgroundColor : resource.color}">

            <router-link v-bind:to="'/singleuser/'+ resource.id.da">
            <h5 class="mb-1" >{{resource.id}}</h5>
             <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
            
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{resource.name}}</h5>
            <p class="mb-1">{{resource.color}}</p>
            <small>{{resource.year}}</small>
            <h5 class="mb-1">{{resources.ad.company}}</h5>
            <p class="mb-1">{{resources.ad.url}}</p> 
            
            </div>
            <small>{{resource.pantone_value}}</small>
            <p class="mb-1">{{resources.ad.text}}</p> 

            
            </a>
            </router-link>  
          <!--  <ResourceItem v-bind:resource="resource" v-on:del-resource="$emit('del-resource', resource.id)"/> -->
        </div>
           
    </div>
</template>

<script>
import ResourceItem from '@/components/ResourceItem'

export default {
    name: "Resources",
    components: {
    ResourceItem
    },
    props: ["resources"]
}
</script>

<style scoped>

</style>