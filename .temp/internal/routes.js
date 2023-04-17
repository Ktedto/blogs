/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\诺\\Desktop\\个人博客\\Personal Blog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-c001c100",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c001c100").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-24f1e30e",
    path: "/blogs/2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-24f1e30e").then(next)
    },
  },
  {
    name: "v-5ad9a724",
    path: "/blogs/1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5ad9a724").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-7a5f6990",
    path: "/tag/JavaScript/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-7a5f6990").then(next)
    },
    meta: {"pid":"tags","id":"JavaScript"}
  },
  {
    path: "/tag/JavaScript/index.html",
    redirect: "/tag/JavaScript/"
  },
  {
    name: "v-de8294a6",
    path: "/tag/手写/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-de8294a6").then(next)
    },
    meta: {"pid":"tags","id":"手写"}
  },
  {
    path: "/tag/手写/index.html",
    redirect: "/tag/手写/"
  },
  {
    name: "v-35a4e791",
    path: "/categories/66/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-35a4e791").then(next)
    },
    meta: {"pid":"categories","id":"66"}
  },
  {
    path: "/categories/66/index.html",
    redirect: "/categories/66/"
  },
  {
    name: "v-14bbbf36",
    path: "/categories/前端/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-14bbbf36").then(next)
    },
    meta: {"pid":"categories","id":"前端"}
  },
  {
    path: "/categories/前端/index.html",
    redirect: "/categories/前端/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]