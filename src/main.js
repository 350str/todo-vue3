import { createApp } from 'vue'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';

import App from './App.vue'
import router from './router';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App)
    .use(router)
    .component('Button', Button)
    .component('InputText', InputText)
    .component('Checkbox', Checkbox)
    .mount('#app')
