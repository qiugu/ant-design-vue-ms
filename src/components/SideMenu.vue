<template>
    <div class="sidemenu">
        <a-menu theme="dark" mode="inline" v-model="keyArr"  @click="goPage">
            <template v-for="item in menus">
                <a-menu-item :key="item.key" v-if="!item.children">
                    <a-icon :type="item.icon"/>
                    <span>{{item.title}}</span>
                </a-menu-item>
                <a-sub-menu :key="item.key" v-else>
                    <span slot="title"><a-icon :type="item.icon" /><span>{{item.title}}</span></span>
                    <a-menu-item v-for="child in item.children" :key="child.key">
                    <span>{{child.title}}</span>
                    </a-menu-item>
                </a-sub-menu>
            </template>
        </a-menu>
    </div>
</template>

<script>
import mixin from '@/utils/mixin';
export default {
    mixins: [mixin],
    data () {
        return {
            keyArr: ['about']
        }
    },
    mounted() {
        this.keyArr = [this.$router.currentRoute.name]
    },
    methods: {
        goPage(item) {
            this.keyArr = [item.key]
            this.$router.push({name: item.key})
        }
    }
}
</script>

<style>

</style>
