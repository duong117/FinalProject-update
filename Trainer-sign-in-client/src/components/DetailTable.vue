<template>
    <div>
        <div class="card client-list m-2 p-2">
            <h7 class="detail-table-title">History Records</h7>
            </div>

            <div id="client-detail-table">
                <table class="table">
                    <tr>
                        <th>Date</th>
                        <th>Body Weight</th>
                        <th>Body Fat %</th>
                    </tr>
                    <tr v-for="detail in details" >
                        <td>{{detail.today}}</td>
                        <td>{{detail.weight}}</td>
                        <td>{{detail.fat}}</td>
                    </tr>
                </table>
            </div>
        </div>
</template>

<script>
    export default {
        name: "DetailTable",
        props:{
            details:Array
        }
    }
</script>

<style scoped>
    #client-detail-table{
        max-height:500px;
        overflow:scroll;
    }
    .detail-table-title{
        font-size: 25px;
        font-weight: bold;
        text-align: center;
    }
</style>