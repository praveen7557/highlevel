<template>
  <section class="hl_wrapper nav-shrink d-flex">
    <section
      class="hl_wrapper--inner page-creator"
      id="page-creator"
      :class="[menuClass,rowsClass]"
    >
      <section class="hl_page-creator--main">
        <div class="hl_page-creator--menu">
          <div class="menu--left">
            <button
              type="button"
              class="btn btn-light btn-sm"
              data-tooltip="tooltip"
              data-placement="top"
              title="Back"
            >
              <i class="fas fa-arrow-left"></i>
            </button>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-light btn-sm"
                data-tooltip="tooltip"
                data-placement="top"
                title="Desktop"
                id="page-creator-desktop"
              >
                <i class="fas fa-desktop"></i>
              </button>
              <button
                type="button"
                class="btn btn-light btn-sm"
                data-tooltip="tooltip"
                data-placement="top"
                title="Mobile"
                id="page-creator-mobile"
              >
                <i class="fas fa-mobile-alt"></i>
              </button>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-light btn-sm"
                data-tooltip="tooltip"
                data-placement="top"
                title="Apps"
              >
                <i class="fas fa-plug"></i>
              </button>
              <div class="dropdown" id="settings-group">
                <button
                  type="button"
                  class="btn btn-light btn-sm dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="dropdown"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Settings"
                >
                  <i class="fas fa-cogs"></i>
                  <span class="btn-text">Settings</span>
                </button>
                <div class="dropdown-menu">
                  <div class="nav">
                    <a class="dropdown-item" data-toggle="tab" href="#integrations">Integrations</a>
                    <a class="dropdown-item" data-toggle="tab" href="#seo">SEO Meta Data</a>
                    <a class="dropdown-item" data-toggle="tab" href="#tracking">Tracking Code</a>
                    <a class="dropdown-item" data-toggle="tab" href="#css">Custom CSS</a>
                    <a class="dropdown-item" data-toggle="tab" href="#background">Background</a>
                    <a class="dropdown-item" data-toggle="tab" href="#typography">Typography</a>
                    <a class="dropdown-item" data-toggle="tab" href="#general">General</a>
                  </div>
                </div>
              </div>
              <div class="dropdown">
                <button
                  type="button"
                  class="btn btn-light btn-sm dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="dropdown"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Pop up"
                >
                  <i class="fas fa-external-link-alt"></i>
                  <span class="btn-text">Pop up</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Show Popup</a>
                  <a class="dropdown-item" href="#">Edit Settings</a>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-light btn-sm"
                data-tooltip="tooltip"
                data-placement="top"
                title="Undo"
              >
                <i class="fas fa-undo"></i>
              </button>
              <button
                type="button"
                class="btn btn-light btn-sm"
                data-tooltip="tooltip"
                data-placement="top"
                title="Redo"
                disabled
              >
                <i class="fas fa-redo"></i>
              </button>
            </div>
          </div>
          <div class="menu--right">
            <div class="btn-group">
              <div class="dropdown" id="section-group">
                <button
                  type="button"
                  class="btn btn-light btn-sm dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="dropdown"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Sections"
                >
                  <i class="fas fa-expand"></i>
                  <span class="btn-text">Sections</span>
                </button>
                <div class="dropdown-menu">
                  <div class="nav">
                    <a class="dropdown-item" data-toggle="tab" href="#add-section">Add Section</a>
                    <a class="dropdown-item" data-toggle="tab" href="#manage-sections">Manage</a>
                  </div>
                </div>
              </div>
              <div class="dropdown" id="row-group">
                <button
                  type="button"
                  class="btn btn-light btn-sm dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="dropdown"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Rows"
                >
                  <i class="fas fa-bars"></i>
                  <span class="btn-text">Rows</span>
                </button>
                <div class="dropdown-menu">
                  <div class="nav">
                    <a
                      class="dropdown-item"
                      data-toggle="tab"
                      href="#add-row"
                      @click="openRowsPopup"
                    >Add Row</a>
                    <a class="dropdown-item" data-toggle="tab" href="#manage-rows">Manage</a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-light btn-sm"
                data-tooltip="tooltip"
                data-placement="top"
                title="Columns"
                id="column-group"
              >
                <i class="fas fa-columns"></i>
                <span class="btn-text">Columns</span>
              </button>
              <div class="dropdown" id="element-group">
                <button
                  type="button"
                  class="btn btn-light btn-sm dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="dropdown"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Elements"
                >
                  <font-awesome-icon icon="code" />
                  <span class="btn-text">Elements</span>
                </button>
                <div class="dropdown-menu">
                  <div class="nav">
                    <a
                      class="dropdown-item"
                      data-toggle="tab"
                      href="#add-element"
                      @click="openElementsPopup"
                    >Add Element</a>
                    <a class="dropdown-item" data-toggle="tab" href="#manage-elements">Manage</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-light btn-sm"
                data-tooltip="tooltip"
                data-placement="top"
                title="Preview"
              >
                <i class="far fa-eye"></i>
                <span class="btn-text">Preview</span>
              </button>
              <button
                type="button"
                class="btn btn-light btn-sm"
                data-tooltip="tooltip"
                data-placement="top"
                title="Save"
              >
                <i class="far fa-save"></i>
                <span class="btn-text">Save</span>
              </button>
            </div>
          </div>
        </div>
        <content-board @openRowsMenu="openRowsPopup" />
      </section>
      <rows-menu
        :class-type="rowsClass"
        @closeRowsPopup="closeRowsPopup"
        :row-to-be-added-at="rowToBeAddedAt"
      />
      <elements-menu :class-type="menuClass" @closeElementsPopup="closeElementsPopup" />
      <edit-element :class-type="editClass" @closeEditPopup="closeEditPopup" />
    </section>
  </section>
</template>

<script>
import { EventBus } from "../helpers/event-bus";

export default {
  components: {
    "content-board": () => import("./ContentBoard"),
    "rows-menu": () => import("./RowsMenu"),
    "elements-menu": () => import("./ElementsMenu"),
    "edit-element": () => import("./EditElement")
  },
  mounted() {
    EventBus.$on("open-rows-menu", this.openRowsPopup);
    EventBus.$on("open-element-menu", this.openElementsPopup);
    EventBus.$on("open-edit-popup", this.openEditPopup);
  },
  computed: {
    menuClass() {
      return this.menuActive ? "active" : "";
    },
    rowsClass() {
      return this.rowsActive ? "active" : "";
    },
    editClass() {
      return this.editActive ? "active" : "";
    }
  },
  data() {
    return {
      menuActive: false,
      rowsActive: false,
      editActive: false,
      rowToBeAddedAt: null
    };
  },
  methods: {
    openElementsPopup() {
      this.menuActive = true;
    },
    closeElementsPopup() {
      this.menuActive = false;
    },
    openEditPopup() {
      this.editActive = true;
    },
    closeEditPopup() {
      this.editActive = false;
    },
    openRowsPopup(idx) {
      this.rowsActive = true;
      this.rowToBeAddedAt = idx;
    },
    closeRowsPopup() {
      this.rowsActive = false;
    }
  }
};
</script>

<style>
</style>
