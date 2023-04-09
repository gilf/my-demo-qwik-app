import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from "@builder.io/qwik-city";

import Hello from '~/components/hello/hello';

export const useData = routeLoader$(() => {
  return [
    { name: 'John', color: 'red' },
    { name: 'Lisa', color: 'purple' },
    { name: 'Jane', color: 'green' },
  ];
});


export default component$(() => {
  const data = useData();

  return (
    <>
      <div class="section bright">
        <div class="container center">
          {data.value.map((greet) => {
            return (
              <div style={{ backgroundColor: greet.color }}>
                <Hello name={greet.name} />
              </div>
            );
          })}
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
