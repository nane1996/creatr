<template>
  <v-layout>
    <v-flex>
    <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.frist_layor {
  background-image:
}
.sing_up {
  color: white;
  font-size: 20px;
  margin-top: -73px;
  text-align: right;


}
.text {
  color: white;
  font-weight: lighter;
}

#two {
  color: white;
  font-size: 30px;
  font-weight: bold;
}

.i {
  color: #cd2633;
  position: relative;
}

.i:before {
  content: "ı";
  position: absolute;
  color: white;
}

body {
  background-color: #060606;
  font-family: 'Roboto';
}

#one {
  color: white;
  font-size: 34px;
  padding-left: 14px;
  font-weight: bold;
  margin-top: 110px;


}
.v-input__slot {
  width: 405px;
  background-color:white;


}
</style>

<!-- position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); -->
