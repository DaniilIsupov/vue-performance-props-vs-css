<template>
    <div>
        <pre>src\views\ListWithProps.vue</pre>

        <ItemWithProps
            v-for="(item, index) in items"
            :key="item.key"
            :with-top-border="index > 0"
            :with-bottom-border="index < items.length - 1"
        >
            {{ item.text }}
        </ItemWithProps>
    </div>
</template>

<script setup lang="ts">
import ItemWithProps from '../components/ItemWithProps.vue';

const items = new Array(4096).fill(0).map((item, index) => ({
    text: Math.random().toString(36).slice(2, 7),
    key: index
}));
</script>
