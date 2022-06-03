import { FC, ReactNode } from 'react';

interface Props<T> {
  values: T;
  children: (values: T) => ReactNode;
}

const Form = <T extends {}>({ values, children }: Props<T>) => (
  <div>{children(values)}</div>
);

const toto = () => (
  <div>
    <Form<{ firstName: string | null }> values={{ firstName: 'bob' }}>
      {(values) => <div>{values.firstName}</div>}
    </Form>
  </div>
);
