import { createStore } from "vuex";

import productsModule from "./modules/product";
import cartModule from "./modules/cart";

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
});
export default store;
