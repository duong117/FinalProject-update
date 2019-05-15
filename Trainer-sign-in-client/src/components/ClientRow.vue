<template>
    <tr v-bind:class="'present-' + client.present">
        <router-link v-bind:to="{name:'detail',params:{client:client.id}}">
        <td>{{client.name}}</td>
        </router-link>
        <td>{{client.when.substring(0,10)}}</td>
        <td>{{client.malefemale}}</td>
        <td>{{client.type}}</td>
        <td><input type="checkbox" v-model="client.present" v-on:change="checked(client)"></td>
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteClient(client)" src="@/assets/delete.png">
        </td>
    </tr>
</template>

<script>
    export default {
        name: "ClientRow",
        props: {
            client: Object,
            edit: Boolean
        },
        methods: {
            checked(client) {
                this.$emit('client-present', client)
            },
            deleteClient(client) {
                if (confirm(`Delete ${client.name}?`))
                    this.$emit('delete-client', client)
            }
        }
    }
</script>

<style>
    .present-true{
        color:gray;
        font-style:italic;
    }
    .present-false{
        font-weight:bold;
    }

table,td {
    text-transform: capitalize;
}

</style>