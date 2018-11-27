<template>
  <div>
    <h1> Chat </h1>

    <form id="app" @submit="checkForm" method="post" >
      <label for="name">New Product Name: </label>
      <input id="name" v-model="name" type="text" name="name" >
      <input type="submit" value="Submit">

    </form>

  </div>
</template>


<script>

export default {
  name: 'mini_tchat'
}
</script>

<style>

</style>
