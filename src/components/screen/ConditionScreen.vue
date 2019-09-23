<template>
  <div class="condition-filter">
    <div class="filter-item" v-for="(item, index) in filterData" :key="index">
      <strong>{{ item.name }}</strong>
      <label 
        v-for="(tag, _index) in item.lists" 
        :key="_index" 
        class="condition-item" 
        :class="{ 'is-checked': isChecked(tag.id) }"
        @click="handleChange(tag)"
      >
        <input 
          :type="filterType"
          :value="tag.value"
          :name="tag.type">
        <span>{{ tag.label }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedTag: [],
      tempSelect: []
    }
  },
  props: {
    filterData: {
      type: Array,
      default () {
        return []
      }
    },
    filterType: {
      validator (value) {
        return ['radio', 'checkbox'].indexOf(value) !== -1
      },
      default: 'radio'
    }
  },
  created () {
    this.selectedTag = this.filterData.map(item => {
      return item.lists[0] || {}
    })
  },
  methods: {
    handleChange(tag) {
      /* 设置选择为多选
      *  this.tags.every(item => {
      *    return item.value !== list.value;
      *  }) && this.tags.push(list);
      */
      /**
      * 设置选择为单选
      */

      //  遍历选中的每个类型的项，判断判断每一项的值和类型是否都不等于点击的项
      //  如果是的话则将点击项加入选中的数组中

      this.selectedTag.every(item => {
        return item.type !== tag.type && item.id !== tag.id
      }) && this.selectedTag.push(tag)

      // //  在选中项的数组中过滤出类型和点击项相等，但是值不相等的项
      const tempArr = this.selectedTag.filter((item, index) => {
        return item.type === tag.type && item.value !== tag.value
      })

      //  如果过滤的数组存在，遍历选中项数组
      //  判断过滤的数组类型是否和点击项类型相等，如果相等的话，则用点击项替代过滤数组
      //  实际就是控制每种类型只有一个选中项

      !!tempArr[0] && this.selectedTag.forEach((item, index) => {
        if (item.type === tempArr[0].type) {
          this.selectedTag.splice(index, 1, tag)
        }
      })
      this.$emit('change', this.selectedTag)
    },
    isChecked(value) {
      return this.selectedTag.some(item => item.id === value)
    }
  }
}
</script>

<style lang="scss" scoped>
.condition-filter {
  margin: 20px 0;
  .filter-item {
    background: #e7e7e7;
    margin: 10px 0;
    padding: 8px 12px;
    strong {
      margin-right: 20px;
    }
    .condition-item {
      display: inline-block;
      padding: 0 15px;
      margin-right: 10px;
      height: 32px;
      line-height: 32px;
      cursor: pointer;
      position: relative;
      user-select: none;
      input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
      }
      &.is-checked {
        background: #1890ff;
        color: #fff;
      }
    }
  }
}
</style>