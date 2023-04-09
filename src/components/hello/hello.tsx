import { component$ } from '@builder.io/qwik';

type HelloProps = {
  name: string;
}

export default component$(({ name }: HelloProps) => {
  return (
    <div class="collapsible">
      hello, {name}
    </div>
  );
});
