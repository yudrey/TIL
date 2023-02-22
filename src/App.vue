<template>
	<router-view />

	<alertDialog v-if="dialog.alertOption.open" />
	<confirmDialog v-if="dialog.confirmOption.open" />
</template>

<script setup>
import { useDialogStore } from '@/store/module/dialog';
import alertDialog from '@/component/dialog/alertDialog';
import confirmDialog from '@/component/dialog/confirmDialog';

const dialog = useDialogStore();
</script>
