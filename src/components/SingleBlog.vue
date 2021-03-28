<template>
    <div id="single-blog">
        <h2>{{blog.title}}</h2>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <ul>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://brew-crew-1439b-default-rtdb.firebaseio.com/post/'+this.id+'.json').then((data)=>{
           return data.json()
        }).then((data)=>{
            this.blog=data
        })
    }
}
</script>