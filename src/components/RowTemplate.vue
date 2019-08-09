<template>
  <section
    class="hl_page-creator--section"
    :class="actionsClass"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span data-tooltip="tooltip" data-placement="right" title="Up" @click="rowUp">
          <i class="icon icon-arrow-up-2"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="right" title="Down" @click="rowDown">
          <i class="icon icon-arrow-down-2"></i>
        </span>
      </div>
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="left" title="Settings">
          <i class="fas fa-cog"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="left" title="Clone">
          <i class="far fa-eye"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="left" title="Save">
          <i class="far fa-copy"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="left" title="Delete">
          <i class="far fa-trash-alt"></i>
        </span>
      </div>
    </div>
    <span
      class="add-new-section"
      data-tooltip="tooltip"
      data-placement="bottom"
      title="Add New Section"
      @click="addNewRow"
    >
      <i class="icon icon-plus"></i>
    </span>
    <div class="hl_page-creator--row">
      <div class="hl_page-creator--column" v-for="(item,colIndex) in data.columns" :key="colIndex">
        <element-item
          v-if="data.elements[item-1]"
          :data="data.elements[item-1]"
          :row="idx"
          :col="colIndex"
          @rowActiveChange="rowActiveChange"
        />
        <div href="#" class="new-element-blank" @click="addNewElement(colIndex)" v-else>
          <span class="btn btn-light6 btn-slim">Add New Element</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from "../helpers/event-bus";
import Element from "./Element";

export default {
  props: {
    data: {
      type: Object
    },
    idx: {
      type: Number
    },
    count: {
      type: Number
    }
  },
  components: {
    "element-item": Element
  },
  data() {
    return {
      actionsClass: ""
    };
  },
  methods: {
    onMouseEnter() {
      this.actionsClass = "active";
    },
    onMouseLeave() {
      this.actionsClass = "";
    },
    addNewRow() {
      EventBus.$emit("open-rows-menu", this.idx);
    },
    rowUp() {
      if (this.idx !== 0) {
        this.$emit("rowReordered", this.idx, this.idx - 1);
      }
    },
    rowDown() {
      if (this.idx !== this.count - 1) {
        this.$emit("rowReordered", this.idx, this.idx + 1);
      }
    },
    addNewElement(col) {
      this.$store.commit("changeElementToAdd", {
        row: this.idx,
        col
      });
      EventBus.$emit("open-element-menu");
    },
    rowActiveChange(className) {
      this.actionsClass = className;
    }
  }
};
</script>

<style>
</style>
