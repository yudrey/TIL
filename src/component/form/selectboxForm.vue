<template>
	<div
		class="selectbox"
		:style="{ width: boxStyle.width, height: boxStyle.height }"
	>
		<div
			:class="['selected', { 'selected--active': visibleOptions }]"
			@click.stop.prevent="viewOptions($event)"
		>
			{{ selectedValue }}
		</div>
		<ul class="option__wrap" v-if="visibleOptions">
			<li
				class="option"
				v-for="(list, index) in options"
				:key="`option_${index}`"
				@click.stop.prevent="getSelectedData(list)"
			>
				{{ list }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, onUpdated } from 'vue';
const emit = defineEmits(['updateSelected', 'updateVisivility']);
const props = defineProps({
	options: {
		type: Array,
		required: true,
	},
	disableSelectbox: {
		type: Boolean,
		required: false,
	},
	defaultSelected: {
		type: String,
		required: false,
		default: '선택',
	},
	boxStyle: {
		type: Object,
		required: false,
		default: () => {
			return {
				width: '160px',
				height: '40px',
			};
		},
	},
});

const selectedValue = ref(
	props.defaultSelected ? props.defaultSelected : '선택'
);
const visibleOptions = ref(false);

const getSelectedData = option => {
	console.log('getSelectedData');
	selectedValue.value = option;
	emit('updateSelected', option);

	visibleOptions.value = false;
};

const viewOptions = e => {
	const disabledValue = e.target.parentElement?.classList?.contains('disabled');
	if (!props.disableSelectbox && !disabledValue) {
		visibleOptions.value = !visibleOptions.value;
	} else {
		visibleOptions.value = false;
	}
};

onUpdated(() => {
	console.log('onUpdated selectboxForm');

	document.addEventListener(
		'click',
		addEventListener('click', event => {
			if (event.target.className !== 'selected') {
				visibleOptions.value = false;
			}
		})
	);
});
</script>

<style lang="sass" scoped></style>
