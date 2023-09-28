<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      theme="dark"
      :image="srcImage"
      :color="color"
      width="280"
      style="color: white"
    >
      <div class="logoCtrl pt-10">
        <img
          class="iservice-logo"
          src="@/assets/images/logo-tmp.png"
          alt="iservice-logo"
        />
      </div>
      
      <div class="my-nav-header py-2">{{ appTitle }}</div>
      <v-list density="compact">
        <v-list-item
          v-for="(item, idx) in items"
          :key="item.title"
          @click="menu(item, idx)"
          :class="{ active: idx == active }"
          style="color: white"
        >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
          <v-list-item-title>
            <h4 class="py-2">{{ item.title }}</h4>
          </v-list-item-title>
        </v-list-item>
        <div class="my-6 group-divider">
          <hr class="divider" />
        </div>
        <div class="group-divider mt-2">
          <div class="btn-back" @click="back()">
            <v-icon class="mr-1"> mdi-arrow-left </v-icon> ย้อนกลับ
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar density="compact" elevation="1" v-if="$vuetify.display.mdAndUp">
      <v-layout class="align-center">
        <v-avatar image="@/assets/images/user-img.jpg" class="mx-2" size="40" />

        <v-list-item v-if="$vuetify.display.mdAndUp" class="mr-1" title="นายทดสอบ สกุลทดสอบ" subtitle="พนักงานทั่วไป">
        </v-list-item>
      </v-layout>
    </v-app-bar>
    <v-app-bar elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <h2>{{ subtitle }}</h2>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    active: 0,
    subtitle: '',
  }),

  props: {
    appTitle: {
      type: String,
    },
    appSubTitle: {
      type: String,
    },
    items: {
      type: Array,
    },
    color: {
      type: String,
    },
    srcImage: {
      type: String,
    },
  },

  created() {
    let activatedMenu = localStorage.getItem("menuIdx");
    if (activatedMenu != "unset") {
      this.active = activatedMenu;
    }
  },

  watch: {
    items: {
      immediate: true,
      handler(newItems) {
        if (newItems && newItems.length > 0) {
          this.subtitle = newItems[0].title;
        }
      },
    },
  },

  methods: {
    back() {
      localStorage.setItem("menuIdx", "unset");
      this.$router.push("/").catch(() => {});
    },
    menu(item, idx) {
      const currentRoute = this.$router.currentRoute;
      if (currentRoute.path === item.link) {
        window.location.reload();
        localStorage.setItem("menuIdx", idx);
      } else {
        this.$router.push(item.link).catch(() => {});
        this.active = idx;
      }
      this.subtitle = item.title
    },
  },

  mounted() {},
};
</script>

<style>
.my-nav-header {
  font-family: "Kanit", sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.divider {
  width: 100%;
  align-items: center;
  border: 1px solid #fff;
  border-top: 0px;
  opacity: 0.25;
}

.group-divider {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.divider,
.btn-back {
  width: 85%;
}

.btn-back {
  background: rgba(0, 0, 0, 0.45);
  border-radius: 50px;
  padding: 13px 30px 13px 20px;
  font-size: 18px;
  text-align: center;
  transition: 0.3s;
  background-blend-mode: multiply;
}

.btn-back:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.75);
}

.logoCtrl {
  text-align: center;
}

.iservice-logo {
  height: 35px;
  opacity: 0.95;
}

.active {
  background-color: rgba(0, 0, 0, 0.35);
}

.display-name {
  font-size: 12pt;
  color: #232d42;
}

.display-position {
  font-size: 10pt;
  color: #8a92a6;
}
</style>
