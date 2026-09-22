import styles from "./DataTable.module.css";

export interface DataTableColumn<T> {
  key: keyof T;
  label: string;
}

interface DataTableProps<T extends { id: string | number }> {
  columns: DataTableColumn<T>[];
  rows: T[];
}

export function DataTable<T extends { id: string | number }>({
  columns,
  rows,
}: DataTableProps<T>) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={String(column.key)} data-label={column.label}>
                  {String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
