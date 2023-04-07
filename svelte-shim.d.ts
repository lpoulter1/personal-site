declare module "*.svelte" {
  import type { ComponentType } from "svelte";
  const component: ComponentType;
  export default component;
}

declare module "*svg?component" {
  import { ComponentType, SvelteComponentTyped } from "svelte";
  const icon: ComponentType<SvelteComponentTyped>;
  export default icon;
}
