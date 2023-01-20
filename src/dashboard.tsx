import { FC, CSSProperties, useState } from 'react';
import {WidgetMenu} from './widgetMenu'
const dashboardStyles: CSSProperties = {
    height: '1000px',
    width: '1000px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column'
  }

const dragAreaStyles: CSSProperties = {
    height: '100%',
    width: '100%',
    border: '1px solid red',
    textAlign: 'center',
}

export const Dashboard: FC = () => {
    const [lastDragged, setLastDragged] = useState('none')
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('widgetId');
        setLastDragged(id)
    }
    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => { 
        event.preventDefault();
    }
    return (
        <div style={dashboardStyles}>
            <div style={dragAreaStyles} onDragOver={enableDropping} onDrop={handleDrop}>Drop Area! Lasted dragged was Widget number {lastDragged}</div>
            <WidgetMenu />
        </div>
    );
}
