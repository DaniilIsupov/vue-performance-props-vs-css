// necessary for webpack
import { createApp } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { router, routerHistory } from './router';
import App from './App.vue';

declare global {
    interface Window {
        // h: HTML5History
        h: typeof routerHistory;
        r: typeof router;
        vm: ComponentPublicInstance;
    }
}

// for testing purposes
window.h = routerHistory;
window.r = router;

const app = createApp(App);
app.config.performance = true;
app.mixin({
    beforeRouteEnter() {
        console.log('mixin enter');
    }
});

app.use(router);

window.vm = app.mount('#app');
