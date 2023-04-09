import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from "@builder.io/qwik-city";

import Hello from '~/components/hello/hello';

export default component$(() => {
  const location = useLocation();

  return (
    <>
      <div class="section bright">
        <div class="container center">
          <Hello name={location.params.id} />
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
