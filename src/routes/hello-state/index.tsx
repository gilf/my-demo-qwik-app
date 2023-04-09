import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from '@builder.io/qwik-city';

import Hello from '~/components/hello/hello';

export default component$(() => {
  const name = useSignal('');

  return (
    <>
      <div class="section bright">
        <div class="container center">
          <input onInput$={(evt) => { name.value = evt.target.value; }} />
          <Hello name={name.value} />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
