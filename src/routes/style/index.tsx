import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Collapsible from '~/components/collapsible-with-style/collapsible';

export default component$(() => {
  return (
    <>
      <div class="section bright">
        <div class="container center">
          <Collapsible title="click me!">
            <div>
              The content
            </div>
          </Collapsible>
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
