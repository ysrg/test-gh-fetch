import React from 'react';
import { Table, List, TableCell } from 'semantic-ui-react';

export default computeRows;
export { logErrorToService };

function computeRows(fetchedData, fields) {
  // reduce fetchedData to contain just the values from the fields array
  let reducedArr = fetchedData.reduce((acc, curr, i) => {
    let arr = {};
    fields.map(i => {
      if (i in curr) arr[i] = curr[i];
      return null;
    });
    acc.push(arr);
    return acc;
  }, []);

  return reducedArr.map(i => {
    if (i['created_at']) i['created_at'] = computeDay(i['created_at']);
    if (i['updated_at']) i['updated_at'] = computeDay(i['updated_at']);
    return (
      <Table.Row key={i.number}>
        {Object.values(i).map((y, i) => {
          return (
            <TableCell key={i}>
              {Array.isArray(y)
                ? y.map(i => (
                    <List key={i.id} as="ul">
                      {computeItem(i.name)}
                    </List>
                  ))
                : y}
            </TableCell>
          );
        })}
      </Table.Row>
    );
  });
}

function computeItem(name) {
  return <List.Item as="li">{name}</List.Item>;
}

function computeDay(iso) {
  let dateFromIso = new Date(iso);
  return dateFromIso.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function logErrorToService(error, errorInfo) {
  // send the exceptions to your error service provider
}
