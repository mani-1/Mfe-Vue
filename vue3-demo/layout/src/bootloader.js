import { createApp, defineAsyncComponent } from "vue";
import Layout from "./Layout.vue";
var faker = require('faker');

var randomName = faker.name.findName()
console.log(randomName);

const Content = defineAsyncComponent(() => import("home/Content"));
const Button = defineAsyncComponent(() => import("home/Button"));

const app = createApp(Layout);

app.component("content-element", Content);
app.component("button-element", Button);

app.mount("#app");
