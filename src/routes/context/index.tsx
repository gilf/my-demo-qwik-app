import { component$, createContextId, Signal, useContext, useContextProvider, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from '@builder.io/qwik-city';

export const LanguageContext = createContextId<Signal<string>>(
  'English'
);

export default component$(() => {
  const language = useSignal('English');
  useContextProvider(LanguageContext, language);

  return (
    <>
      <div class="section bright">
        <div class="container center">
          <button
            onClick$={() =>
              (language.value = language.value === 'English' ? 'German' : 'English')
            }
            style={{ backgroundColor: 'gray' }}
          >
            Flip language
          </button>
          <Child />
        </div>
      </div>
    </>
  );
});

const Child = component$(() => {
  const language = useContext(LanguageContext);
  return <div>language is {language.value}</div>;
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
