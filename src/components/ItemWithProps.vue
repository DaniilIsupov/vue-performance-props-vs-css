<template>
    <div
        :class="[
            'item-with-props',
            {
                'with-bottom-border': withBottomBorder,
                'with-top-border': withTopBorder
            }
        ]"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    withBottomBorder?: boolean;
    withTopBorder?: boolean;
}

defineProps<Props>();
</script>

<style>
.item-with-props {
    margin: 8px;
    border-color: red;
    border-style: solid;
    border-width: 0px;
}

.with-top-border {
    border-top-width: 1px;
}

.with-bottom-border {
    border-bottom-width: 1px;
}
</style>
