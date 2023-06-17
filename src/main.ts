// export function render() {
//   document.getElementById("app")!.innerHTML = "main xxx 12";
// }
// render();

// if (import.meta.hot) {
//   import.meta.hot.accept((updatedModule) => {
//     console.log('updatedModule', updatedModule)
//     updatedModule.render()
//   });
// }

import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import { router } from "./router"
import "./style.css"
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
