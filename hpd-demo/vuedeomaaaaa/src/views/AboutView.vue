<template>
  <button @click="getAFun"> GetAA </button>
  <button @click="getBFun"> GetBB </button>
  <button @click="getTokenFun"> getToken </button>
  <button @click="setTokenFun"> setToken </button>
</template>

<script>
//  import axios from 'axios';
// const axios = require('axios');
export default {
  name: 'name',
  data: function() {	
    return {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTIzIiwiVXNlciI6IjQ1NiIsIm5iZiI6MTY2MTIzNTY3OCwiZXhwIjoxNjYyMDk5Njc4LCJpc3MiOiIyMjIyIiwiYXVkIjoiMzMzMyJ9.9HGc2_jmvz8Hrxb-8OMZk-9roddY8dYhPz3DExoU0oM',
    }
  },
  created:function(){},
  methods: {
    getAFun(){
      this.axios.post('http://192.168.10.81:9191/api/AA/GetAA', {},{
          headers:{
            authorization: `Bearer ${this.token}`,
          }
        })
        .then(function (response) {
          console.log('GETAA',response);
        })
        .catch(function (error) {
          console.log('GETAA',error);
        });
    },
    getBFun(){
      this.axios.get('http://192.168.10.81:9191/api/AA/GetBB', {},{
          headers:{
            authorization: `Bearer ${this.token}`,
          }
        })
        .then(function (response) {
          console.log('GETBB',response);
        })
        .catch(function (error) {
          console.log('GETBB',error);
        });
    },
    getTokenFun:function(){
      this.axios.post('http://192.168.10.81:9191/api/AA/getToken', {
        name: '123',
        user: '456'
      },{
        headers:{
        authorization: `Bearer ${this.token}`,
      }
      })
      .then(function (response) {
        console.log('getToken',response);
      })
      .catch(function (error) {
        console.log('getToken',error);
      });
    },
    setTokenFun:function(){
      this.axios.post('http://192.168.10.81:9191/api/AA/setToken', {
        name: '123',
        user: '456'
      },{
        headers:{
        authorization: `Bearer ${this.token}`,
      }
      })
      .then(function (response) {
        console.log('setToken',response);
      })
      .catch(function (error) {
        console.log('setToken',error);
      });
    },
  }
}
</script>

<style scoped>
  button{
    padding: 12px;
    margin-right: 24px;
  }
</style>
