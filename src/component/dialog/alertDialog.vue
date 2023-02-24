<template>
	<section class="alert__wrap">
		<div class="alert">
			<div
				class="alert__message"
				v-html="alertDialog.alertOption.message || ''"
			></div>
			<footer class="btn__wrap">
				<button
					type="button"
					@keydown.enter="closeAlert($event)"
					@click="closeAlert($event)"
					v-html="alertDialog.alertOption.buttonText || '닫기'"
				></button>
			</footer>
		</div>
	</section>
</template>

<script setup>
import { useDialogStore } from '@/store/module/dialog';

const alertDialog = useDialogStore();

const closeAlert = () => {
	console.log('close alert');
	alertDialog.closeAlertDialog();
};
</script>

<style scoped lang="scss">
.alert {
	overflow: hidden;
	position: relative;
	width: 450px;
	padding-bottom: 80px;
	border-radius: 20px;
	box-sizing: border-box;
	background: $white;

	&__wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 150;
		background-color: rgba(0, 0, 0, 0.5);
	}

	&__message {
		padding: 60px 40px;
		font-size: 18px;
		text-align: center;
	}

	.btn {
		&__wrap {
			display: flex;
			position: absolute;
			bottom: 0;
			width: 100%;
			padding: 0 20px 20px 20px;
			@include center-element;

			button {
				flex: 1;
				height: 60px;
				margin: 0 auto;
				background: $primary;
				color: $white;
				font: {
					size: 18px;
					weight: 500;
				}
				border-radius: 10px;
			}
		}
	}
}
</style>
