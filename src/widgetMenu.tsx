import { FC, CSSProperties } from 'react';
import { Widget } from './widget';

const menuSize: CSSProperties = {
  height: '250px',
  width: '95%',
  border: '1px solid blue',
  margin: '10px',
  display: 'flex',
  position: 'absolute',
  bottom: 0
}
export const WidgetMenu: FC = () => {
  const widgets = []
  const renderWidget = (i: number) => {
    return (
      <Widget key={i} widgetId={i} />
    )
  }
  for (let i=0; i< 6; i +=1) {
    widgets.push(renderWidget(i))
  }
  return (
    <>
      <div 
        style={menuSize}>
          {widgets}
        </div>
    </>
  )
}