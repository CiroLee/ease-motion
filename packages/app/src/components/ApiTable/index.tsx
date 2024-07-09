import { FC } from 'react';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@/ui/Table';
import OutLink from '../OutLink';
import Divider from '@/ui/Divider';
import Tag from '@/ui/Tag';

export interface ApiTableRow {
  name: React.ReactNode;
  desc?: React.ReactNode;
  type: string;
  required?: boolean | string;
  default?: boolean | string | number;
}
export interface ApiTableProps {
  rows: ApiTableRow[];
  omitHeads?: string[];
}
const header = ['Name', 'Description', 'Type', 'Required', 'Default'];
function renderType(type: string) {
  if (type.startsWith('tag')) {
    const tags = type.replace(/^tag:/, '').split('|');
    return (
      <div className="flex flex-wrap gap-y-2">
        {tags.map((item, index) => (
          <div className="relative inline-flex items-center" key={index}>
            <Tag size="sm">{item}</Tag>
            {index !== tags.length - 1 && <Divider direction="vertical" className="mx-3" />}
          </div>
        ))}
      </div>
    );
  } else if (type.startsWith('link')) {
    const pattern = /link: (\w+)\((https?:\/\/\S+)\)/;
    const match = type.match(pattern);
    if (match) {
      return <OutLink url={match[2]}>{match[1]}</OutLink>;
    }
  }
  return type;
}
const ApiTable: FC<ApiTableProps> = ({ rows, omitHeads = [] }) => {
  const _header = header.filter((item) => !omitHeads.includes(item));
  console.log(_header);
  return (
    <Table border>
      <TableHeader>
        {_header.map((item) => (
          <TableHeaderCell key={item}>{item}</TableHeaderCell>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((item, index) => (
          <TableRow key={index}>
            {item.name !== undefined ? <TableDataCell>{item.name}</TableDataCell> : null}
            {item.desc !== undefined ? <TableDataCell>{item.desc}</TableDataCell> : null}
            {item.type !== undefined ? (
              <TableDataCell className="text-brand-800">{renderType(item.type)}</TableDataCell>
            ) : null}
            {item.required !== undefined ? <TableDataCell>{item.required.toString()}</TableDataCell> : null}
            {item.default !== undefined ? <TableDataCell>{item.default?.toString()}</TableDataCell> : null}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ApiTable;
