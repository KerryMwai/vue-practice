<template>
  <div id="app">
    <form-helper>
     <div slot="form-header" id="form-header">
       <h3>Form two-Login</h3>
       <p>Enter your details to login</p>
     </div>
     <div slot="form-fields" id="form-fields">
       <input type="text" placeholder="username" required class="user">
       <input type="password" placeholder="password" required class="pass">
     </div>
     <div slot="form-controls" id="btn">
       <button v-on:click="handleSubmit">Submit</button>
     </div>
    </form-helper>
  </div>
</template>

<script>

export default {
 components:{

 },
  data () {
    return {
      title: "I am one of the best Vue templates around here"
    }
  },
  methods:{

  }
}
</script>

<style scoped>
input{
    width: 200px;
    padding: 6px 5px;
    margin: 0 20px;
    font-size: 18px;
}
.user{
  width: 300px;
}
#btn{
  background: lightgray;
  width: 100%;
  padding: 8px 0;
  margin-top:0 ;
}
button{
  width: 120px;
  text-align: center;
  padding: 3px 0;
  margin: 10px 10%;
}
#form-header{
    width: 100%;
    background: lightgray;
    text-align: center;
    padding: 8px 0;
    margin: 5px 0;
    color: green;
    text-transform: capitalize;
}
#form-fields{
    width: 100%;
    background: lightgray;
    text-align: center;
    padding: 8px 0;
    margin: 5px 0; 
}
textarea{
    width: 300px;
    min-height: 100px;
    margin-top:10px ;
}
</style>
