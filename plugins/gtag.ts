import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }: {app: any}) => {
    Vue.use(VueGtag, {
        config: { id: 'G-74YL05QGCE' },
        appName: 'Candy Shop',
        pageTrackerScreenviewEnabled: true
    }, app.router);
}