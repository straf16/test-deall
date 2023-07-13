interface Column {
  key: string;
  label: string;
}

interface TableProps {
  rows: Record<string, any>[];
  columns: Column[];
}

export function Table(props: TableProps) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th key={column.key} className="border-2 px-4 py-2 text-left">{column.label}</th>  
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((item, index) => (
          <tr key={index}>
            {props.columns.map((column) => (
              <td key={`${item.id}-${column.key}`} className="border-2 px-4 py-2">{item[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}