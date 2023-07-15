interface Column {
  key: string;
  label: string;
}

interface TableProps {
  rows: Record<string, any>[];
  columns: Column[];
  onRowClick?: (id: string) => void;
}

export function Table(props: TableProps) {
  const handleRowClick = (id: string) => {
    if (props.onRowClick) {
      props.onRowClick(id)
    }
  }

  return (
    <table className="table-auto lg:w-full">
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th key={column.key} className="border-2 px-4 py-2 text-left">{column.label}</th>  
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((item, index) => (
          <tr key={index} onClick={() => handleRowClick(item.id)} className={props.onRowClick && "hover:bg-gray-100 cursor-pointer"}>
            {props.columns.map((column) => (
              <td key={`${item.id}-${column.key}`} className="border-2 px-4 py-2">
                {column.key === "price" || column.key === "total"
                  ? item[column.key].toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                  : item[column.key]
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}