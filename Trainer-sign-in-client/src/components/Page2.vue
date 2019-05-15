<template>
    <div id="page2">
        <span class="p-3"><router-link to ="/">Home</router-link></span>
        <ClientDetail v-on:client-detail-added="ClientDetailAdded"></ClientDetail>
        <DetailTable v-bind:details="details"></DetailTable>
        <DetailMessage></DetailMessage>

    </div>

</template>

<script>
    import ClientDetail from '@/components/ClientDetail.vue'
    import DetailTable from '@/components/DetailTable.vue'
    import DetailMessage from '@/components/DetailMessage.vue';

    export default {
        name: "Page2",
        data() {
            return {
                details: []
            }
        },
        components: {
            DetailMessage,
            ClientDetail,
            DetailTable
        },
        methods: {
            ClientDetailAdded(client) {
                console.log(client)
                this.details.push(client)
                this.$client_api.updateClient(client).then( response => {
                    // reload clients? 
                    // 
                })
            }
        }
    }
</script>

<style>
    .p-3{
        font-size: 30px;
    }

</style>