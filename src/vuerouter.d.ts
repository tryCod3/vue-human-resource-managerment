// This can be directly added to any of your `.ts` files like `router.ts`
// It can also be added to a `.d.ts` file, in which case you will need to add an export
// to ensure it is treated as a module
export {};

import { ElementNode } from '@vue/compiler-dom';
import { Component } from 'vue';
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
    roles?: string[];
    title?: string;
    hidden?: boolean;
    icon?: string;
    isRoot?: boolean;
  }
}
