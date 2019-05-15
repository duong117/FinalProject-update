<template>

    <div class="client-detail p-2">
        <div class="alert alert-danger" v-show="errors && errors.length>0">
            <li v-for="error in errors">{{error}}</li>
        </div>
        <h6 style="font-size:200%;text-align:center;font-family:verdana;color:#781391;">Client {{client.name}}'s Information</h6>
        <!--this will use the for loop to select only the one with correponding name-->
    <form>
        <h7 style="font-size:170%;font-weight:bold;">Add client's info </h7>

        <div class="form-group">
            <label for="today">Current Date</label>
            <!-- TODO v-model -->
            <input id="today" class="form-control" type="date" v-model.lazy="CurrentDate">
        </div>

        <div class="form-group">
            <label for="weight">Current Weight</label>
            <!-- TODO v-model -->
            <input id="weight" class="form-control" v-model.trim="CurrentWeight">
        </div>

        <div class="form-group">
            <label for="fat">Current Body Fat %</label>
            <!-- TODO v-model -->
            <input id="fat" class="form-control" v-model.trim="CurrentBodyFat">
        </div>

        <button class="btn btn-primary" v-on:click.prevent="addClientDetail"> Add</button>

    </form>
    </div>

</template>

<script>
    export default {
        name: "ClientDetail",
        data(){
            return{
                CurrentDate:'',
                CurrentWeight: '',
                CurrentBodyFat:'',
                client:{
                    name:''
                },
                errors:[]
            }
        },
        mounted(){
            this.client.name=this.$route.params.client
        },

        methods:{
            addClientDetail() {
                this.errors = []
                if (this.CurrentWeight && this.CurrentBodyFat) {
                    let detail = {
                        today: this.CurrentDate,
                        weight: this.CurrentWeight,
                        fat: this.CurrentBodyFat
                    }
                    this.$emit('client-detail-added', detail)
                    this.CurrentDate=''
                    this.CurrentWeight = ''
                    this.CurrentBodyFat = ''
                } else {
                    this.errors.push('Current weight and body fat are required.')
                }
            }

        }

    }
</script>

<style>

    h6{
        text-transform: capitalize;
    }
</style>