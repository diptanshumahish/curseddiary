import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function styling(
  annotations: ParagraphBlockObjectResponse["paragraph"]["rich_text"][0]["annotations"]
): React.CSSProperties {
	if (!annotations) return {};
  return {
    fontWeight: annotations.bold ? "bold" : "normal",
    color: annotations.color,
    textDecoration: annotations.underline ? "underline" : annotations.strikethrough ? "line-through" : "normal",
		fontStyle : annotations.italic ? 'italic' : 'normal',
    
    
  };
}
