import { component$ } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

import Hello from '~/components/hello/hello';

export const onPost: RequestHandler = async ({ json, request }) => {
  console.log("method: ", request.method, "url: ", request.url, "body", await request.formData());
  json(200, { message: 'Hello World' });
};

export default component$(() => {
  return (
    <>
      <div class="section bright">
        <div class="container center">
          <Hello name="John" />
          <form method="post">
            <input type="hidden" value="some hidden value" name="hiddenInput" />
            <button style={{ backgroundColor: "gray"}}>Click me!</button>
          </form>
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
