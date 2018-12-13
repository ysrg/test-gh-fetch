import React from 'react';
import { Table } from 'semantic-ui-react';

const TableHeader = ({ fields }) => {
  return (
    <Table.Header>
      <Table.Row>
        {fields.map((field, i) => (
          // safe to use `i` as key because we control the fields array
          <Table.HeaderCell key={i}>{field}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  );
};

export default TableHeader;
