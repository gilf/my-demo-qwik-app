import { $, component$, useOnDocument, useSignal, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from '@builder.io/qwik-city';
import { isServer } from '@builder.io/qwik/build';

import Hello from '~/components/hello/hello';

const delay = (time: number) => new Promise((res) => setTimeout(res, time));

export default component$(() => {
  const text = useSignal('Initial text');
  const delayText = useSignal('');

  useTask$(({ track }) => {
    track(() => text.value);
    const value = text.value;
    const update = () => (delayText.value = value);
    isServer
      ? update() // don't delay on server render value as part of SSR
      : delay(500).then(update); // Delay in browser
  });


  return (
    <>
      <div class="section bright">
        <div class="container center">
          <div>
            Enter text: <input bind:value={text} />
            <div>Delayed text: {delayText}</div>
          </div>
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
