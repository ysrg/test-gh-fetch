import React from 'react';
import { Table } from 'semantic-ui-react';
import computeRows from '../utils/fn_helpers';

const IssueList = ({ issues }) => {
  return <Table.Body>{computeRows(issues)}</Table.Body>;
};


export default IssueList;
