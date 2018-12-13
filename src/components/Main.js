import React from 'react';
import { Grid, Table } from 'semantic-ui-react';
import RowList from './RowList';
import TableHeader from './TableHeader';
import Spinner from './Spinner';
import withGH from '../containers/HOCs/gh-fetch';

const rowFields = [
  'Issue Nr',
  'Title',
  'Created At',
  'Updated At',
  'Labels',
  'State'
];

const ghFields = [
  'number',
  'title',
  'created_at',
  'updated_at',
  'labels',
  'state'
];

// const rowFields1 = [
//   'id',
//   'name',
//   'Created At',
//   'Updated At',
//   'git_url',
//   'language'
// ];
// const ghFields1 = [
//   'id',
//   'name',
//   'created_at',
//   'updated_at',
//   'git_url',
//   'language'
// ];

let url = 'https://api.github.com/repos/facebook/react/issues';
let user_repos_url = 'https://api.github.com/users/ysrg/repos'; // eslint-disable-line no-unused-vars

function buildMain({ data, data: { error }, name, row, fields }) {
  if (!error)
    return (
      <Grid centered columns={1}>
        <Grid.Column>
          {data[name] ? (
            <Table definition compact celled>
              <TableHeader fields={row} />
              <RowList fields={fields} data={data[name]} />
            </Table>
          ) : (
            <Spinner />
          )}
        </Grid.Column>
      </Grid>
    );
}

/**
 * You can pass as arguments what specific data you want to retrieve and build the table with
 * @param buildMain = function/Class  <Component/>
 * @param rowFields = []
 * @param ghFields = []
 * @param url = String
 */
const Main = withGH(buildMain, 'issues', url, rowFields, ghFields);

export default Main;
