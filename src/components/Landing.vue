<template>
  <main>
    <section>
    </section>
    <section>
    <v-layout style="max-height: calc(100vh - 0px)">
      <v-flex xs12>
        <img :style="$vuetify.breakpoint.smAndDown ? 'height: 100%; object-fit: fill  ;' : 'height: 100%; width: 100%; object-fit: cover;'" src="./e.png">
            <v-layout style="position: absolute; top: -11px; width: 100%">
              <v-flex xs4>
              </v-flex>
              <v-flex xs4 text-xs-center>
                <img src="../assets/creatrlogo.svg" style=" width:106px;">
              </v-flex>
              <v-flex xs4 text-xs-right pr-5 style="margin-top: 35px;">
                <span class="white--text" style="font-size: 20px;">sign up</span>
              </v-flex>
            </v-layout>
            <v-layout style="position: absolute; top: 43%; width: 99%" justify-center>
              <v-flex xs12 md4 text-xs-center>
                <span id="one"> make <span class="i">i</span>t happen</span>
              </v-flex>
            </v-layout>
      </v-flex>
    </v-layout>
    </section>
  <section>
  <v-layout style="max-height: calc(100vh - 0px)">
    <v-flex xs12>
      <img :style="$vuetify.breakpoint.smAndDown ? 'height: 100%; object-fit: fill  ;' : 'height: 100%; width: 100%; object-fit: cover;'" src="./2.jpg">
          <v-layout style="position: absolute; top: -11px; width: 100%">
            <v-flex xs4>
            </v-flex>
          </v-layout>
          <v-layout style="position: absolute; top: 136%; width: 130%" justify-cente>
            <v-flex xs3>
              <span id="two"> new era of filmmaking<span style="color:#cd2633">.</span></span>
              <span id="three">filmmaking bla blabla </span>
            </v-flex>
          </v-layout>
    </v-flex>
  </v-layout>
  </section>
  <section>
  <v-layout style="max-height: calc(100vh - 0px)">
    <v-flex xs12>
      <img :style="$vuetify.breakpoint.smAndDown ? 'height: 100%; object-fit: fill  ;' : 'height: 100%; width: 100%; object-fit: cover;'" src="./3.jpg">
          <v-layout style="position: absolute; top: -11px; width: 100%">
            <v-flex xs4>
            </v-flex>
          </v-layout>
          <v-layout style="position: absolute; top: 239%; width: 134%" justify-cente>
            <v-flex xs4>
              <span id="two"> your first step into <br /><span style="margin:54px">
                the professional world<span style="color:#cd2633">.</span></span></span>
                <br />
              <span id="three">watch the video</span>
            </v-flex>
          </v-layout>
    </v-flex>
  </v-layout>
  </section>
  <section>
  <v-layout style="max-height: calc(100vh - 0px)">
    <v-flex xs12>
      <img :style="$vuetify.breakpoint.smAndDown ? 'height: 100%; object-fit: fill  ;' : 'height: 100%; width: 100%; object-fit: cover;'" src="./4.jpg">
          <v-layout style="position: absolute; top: -11px; width: 100%">
            <v-flex xs4>
            </v-flex>
          </v-layout>
          <v-layout style="position: absolute; top: 340%; width: 134%" justify-cente>
            <v-flex xs4>
              <span id="four"> sing up now and be<br /><span style="margin:27px"></span>
                the next Martin Scorsese<span style="color:#cd2633">.</span></span> <br />
                <v-form @submit.prevent="submit">
                <v-layout class="grey lighten-1" id="app11">
             <v-text-field
               v-model="email"
               label="write your email"
               outline
               clearable>
               </v-text-field>
         </v-layout>
       </v-form>
      <v-btn type="submit" round color="primary" style="background-color:#cd2633 !important; text-transform: lowercase;margin-left: 55px;"> create an account</v-btn>
                  </v-flex>
          </v-layout>
    </v-flex>
  </v-layout>
  </section>
</main>
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

#app11 {
  margin-left: 54px;
  color: white;
}

.text {
  color: white;
  font-weight: lighter;
}

#two {
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 54px;
}

#three{
  color: white;
  font-size: 19px;
  margin: 54px;
  font-weight: lighter;
}

#four {
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 54px;
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
  font-size: 42px;
  padding-left: 14px;
  font-weight: bold;
  margin-top: 110px;

}
.v-input__slot {
  width: 405px;
  background-color:white;
}
</style>

<script>
import * as firebase from 'firebase'
export default {
  name: 'Landing',
  data () {
    return {
        email: '',
    }
  },
  methods: {

    submit () {
      const person = {
        email: this.form.email
      }

      console.log(person)
      firebase.database().ref().push(person)
      .then(() => {
        // location.reload()
        window.alert('success')
      })
      .catch((error) => {
        window.alert('error')
        console.log(error)
          })
        }
      }
    }
</script>
