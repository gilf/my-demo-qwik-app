import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hello from '~/components/hello/hello';

export default component$(() => {
  return (
    <>
      <div class="section bright">
        <div class="container center">
          <Hello name="John" />
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
