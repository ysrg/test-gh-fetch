import React from 'react';
import IssueList from './IssueList';
import TableHeader from "./TableHeader";
import { Table } from 'semantic-ui-react';

const TableComponent = ({ issues }) => {
  return (
    <Table definition compact celled>
      <TableHeader />
      <IssueList issues={issues} />
    </Table>
  );
};

export default TableComponent;
