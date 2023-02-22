<template>
	<section class="modal__wrap">
		<div class="modal">
			<slot></slot>
			<button
				class="btn__close"
				type="button"
				@keydown.enter="closeModal($event)"
				@click="closeModal($event)"
			>
				<span>닫기</span>
			</button>
		</div>
	</section>
</template>

<script setup>
import { useModalStore } from '@/store/module/modal';

const modal = useModalStore();

const closeModal = () => {
	console.log('close modal layer');
	modal.openModal(false);
};
</script>

<style scoped lang="scss">
.modal {
	position: relative;
	min-width: 800px;
	max-width: calc(100% - 20px);
	min-height: 50%;
	max-height: 80%;
	background: white;

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

	::v-deep &__container {
		width: 100%;
		height: 100%;
		padding: 50px;
		font-size: 18px;
	}

	.btn {
		&__close {
			position: absolute;
			top: 0;
			right: 0;
			width: 50px;
			height: 50px;

			span {
				@include hide-text;
			}

			&:before,
			&:after {
				position: absolute;
				top: 10px;
				right: 20px;
				z-index: 5;
				content: ' ';
				height: 24px;
				width: 2px;
				background-color: #000;
			}

			&:before {
				transform: rotate(45deg);
			}

			&:after {
				transform: rotate(-45deg);
			}
		}
	}
}
</style>
