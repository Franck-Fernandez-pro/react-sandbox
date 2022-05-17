import { ReactNode } from 'react';

// BEFORE
// interface TableProps {
//   items: { id: string }[];
//   renderItem: (item: { id: string }) => ReactNode;
// }

// AFTER
interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => ReactNode;
}

export const Table = <T,>(props: TableProps<T>) => null;
// export const Table = <TItem,>(props: TableProps<TItem>) => null;

export const Component = () => (
  <Table
    items={[{ id: '1', firstName: 'Bob' }]}
    renderItem={(item) => null}
  ></Table>
);
