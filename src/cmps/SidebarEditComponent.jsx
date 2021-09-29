import { COLUMN, INNERSECTION, SECTION } from "../constants"
import { ColumnSectionEdit } from "./ColumnSectionEdit"
import { ImageEdit } from "./ImageEdit"
import { TextEdit } from "./TextEdit"
import { ButtonEdit } from "./ButtonEdit"
import { VideoEdit } from "./VideoEdit"

export function SidebarEditComponent({ type, style, data, onUpdate }) {
    switch (type) {
        case COLUMN:
        case SECTION:
        case INNERSECTION:
            return <ColumnSectionEdit style={style} onUpdate={onUpdate} />
        case 'text':
            return <TextEdit style={style} onUpdate={onUpdate} />
        case 'image':
            return <ImageEdit style={style} onUpdate={onUpdate} />
        case 'button':
            return <ButtonEdit style={style} onUpdate={onUpdate} />
        case 'video':
            return <VideoEdit style={style} onUpdate={onUpdate} data={data}/>
        default:
            return <></>
    }
}