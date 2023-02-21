import { createRouter, createWebHistory } from 'vue-router';
import mainView from '@/views/mainView.vue';
import subView from '@/views/subView.vue';

const routes = [
	{
		path: '/',
		name: 'main',
		component: mainView,
		props: true,
	},
	{
		path: '/sub',
		name: '서브페이지',
		component: subView,
		props: true,
		meta: {
			nav: ['메인', '서브페이지'],
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
