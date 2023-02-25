<template>
	<section class="container">
		<h2>Vue.js boilerplate</h2>
		<section>
			<h3>Components for global use</h3>
			<div>
				<p>Click the button to check alert/confirm/modal function</p>
				<div class="btn__wrap">
					<button type="button" class="btn" @click="openDialog('alert')">
						ALERT
					</button>
					<button type="button" class="btn" @click="openDialog('confirm')">
						CONFIRM
					</button>
					<button type="button" class="btn" @click="openPopup()">MODAL</button>
				</div>
			</div>
			<div>
				<p>Selected option is displayed</p>
				<selectbox
					@updateSelected="handleMemberType"
					:options="selectOoptions"
					:boxStyle="selectboxStyle"
				/>
				{{ selectedValue }}
			</div>
		</section>
		<modalLayer v-if="modal.visibleModal">
			<h2 class="modal__title">Title</h2>
			<div class="modal__container">MODAL LAYER CONTAINER</div>
		</modalLayer>
	</section>
</template>

<script setup>
import { getCurrentInstance, reactive, ref } from 'vue';
import { useDialogStore } from '@/store/module/dialog';
import { useModalStore } from '@/store/module/modal';
import modalLayer from '@/component/layer/modalLayer.vue';
import selectbox from '@/component/form/selectboxForm.vue';

const dialog = useDialogStore();
const modal = useModalStore();
const app = getCurrentInstance();
const message = app.appContext.config.globalProperties.$MESSAGE;

const selectedValue = ref('');
const selectOoptions = reactive([
	'option1',
	'option2',
	'option3',
	'option4',
	'option5',
	'option6',
	'option7',
]);
const selectboxStyle = reactive({
	width: '200px',
	height: '40px',
});

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
	}
};
let openPopup = () => {
	modal.openModal(true);
};

const handleMemberType = option => {
	console.log('Emit event handleMemberType', option);
	selectedValue.value = option;
};
</script>

<style lang="scss" scoped>
.container {
	> section {
		width: 640px;
		margin: 0 auto;
		h3 {
			padding-bottom: 10px;
			border-bottom: 1px solid $gray_400;
		}
		> div {
			padding: 30px 0;
			border-bottom: 1px solid $gray_400;
			p {
				margin-bottom: 10px;
			}
		}
	}
	h2 {
		margin-bottom: 50px;
		font-size: 36px;
		text-align: center;
	}
	.btn {
		width: 200px;
		height: 40px;
		background: $gray_300;
		border-radius: 10px;
		&__wrap {
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>
