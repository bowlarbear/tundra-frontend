<template>
<div v-if="this.loading == true">
  <Loader/>
</div>

<div v-else>
  <header>
      <h1>Welcome to Passport Vault</h1>
      <h2>H2 Placeholder</h2>
      <!-- <h4 v-if="this.conditionalError == true">* conditional error placeholder</h4> -->
    </header>
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">Checkbox placeholder</label>
            </div>
        </form>
            <div class="btn_container"> 
                <button v-if="checkbox" @click="proceed()" class="btn">Proceed</Button>
                <button v-else @click="warn()" class="btn3">Proceed</Button>
            </div>
    </div>
</div>

</template>

<script>
// import store from '../store.js'
import Loader from '@/components/loader'
// const invoke = window.__TAURI__.invoke



export default {
  name: 'Welcome',
  components: {
    Loader
  },
  data(){
     return{
         loading: true,
         checkbox: false,
     }
 },
 methods:{
  warn(){
    //show feedback
  },
 },
  mounted(){
   //need to check for keyblob
   //if found, prompt user to scan PSBT from phone
   //otherwise, assume we should be doing initial setup
 },
}
</script>
