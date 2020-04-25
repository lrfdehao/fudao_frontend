const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./components/HelloWorld.vue'], resolve)
    }
];
export default routers;