<template>
  <div class="hl_page-creator--content">
    <row-template
      v-for="(item,idx) in rows"
      :key="idx"
      :data="item"
      :idx="idx"
      :count="rows.length"
      @rowReordered="rowReordered"
    />
    <section
      class="hl_page-creator--section"
      :class="actionsClass"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      v-if="!rows.length"
    >
      <div class="hl_page-creator--actions">
        <div class="move-actions">
          <span data-tooltip="tooltip" data-placement="right" title="Up">
            <i class="icon icon-arrow-up-2"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="right" title="Down">
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
      >
        <i class="icon icon-plus"></i>
      </span>
      <div href="#" class="new-row-blank">
        <span class="btn btn-light5 btn-slim" @click="openRowsMenu">Add New Row</span>
      </div>
    </section>
  </div>
</template>

<script>
import { EventBus } from "../helpers/event-bus";
import { mapState } from "vuex";

export default {
  name: "ContentBoard",
  components: {
    "row-template": () => import("./RowTemplate")
  },
  mounted() {
    EventBus.$on("row-selected", this.rowAdded);
  },
  computed: {
    ...mapState(["rows"])
  },
  data() {
    return {
      actionsClass: ""
      // rows: []
    };
  },
  methods: {
    onMouseEnter() {
      this.actionsClass = "active";
    },
    onMouseLeave() {
      this.actionsClass = "";
    },
    openRowsMenu() {
      this.$emit("openRowsMenu");
    },
    rowAdded(cols, idx) {
      let rows = this.rows;
      if (idx !== undefined) {
        rows.splice(idx + 1, 0, { columns: cols, elements: new Array(cols) });
      } else {
        rows.push({ columns: cols, elements: new Array(cols) });
      }
      this.$store.commit("updateRows", rows);
    },
    rowReordered(current, next) {
      let rows = this.rows;
      if (current < next) {
        rows.splice(current, 2, rows[next], rows[current]);
      } else {
        rows.splice(next, 2, rows[current], rows[next]);
      }
      this.$store.commit("updateRows", rows);
    }
  }
};
</script>

<style>
.hl_page-creator--content {
  margin-top: 20px;
}
</style>
