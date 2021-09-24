import { COLUMN } from "../constants"
import { ColumnSectionEdit } from "./ColumnSectionEdit"
import { ImageEdit } from "./ImageEdit"
import { TextEdit } from "./TextEdit"

export function EditComponent({ type, style, onUpdate }) {
    switch (type) {
        case COLUMN:
            return <ColumnSectionEdit style={style} onUpdate={onUpdate} />
        case 'text':
            return <TextEdit style={style} onUpdate={onUpdate} />
        case 'image':
            return <ImageEdit style={style} onUpdate={onUpdate} />
    }
    return
}