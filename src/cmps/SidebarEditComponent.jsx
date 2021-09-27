import { COLUMN, SECTION } from "../constants"
import { ColumnSectionEdit } from "./ColumnSectionEdit"
import { ImageEdit } from "./ImageEdit"
import { TextEdit } from "./TextEdit"
import { ButtonEdit } from "./ButtonEdit"

export function SidebarEditComponent({ type, style, onUpdate }) {
    switch (type) {
        case COLUMN:
        case SECTION:
            return <ColumnSectionEdit style={style} onUpdate={onUpdate} />
        case 'text':
            return <TextEdit style={style} onUpdate={onUpdate} />
        case 'image':
            return <ImageEdit style={style} onUpdate={onUpdate} />
        case 'button':
            return <ButtonEdit style={style} onUpdate={onUpdate} />
        default:
            return <></>
    }
}