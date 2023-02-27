<template>
	<section class="container mainView">
		<h2 class="mainView__title">Vue.js boilerplate</h2>
		<section class="mainView__section">
			<h3 class="section__title">Components for global use</h3>
			<div class="mainView__content">
				<p class="content__title">
					Click the button to check alert/confirm/modal function
				</p>
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
			<div class="mainView__content">
				<p class="content__title">Selected option is displayed</p>
				<selectbox
					@update-selected="handlSelectedeOption"
					:options="selectOoptions"
					:boxStyle="selectboxStyle"
				/>
				{{ selectedValue }}
			</div>
		</section>
		<modalLayer>
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

const openDialog = type => {
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
const openPopup = () => {
	modal.openModal(true);
};

const handlSelectedeOption = option => {
	console.log('Emit event handlSelectedeOption', option);
	selectedValue.value = option;
};
</script>

<style lang="scss" scoped>
.mainView {
	&__section {
		width: 640px;
		margin: 0 auto;
		.section {
			&__title {
				padding-bottom: 10px;
				border-bottom: 1px solid $gray_400;
			}
		}
	}
	&__content {
		padding: 30px 0;
		border-bottom: 1px solid $gray_400;
		.content {
			&__title {
				margin-bottom: 10px;
			}
		}
	}
	&__title {
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
