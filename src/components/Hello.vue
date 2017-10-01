<template>
  <div class="hello">
 <Header />
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
import Header from '../layouts/Header'
export default {
  name: 'hello',
  components: {
    Header
  },
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
