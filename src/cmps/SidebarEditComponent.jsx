import { COLUMN, INNERSECTION, SECTION } from "../constants"
import { ColumnSectionEdit } from "./ColumnSectionEdit"
import { ImageEdit } from "./ImageEdit"
import { TextEdit } from "./TextEdit"
import { NavEdit } from "./NavEdit"
import { ButtonEdit } from "./ButtonEdit"
import { VideoEdit } from "./VideoEdit"
import { GMapEdit } from "./GMapEdit"
import { SocialIconsEdit } from "./SocialIconsEdit"
import { CarouselEdit } from "./CarouselEdit"

export function SidebarEditComponent({ type, style, data, onUpdate }) {
    switch (type) {
        case COLUMN:
        case SECTION:
        case INNERSECTION:
            return <ColumnSectionEdit style={style} onUpdate={onUpdate} />
        case 'nav':
            return <NavEdit style={style} onUpdate={onUpdate} data={data} />
        case 'text':
            return <TextEdit style={style} onUpdate={onUpdate} />
        case 'image':
            return <ImageEdit style={style} onUpdate={onUpdate} />
        case 'button':
            return <ButtonEdit style={style} onUpdate={onUpdate} data={data} />
        case 'video':
            return <VideoEdit style={style} onUpdate={onUpdate} data={data} />
        case 'GMap':
            return <GMapEdit style={style} onUpdate={onUpdate} data={data} />
        case 'social':
            return <SocialIconsEdit style={style} onUpdate={onUpdate} data={data} />
        case 'carousel':
            return <CarouselEdit style={style} onUpdate={onUpdate} data={data} />
        default:
            return <></>
    }
}