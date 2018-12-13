import React from 'react';
import { Table } from 'semantic-ui-react';
import computeRows from '../utils/fn_helpers';

const RowList = ({ data, fields }) => {
  console.log(data, fields);
  return <Table.Body>{computeRows(data, fields)}</Table.Body>;
};

export default RowList;
