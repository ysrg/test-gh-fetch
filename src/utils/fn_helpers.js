import React from 'react';
import { Table, List } from 'semantic-ui-react';

export default function computeRows(issues) {
  return issues.map(issue => {
    const {
      number,
      title,
      created_at,
      updated_at,
      labels,
      state
    } = issue;

    return (
      <Table.Row key={number}>
        <Table.Cell textAlign="center" className="issue-nr">
          {number}
        </Table.Cell>
        <Table.Cell >
          <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </Table.Cell>
        <Table.Cell>{computeDay(created_at)}</Table.Cell>
        <Table.Cell>{computeDay(updated_at)}</Table.Cell>
        <Table.Cell textAlign="left">
          <List as="ul">{computeLabels(labels)}</List>
        </Table.Cell>
        <Table.Cell>{state}</Table.Cell>
      </Table.Row>
    );
  });
}

function computeLabels(labels) {
  return labels.map(label => (
    <List.Item key={label.id} as="li">
      {label.name}
    </List.Item>
  ));
}

function computeDay(iso) {
  let dateFromIso = new Date(iso);
  return dateFromIso.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
}
