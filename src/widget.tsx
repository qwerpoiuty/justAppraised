import { FC, CSSProperties } from 'react';

type WidgetProps = {
  widgetId: number
}

const divSize: CSSProperties = {
  height: '75px',
  width: '75px',
  margin: '10px',
  border: '1px solid green'
}


export const Widget: FC<WidgetProps> = ({widgetId}: WidgetProps) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('widgetID', widgetId.toString());
  }
    
  return (
    <div style={divSize} draggable="true" onDragStart={handleDragStart}>I AM WIDGET {widgetId}</div>
  )
}