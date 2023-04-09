import { component$, useSignal, useStylesScoped$, Slot } from '@builder.io/qwik';

type CollapsibleProps = {
  title: string;
}

export default component$(({ title }: CollapsibleProps) => {
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
