<template>
  <div>
      <h1>Please Fill out the form...</h1>
      <div id="form-header">
          <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
          <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
          <slot name="form-controls"></slot>
      </div>
      <div id="useful-links">
          <ul>
              <li>
                  <a href="#">Link 1</a>
              </li>
              <li>
                  <a href="#">Link 2</a>
              </li>
              <li>
                  <a href="#">Link 3</a>
              </li>
              <li>
                  <a href="#">Link 4</a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      
    }
  }
}
</script>

<style>
h1{
    width: 100%;
    padding: 10px 0;
    color: lightblue;
    text-align: center;
    text-decoration: underline;
    text-transform: capitalize;
}
#form-header{
    width: 100%;
    margin: 10px 0;
    padding: 10px 0;
    background: lightgray;
    text-align: center;
}
#form-fields{
    width: 100%;
    margin: 10px 0 0 0;
    padding: 10px 0;
    background: lightgray;
    align-items: center;
}

ul{
    width: 90%;
    background: #444;
    padding: 10px 0;
}
li{
    display: inline;
}
a{
    text-decoration: none;
}
</style>