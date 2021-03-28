<template>
        <nav>
            <ul>
                <li><router-link to='/' exact>Blog</router-link></li>
                <li><router-link to='/add' exact>Add</router-link></li>
                <li><router-link to='/formone' exact>Form One</router-link></li>
                <li><router-link to='/formtwo' exact>Form Two</router-link></li>
                <li><router-link to='/formhelper' exact>Form Helper</router-link></li>
                <li><router-link to='/listblogs' exact>List Blogs</router-link></li>
            </ul>
        </nav>
</template>

<script>

</script>

<style>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    padding: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
