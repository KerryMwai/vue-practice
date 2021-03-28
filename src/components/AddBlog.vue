<template>
  <div id="add-blog">
    <h2>Add a New Blog</h2>
    <form action="" v-if="!submitted">
      <label for="title">Blog Title: </label>
      <input type="text" v-model.lazy="blog.title" required>
      <label for="content">Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="check-boxes">
        <label for="Java">Java</label>
        <input type="checkbox" value="Java" v-model="blog.categories">
        <label for="Javascript">Javascript</label>
        <input type="checkbox" value="Javascript" v-model="blog.categories">
        <label for="Python">Python</label>
        <input type="checkbox" value="Python" v-model="blog.categories">
        <label for="Ruby">Ruby</label>
        <input type="checkbox" value="Ruby" v-model="blog.categories">
        <label for="Flutter">Flutter</label>
        <input type="checkbox" value="Flutter" v-model="blog.categories">
      </div>
        <label for="">Author: </label>
        <select name="" id="" v-model="blog.author">
          <option v-for="author in authors">{{author}}</option>
        </select>
        <button v-on:click.prevent="post()">Add Blog</button>
    </form>
      <div v-if="submitted">
        <h3>Thanks for Adding a Blog</h3>
      </div>
    <div id="preview">
      <h3>Blog Preview</h3>
      <p style="text-decoration:underline">Blog Title:</p>
      <p>{{blog.title}} </p>
      <p style="text-decoration:underline">Blog Content:</p>
      <p>{{blog.content}} </p>
      <p>Blog Category: </p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
            blog:{
                   title: '',
                   content: '',
                   categories: [],
                   author: ""
            },
            authors: ['The Java', 'The Angular', 'The Javascript', 'The Python','The Flutter'],
            submitted:false
    }
  },
  methods:{
      post: function(){
        this.$http.post('https://brew-crew-1439b-default-rtdb.firebaseio.com/post.json',this.blog).then(function(data){
          console.log(data);
          this.submitted=true
        })
      }
  }
}

</script>

<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  margin: 20px 0 10px;
  display: block;
}
input[type='text'], textarea{
  display: block;
  width:100%;
  padding: 8px;
}

#preview{
  padding:10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
input[type='text']{
  margin-left: -1px;
}

</style>
