<template>
  <div class="multi-tab">
    <a-tabs type="editable-card" v-model="activeKey" @edit="onEdit" hideAdd>
      <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closeable="panes.length > 1"></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      activeKey: '0'
    };
  },
  computed: {
    panes: {
      get () {
        console.log(this.$store.getters.multiTab)
        return this.$store.getters.multiTab
      },
      set (val) {}
    }
  },
  watch: {
    panes: function(val) {
      this.panes = val;
    },
    activeKey (newPath) {
      this.$router.push({path: newPath});
    }
  },
  methods: {
    onEdit(target, action) {
      console.log(action);
      this[action](target);
    },
    add() {},
    remove(key) {
      this.panes.length > 1 && this.$store.commit('DELETE_TAB',key);
      this.$router.go(-1);
    },
    tabClick (key) {
      console.log(key)
    }
  }
};
</script>

<style lang="less">
.multi-tab {
  background: #fff;
  margin-top: 2px;
  & > .ant-tabs > .ant-tabs-bar {
    margin: 0;
  }
}
</style>
