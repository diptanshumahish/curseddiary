import { isFullBlock } from "@notionhq/client";
import { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import NotionClient from "../services/notion-client";
import { styling } from "./styling";

interface Props {
  block: TableBlockObjectResponse;
}

async function getTable(id: string) {
  const nc = new NotionClient();
  return await nc.getBlocks(id);
}
export default async function RenderTable({ block }: Props) {
  const tableResponse = await getTable(block.id);

  if (!tableResponse) return null;
  const tableData = tableResponse.results;

  if (tableData.length === 0) return null;

  const firstTable = isFullBlock(tableData[0])
    ? tableData[0].type === "table_row"
      ? tableData[0].table_row.cells
      : []
    : [];
  const restTable = tableData.splice(1);

  return (
    <table>
      <thead>
        <tr>
          {firstTable.map((cell) => {
            return (
              <td key={JSON.stringify(cell)}>
                {cell.map((text) => (
                  <span style={styling(text.annotations)} key={text.plain_text}>
                    {text.plain_text}
                  </span>
                ))}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {restTable.map((row) => {
          if (!isFullBlock(row)) return null;
          if (row.type !== "table_row") return null;
          const cells = row.table_row.cells;

          return (
            <tr key={row.id}>
              {cells.map((cell) => (
                <td key={JSON.stringify(cell)}>
                  {cell.map((text) => (
                    <span
                      style={styling(text.annotations)}
                      key={text.plain_text}
                    >
                      {text.plain_text}
                    </span>
                  ))}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
