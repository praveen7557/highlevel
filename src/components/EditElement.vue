<template>
  <section class="hl_page-creator--rows-group" :class="editClass">
    <a href="#" class="close-group" id="close-row-group" @click.prevent="closeEditPopup">
      <i class="icon icon-close"></i>
    </a>
    <div class="hl_settings-group">
      <div class="tab-content" id="hl_settings-group-tab">
        <div
          class="tab-pane fade show"
          :class="editClass"
          id="css"
          role="tabpanel"
          aria-labelledby="css-tab"
        >
          <h2>Custom CSS</h2>
          <div class="css">
            <div class="form-group">
              <label>{{contentText}}</label>
              <input type="text" class="form-control" v-model="content" />
            </div>
            <div class="form-group">
              <label>Add CSS</label>
              <textarea
                class="form-control"
                placeholder="Add custom CSS here..."
                rows="5"
                v-model="css"
              ></textarea>
            </div>
            <button
              type="button"
              class="btn btn-light btn-sm save-btn"
              data-tooltip="tooltip"
              data-placement="top"
              title="Save"
              @click="saveClick"
            >
              <i class="far fa-save"></i>
              <span class="btn-text">Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from "../helpers/event-bus";
import { mapState } from "vuex";

export default {
  name: "EditElement",
  props: {
    classType: {
      type: String
    }
  },
  watch: {
    elementToEdit(newVal, val) {
      this.content = newVal.element.content;
    }
  },
  computed: {
    contentText() {
      return this.elementToEdit
        ? this.elementToEdit.element.tag == "img"
          ? "Source"
          : "Content"
        : "";
    },
    editClass() {
      return this.classType;
    },
    ...mapState(["elementToEdit"])
  },
  data() {
    return {
      css: "",
      content: ""
    };
  },
  methods: {
    closeEditPopup() {
      this.$emit("closeEditPopup");
    },
    saveClick(cols) {
      this.$store.commit("updateElement", {
        ...this.elementToEdit.element,
        content: this.content,
        elementLocation: "elementToEdit"
      });
      this.$emit("closeEditPopup");
    }
  }
};
</script>

<style>
.css {
  padding: 10px;
  text-align: left;
}
.css label {
  text-align: left;
}
.save-btn {
  background: #07d807 !important;
  color: white !important;
  font-family: inherit;
}
.save-btn span {
  margin-left: 5px;
}
input,
textarea {
  font-family: inherit !important;
}
</style>

