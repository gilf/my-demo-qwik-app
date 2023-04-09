import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from '@builder.io/qwik-city';

import Hello from '~/components/hello/hello';

export default component$(() => {
  const name = useSignal('');
  const keyPressed = useSignal('');

  useOnDocument(
    'keydown',
    $((event) => { keyPressed.value = keyPressed.value + event.key; })
  );


  return (
    <>
      <div class="section bright">
        <div class="container center">
          <input onInput$={(evt) => { name.value = evt.target.value; }} />
          <Hello name={name.value} />

          <div>Key pressed: {keyPressed.value}</div>
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
