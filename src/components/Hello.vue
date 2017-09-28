<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ul>
        <li v-bind:key="user.id" v-for="user  in users">
          {{user.firstname}} {{user.lastname}}
        </li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="input_val"> Input Value:
      <span v-text="input_val"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      users: [
        { firstname: 'Sebastian', lastname: 'Eschweiler' },
        { firstname: 'Bill', lastname: 'Smith' },
        { firstname: 'John', lastname: 'Porter' }
      ],
      input_val: '',
      msg: 'Welcome to Your Vuuuuuuuue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../global_scss/colors.scss';
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 100px;
  color: $adidas-lipstick;
    
  }
}


a {
  color: $adidas-lipstick;
}
</style>
