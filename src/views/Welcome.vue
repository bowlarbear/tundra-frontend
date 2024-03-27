<template>
<div v-if="this.loading == true">
  <Loader/>
</div>

<div v-else>
  <header>
      <h1>Welcome to Tundra Vault</h1>
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

//TODO we need to check for the key blob
//if the keyblob does not exist, assume the user needs to flash 3 HWWs
//we need to generate 3 keypairs, 1 on each HWW

//TODO if keyblob is found, we can assume for now the only function the user needs is to scan an animated QR code containing a psbt from tundra mobile
//we should import and display the PSBT and allow the user to sign it
//then provide a new animated QR allowing the user to scan the signed PSBT back to the mobile device



export default {
  name: 'Welcome',
  components: {
    Loader
  },
  data(){
     return{
         loading: false,
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
