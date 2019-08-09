<template>
  <section class="hl_page-creator--rows-group" :class="rowsClass">
    <a href="#" class="close-group" id="close-row-group" @click.prevent="closeRowsPopup">
      <i class="icon icon-close"></i>
    </a>
    <div class="hl_row-group">
      <div class="tab-content" id="hl_row-group-tab">
        <div
          class="tab-pane fade show"
          id="add-row"
          :class="rowsClass"
          role="tabpanel"
          aria-labelledby="add-row-tab"
        >
          <div class="add-row">
            <h2>Add Row</h2>
            <div class="add-row-body">
              <div class="row-cards">
                <div
                  class="row-card"
                  v-for="(item,idx) in noOfColumns"
                  :key="idx"
                  @click="rowItemClick(item)"
                >
                  <div class="icon">
                    <i class="fas fa-columns"></i>
                  </div>
                  <h5>{{item}} Column</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from "../helpers/event-bus";

export default {
  name: "RowsMenu",
  props: {
    classType: {
      type: String
    },
    rowToBeAddedAt: {
      type: Number
    }
  },
  computed: {
    rowsClass() {
      return this.classType;
    }
  },
  data() {
    return {
      noOfColumns: 6
    };
  },
  methods: {
    closeRowsPopup() {
      this.$emit("closeRowsPopup");
    },
    rowItemClick(cols) {
      EventBus.$emit("row-selected", cols, this.rowToBeAddedAt);
      this.$emit("closeRowsPopup");
    }
  }
};
</script>

<style>
</style>
