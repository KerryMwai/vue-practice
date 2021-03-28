<template>
  <div id="app">
    <form-helper>
     <div slot="form-header" id="form-header">
       <h3>This the from title</h3>
       <p>Information about the form</p>
     </div>
     <div slot="form-fields" id="form-fields">
       <input type="text" placeholder="name" required>
       <label for="message">Your message: </label>
       <textarea></textarea>
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
    width: 300px;
    padding: 6px 5px;
    margin: 0 20px;
    font-size: 18px;
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
