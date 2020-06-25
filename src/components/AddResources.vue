<template>
    <div>
        <form @submit.prevent="addResource">
            <input type="text" v-model="title" name="title" placeholder="Add Resource...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>

export default {
    name: "AddResource",
    data() {
        return {
            title:''
        }
    },
    methods: {
        addResource() {
            const newResource = {
                title: this.title,
                completed: false
            }
            this.$emit('add-resource', newResource);
            this.title = '';
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
    input[type="submit"] {
        flex: 2;
    }
</style>