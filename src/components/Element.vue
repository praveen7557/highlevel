<template>
  <div
    class="hl_page-creator--element"
    :class="elementActionsClass"
    @mouseenter="onMouseEnterElement"
    @mouseleave="onMouseLeaveElement"
  >
    <div class="hl_page-creator--actions">
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Settings" @click="editClick">
          <i class="fas fa-cog"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="top" title="Clone">
          <i class="far fa-eye"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="top" title="Save">
          <i class="far fa-copy"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="top" title="Delete" @click="deleteClick">
          <i class="far fa-trash-alt"></i>
        </span>
      </div>
    </div>
    <span
      class="add-new-element"
      data-tooltip="tooltip"
      data-placement="bottom"
      title="Add New Element"
    >
      <i class="icon icon-plus"></i>
    </span>
    <div class="element-container">
      <component :is="data.tag" v-if="data.tag!='img'">{{data.content}}</component>
      <img v-else :src="data.content" />
    </div>
  </div>
</template>

<script>
import { EventBus } from "../helpers/event-bus";

export default {
  props: {
    data: {
      type: Object
    },
    row: {
      type: Number
    },
    col: {
      type: Number
    }
  },
  computed: {
    elementData() {
      let tag = this.data.tag;
      if (tag != "img") {
        return `<${tag}>Hello!!!</${tag}>`;
      } else {
        return "<img src='https://via.placeholder.com/150' />";
      }
    }
  },
  data() {
    return {
      elementActionsClass: ""
    };
  },
  methods: {
    onMouseEnterElement(idx) {
      this.elementActionsClass = "active";
      this.$emit("rowActiveChange", "");
    },
    onMouseLeaveElement() {
      this.elementActionsClass = "";
      this.$emit("rowActiveChange", "active");
    },
    editClick() {
      this.$store.commit("changeElementToEdit", {
        row: this.row,
        col: this.col,
        element: this.data
      });
      EventBus.$emit("open-edit-popup");
    },
    deleteClick() {
      this.$store.commit("deleteElement", {
        row: this.row,
        col: this.col
      });
    }
  }
};
</script>

<style>
.element-container img {
  height: 100%;
  width: 100%;
}
</style>
