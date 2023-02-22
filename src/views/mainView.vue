<template>
	<section class="container">
		<h2>Vue.js boilerplate</h2>
		<div class="btn__wrap">
			<button type="button" class="btn" @click="openDialog('alert')">
				ALERT
			</button>
			<button type="button" class="btn" @click="openDialog('confirm')">
				CONFIRM
			</button>
			<button type="button" class="btn" @click="openDialog('modal')">
				MODAL
			</button>
		</div>
		<modalLayer v-if="modal.visibleModal">
			<div class="modal__container">MODAL LAYER CONTAINER</div>
		</modalLayer>
	</section>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import { useDialogStore } from '@/store/module/dialog';
import { useModalStore } from '@/store/module/modal';
import modalLayer from '@/component/layer/modalLayer.vue';

const dialog = useDialogStore();
const modal = useModalStore();
const app = getCurrentInstance();
const message = app.appContext.config.globalProperties.$MESSAGE;

const checkConfirm = payload => {
	console.log('payload ===', payload);
	if (payload) {
		console.log('define function when click ok btn');
	} else {
		console.log('define function when click cancel btn');
	}
};

let openDialog = type => {
	console.log('type ===', type);
	switch (type) {
		case 'alert':
			dialog.openAlertDialog({
				message: message.ALERT.NO_01,
				buttonText: '확인',
			});
			break;
		case 'confirm':
			dialog.openConfirmDialog({
				message: message.CONFIRM.NO_01,
				cancel: '닫기',
				ok: '확인',
				callback: checkConfirm,
			});
			break;
		case 'modal':
			modal.openModal(true);
			break;
	}
};
</script>

<style lang="scss" scoped>
.container {
}
h2 {
	font-size: 36px;
	text-align: center;
}
.btn {
	width: 200px;
	height: 40px;
	margin: 0 20px;
	background: #eee;
	&__wrap {
		display: flex;
		justify-content: center;
		margin-top: 50px;
	}
}
</style>
