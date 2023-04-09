import { component$, useSignal, useStylesScoped$, Slot } from '@builder.io/qwik';
import styles from './collapsible.css?inline';

type CollapsibleProps = {
  title: string;
}

export default component$(({ title }: CollapsibleProps) => {
  useStylesScoped$(styles);
  const collapsed = useSignal(false);

  return (
    <div class="collapsible">
      <header onClick$={() => { collapsed.value = !collapsed.value; }}>{title}</header>
      <section hidden={collapsed.value}>
        <Slot />
      </section>
    </div>
  );
});
