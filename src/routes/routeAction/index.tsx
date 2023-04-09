import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$, routeAction$, Form } from "@builder.io/qwik-city";

import Hello from '~/components/hello/hello';

type User = { name: string, color: string };

const dataArr: Array<User> = [];

export const useData = routeLoader$(() => {
  return dataArr;
});

export const useAddUser = routeAction$((user) => {
  dataArr.push(user as User);
  return { success: true,  userID: dataArr.length };
});

export default component$(() => {
  const data = useData();
  const addUser = useAddUser();

  return (
    <>
      <div class="section bright">
        <div class="container center">
          <Form action={addUser}>
            <label for="name" >Name: </label>
            <input name="name" />
            <label for="color">Color: </label>
            <input name="color" />
            <button style={{ backgroundColor: 'gray' }}>Add user</button>
          </Form>
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
