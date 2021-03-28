<template>
  <div id="app">
  <!-- <keep-alive>
   <component v-bind:is='component'></component>
   </keep-alive>
   <button v-on:click="component='form-one'">Show Form One</button>
   <button v-on:click="component='form-two'">Show Form two</button>   -->
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog>
    <list-blogs></list-blogs> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import FormOne from './components/FormOne'
// import FormTwo from './components/FormTwo'
// import FormHelper from './components/FormHelper'
import AddBlog from './components/AddBlog'
import ShowBlog from './components/Showblog'
import lisBlog from './components/ListBlogs'
import Header from './components/Header'
export default {
 components:{
   'add-blog' :AddBlog,
   'show-blog': ShowBlog,
   'list-blogs': lisBlog,
   'app-header': Header
 
 },
  data () {
    return {
      
    }
  }
}
</script>

<style>
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
</style>
