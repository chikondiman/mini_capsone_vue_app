

<template>




  <div class="home">

    
    

    
    <h1>{{ message }}</h1>
    <h1>{{ priority }}</h1>
    <p>
      Name:
      <input type="text" v-model="newUserName" />
    </p>
    <p>
      Email:
      <input type="text" v-model="newUserEmail" />
    </p>
    <p>
      TextChikondi:
      <input type="text" v-model="newUserTextChikondi" />
    </p>
    <p>
      Password:
      <input type="password" v-model="newUserPassword" />
    </p>

    <button v-on:click="addUser()">join the chikondimen & chikondi-women</button>
    <!-- <h1>{{ users }}</h1> -->
    <!-- users.each do |user| -->
    <div v-bind:key="user.id" v-for="user in users">
      <p>id: {{ user.id }}</p>
      <p>name: {{ user.name }}</p>
      <p>email: {{ user.email }}</p>
      <p>text chikondi: {{ user.textChikondi }}</p>
      <button v-on:click="showInfo(user)">Show more info</button>
      <div v-if="currentUser === user">
        <p>name: {{ user.name }}</p>
        <p>text Chikondi: {{ user.textChikondi }}</p>
        <img v-bind:src="user.image_url" />

        <p>
          name:
          <input type="text" v-model="user.name" />
       
        <p>
          email:
          <input type="text" v-model="user.email" />
        </p>
         </p>
        <p>
          textChikondi:
          <input type="text" v-model="user.textChikondi" />
        </p>
        <p>
          password:
          <input type="text" v-model="user.password" />
        </p>

        
      

        <button v-on:click="updateUser(user)">update user</button>
        <p>

          saga & story of chikondiman
        </p>
      </div>

      <hr />
    </div>
  </div>
</template>


<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to chikondiman.com",
      priority: "chikondi-sama for Hokage!",
      name: [],
      newUserEmail: "",
      newTextChikondi: "",
      newPassword: ""
      // currentUser: {},
    };
  },
  created: function() {
    console.log("in the created");
    console.log("this outside callback");
    axios.get("/api/users").then(response => {
      console.log("this inside callback");
      console.log(response.data);
      this.users = response.data;
    });
  },
  methods: {
    addUser: function() {
      console.log(this.newUser);
      // get some data
      var params = {
        input_name: this.newUserName,
        input_email: this.newUserEmail,
        input_TextChikondi: this.newTextChikondi,
        input_Password: this.newUserPassword
      };
      // send it to rails
      axios.post("/api/users", params).then(response => {
        console.log(response.data);
        this.users.push(response.data);
        this.newUserName = "";
        this.newUserEmail = "";
        this.newUserTextChikondi = "";
        this.newUserPassword = "";
    
      });
    },
    showInfo: function(theRecipe) {
      console.log("showing info...");
      console.log(theRecipe);
      this.currentRecipe = theRecipe;
    },
    updateRecipe: function(theRecipe) {
      console.log("update recipe");
      console.log(theRecipe);
      var params = {
        name: theUser.name,
        email: theUser.email,
        textChikondi: theUser.textChikondi,
        password: theUser.password,
        
      };
      axios.patch(`/api/users/${theUser.id}`, params).then(response => {
        console.log(response.data);
        theUser = response.data;
      });
    },
  },
};
</script>