<template>
    <div class="resource-item" v-blind:class="{'is-complete':resource.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{resource.title}}
            <button @click="$emit('del-resource', resource.id)" class="del">x</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "resourceitem",
    props: ["resource"],
    methods: {
        markComplete() {
            this.resource.completed = !this.resource.completed;
        }
    }
}
</script>

<style scoped>
  .resource-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>