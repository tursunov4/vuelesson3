<template>
  <header>
    <section class="header-section">
      <div class="container">
        <div class="header-wrapper">
          <img :src="logo" alt="logo-site" />
          <ul class="navabar-link">
            <li v-for="(item, index) in navbarLinks" :key="index">
              <router-link class="links" :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
          <div class="buttun-header">
            <router-link class="links" to="/login">Login</router-link>
            <button @click="singClick" class="singup-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import logo from "../../assets/Images/logo.svg";
import { ref } from "vue";
const navbarLinks = ref([
  {
    name: "HomePage",
    path: "/homePage",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Pricing",
    path: "/princingPage",
  },
  {
    name: "Blog",
    path: "/blog",
  },
]);

const route = useRouter()
const singClick =() =>{
  route.push('/')
}
</script>

<style scoped>
.header-section{
    padding: 40px 0 0 0;
}
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navabar-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.links {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #707070;
}
.active {
  color: aqua;
}
.singup-btn {
  margin-left: 20px;
  border-radius: 5px;
  padding: 10px 22px;
  border: none;
  color: #fff;
  background: #306ef7;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
}
</style>
