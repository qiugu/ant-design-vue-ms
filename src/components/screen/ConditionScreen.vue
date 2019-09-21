<template>
  <div class="screen">
    <div v-for="(item, index) in searchData" :key="index" class="screen-type">
      <strong :style="{ marginRight: '20px' }">{{ item.name }}</strong>
      <template v-for=" tag in item.tags">
        <label :key="tag.value">
          <input
            :value="tag.value"
            :key="tag.value"
            :type="type"
            :name="tag.type"
            @change="(checked) => handleChange(tag, checked)"
          />
          <span :class="{ 'is-checked': isChecked }">{{ tag.label }}</span>
        </label>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Checkbox } from 'ant-design-vue'

@Component
export default class ConditionScreen extends Vue {

  private tags: string[] = []

  @Prop({required: true}) private searchData!: any[]

  @Prop({
    default: 'radio',
    validator: value => ['radio', 'checkbox'].indexOf(value) !== -1
  })type!: string

  private selectedTags: string[] = []

  private get isChecked() {
    return this.searchData.some(item => item.value === this.selectedTags.value)
  }

  private handleChange (tag: any, e: Event) {
    this.selectedTags.length === 0 && this.selectedTags.push(tag)
  }
}
</script>

<style lang="scss" scoped>
.screen {
  .screen-type {
    background: rgba($color: #e7e7e7, $alpha: 0.6);
    padding: 10px 20px;
    label {
      cursor: pointer;
      input[type='radio'] {
        opacity: 0;
      }
      .is-checked {
        background: #1890ff;
        color: #fff;
        padding: 8px 14px;
      }
    }
  }
}
</style>