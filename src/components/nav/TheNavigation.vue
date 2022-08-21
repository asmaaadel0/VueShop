<template>
  <header>
    <nav>
      <ul>
        <h1>VueShop</h1>
        <li>
          <router-link to="/products" :class="firstPage ? 'select-page' : 'not-select-Page'"
            @click="setSelectedComponent('product')">Products
          </router-link>
        </li>
        <li>
          <router-link to="/cart" :class="secondPage ? 'select-page' : 'not-select-page'"
            @click="setSelectedComponent('cart')">Cart</router-link>
        </li>
        <p id="num">1</p>
        <button>Login</button>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      firstPage: true,
      secondPage: false,
    }
  },
  methods: {
    setSelectedComponent(pageClicked) {
      this.$emit("choosenPage", pageClicked);
      if (pageClicked === "product") {
        console.log('product');
        this.firstPage = true;
        this.secondPage = false;
      } else {
        console.log('cart');
        this.firstPage = false;
        this.secondPage = true;
      }
    },
  },
}
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: white;
}

nav {
  height: 100%;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(67, 54, 69);
  margin-right: auto;
  margin-left: 15rem;
}

button {
  margin-left: auto;
  margin-right: 15rem;
  border-radius: 2rem;
  border-style:solid inherit;
  width: 5.5rem;
  height: 2.4rem;
  border-color: rgb(133, 17, 156);
  color: rgb(133, 17, 156);
}

button:hover,
button:active {
  background-color: rgba(194, 77, 217, 0.238);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
  color: rgb(81, 28, 91);
  font-size: 1.3rem;
  font-weight: 600;
  /* display: inline-block; */
  /* line-height: 0.85; */
}

#num {
  display: inline;
  margin: -1.3rem;
  padding: 0.4rem 1.7rem;
  border-radius: 2rem;
  color: white;
  font-size: 1rem;
  background-color: rgb(81, 28, 91);
}

.select-page,
li:hover {
  color: rgb(155, 33, 179);
  border-bottom: 2px solid currentColor;
}
</style>