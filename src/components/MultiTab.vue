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
        return this.$store.state.multiTab
      },
      set (val) {}
    }
  },
  watch: {
    panes: function(val) {
      this.panes = val;
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
