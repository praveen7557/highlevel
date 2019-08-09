<template>
  <section class="hl_page-creator--element-group" :class="menuClass">
    <a href="#" class="close-group" id="close-element-group" @click.prevent="closeElementsPopup">
      <i class="icon icon-close"></i>
    </a>
    <div class="hl_element-group">
      <div class="tab-content" id="hl_element-group-tab">
        <div
          class="tab-pane fade show"
          :class="menuClass"
          id="add-element"
          role="tabpanel"
          aria-labelledby="add-element-tab"
        >
          <div class="add-element">
            <div class="add-element-menu">
              <ul>
                <li v-for="(item,idx) in menuTitles" :key="idx">
                  <a href="#">{{item}}</a>
                </li>
              </ul>
            </div>
            <div class="add-element-body">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search" />
              </div>
              <div class="element-group" v-for="item in menuItems" :key="item.id">
                <h4>{{item.title}}</h4>
                <div class="element-cards">
                  <div
                    class="element-card"
                    @click="elementClick(ele)"
                    v-for="ele in item.elements"
                    :key="ele.key"
                  >
                    <div class="icon">
                      <i :class="`fas fa-${ele.icon}`"></i>
                    </div>
                    <h5>{{ele.name}}</h5>
                  </div>
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
import { elementItems } from "../helpers/elements";
import { EventBus } from "../helpers/event-bus";
import { mapState } from "vuex";

export default {
  name: "ElementsMenu",
  props: {
    classType: {
      type: String
    }
  },
  computed: {
    menuClass() {
      return this.classType;
    },
    menuTitles() {
      let items = this.menuItems.map(e => e.title);
      items.unshift("All");
      return items;
    },
    ...mapState(["elementToAdd", "rows"])
  },
  data() {
    return {
      menuItems: elementItems
    };
  },
  methods: {
    closeElementsPopup() {
      this.$emit("closeElementsPopup");
    },
    elementClick(ele) {
      this.$store.commit("updateElement", ele);
      this.$emit("closeElementsPopup");
    }
  }
};
</script>
