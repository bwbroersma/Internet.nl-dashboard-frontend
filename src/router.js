import VueRouter from "vue-router";

import Login from './components/Login'
import DomainListManager from './components/domains/DomainListManager'
import SpreadsheetUpload from './components/domains/SpreadsheetUpload'
import ScanMonitor from './components/scans/ScanMonitor'
import Report from './components/reports/Report'
import SharedReport from './components/reports/SharedReport'

import SwitchAccount from './components/admin/SwitchAccount'
import InstantAddAccount from './components/admin/InstantAddAccount'
import Usage from './components/admin/usage'
import Account from './components/account/Account'
import Demo from './components/tour/Demo'
import Unsubscribe from './components/mail/Unsubscribe'

import Beta from './components/beta'

const routes = [
    // todo: Make page title translations...
    {path: '/login', component: Login, name: "login", meta: {title: 'Internet.nl Dashboard / Login'}},
    {
        path: '/domains/list/:list',
        component: DomainListManager,
        name: 'numbered_lists',
        meta: {title: 'Internet.nl Dashboard / Domains'}
    },
    {
        path: '/domains',
        component: DomainListManager,
        name: 'domains',
        meta: {title: 'Internet.nl Dashboard / Domains'},
        alias: '/'
    },
    {
        path: '/domains/upload', component: SpreadsheetUpload,
        props: {
            max_lists: 200,
            max_urls: 5000,
        },
        meta: {title: 'Internet.nl Dashboard / Domains / Upload'}
    },
    {path: '/scans', component: ScanMonitor, meta: {title: 'Internet.nl Dashboard / Scan Monitor'}},
    {
        path: '/report/:report/:compare_with',
        component: Report,
        name: 'compared_numbered_report',
        meta: {title: 'Internet.nl Dashboard / Reports'}
    },
    {
        path: '/report/:report',
        component: Report,
        name: 'numbered_report',
        meta: {title: 'Internet.nl Dashboard / Reports'}
    },
    {path: '/report', component: Report, meta: {title: 'Internet.nl Dashboard / Reports'}},

    {path: '/shared/:report', component: SharedReport, meta: {title: 'Internet.nl Dashboard / Reports'}},
    {path: '/shared/:report/:compare_with', component: SharedReport, meta: {title: 'Internet.nl Dashboard / Reports'}},

    {path: '/switch-account', component: SwitchAccount, meta: {title: 'Internet.nl Dashboard / Switch Account'}},
    {path: '/add-user', component: InstantAddAccount, meta: {title: 'Internet.nl Dashboard / Add User'}},
    {path: '/tour', component: Demo, meta: {title: 'Internet.nl Dashboard / Tour'}, name: 'tour'},
    {path: '/demo', component: Demo, meta: {title: 'Internet.nl Dashboard / Tour'}, name: 'demo'},
    {path: '/unsubscribe', component: Unsubscribe, meta: {title: 'Internet.nl Dashboard / Unsubscribe'}},
    {path: '/profile', component: Account, meta: {title: 'Internet.nl Dashboard / Account'}},
    {path: '/account', component: Account, meta: {title: 'Internet.nl Dashboard / Account'}},
    {path: '/usage', component: Usage, meta: {title: 'Internet.nl Dashboard / Usage'}},
    {path: '/beta', component: Beta, meta: {title: 'Internet.nl Dashboard / Beta'}},
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    props: true,
    // https://reactgo.com/scroll-to-anchor-tags-vue-router/
    // does not work, as nested anchors is not a thing (and not reliable). So do this in component.
    scrollBehavior: function (to) {
        if (to.hash) {
            return {selector: to.hash}
        }
    },
});

export default router
