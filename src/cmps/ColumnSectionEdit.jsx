import { MarginEdit } from "./MarginEdit";
import { PaddingEdit } from "./PaddingEdit";
import { uploadImg } from '../services/cloudinary-service';
import { ImageUpload } from "./ImageUpload";
import { WidthEdit } from "./WidthEdit";
export function ColumnSectionEdit({ style, onUpdate }) {
    const onChange = ({ target }) => {
        const { name, value } = target;
        const newStyle = { ...style };
        newStyle[name] = value;
        onUpdate('style', newStyle);
    }
    const onUploadImage = (url) => {
        const newStyle = { ...style };
        newStyle['backgroundImage'] = `url(${url})`;
        onUpdate(newStyle);
    }
    const { flexGrow, paddingTop, paddingRight, paddingBottom, paddingLeft, marginTop, marginRight, marginBottom, marginLeft } = style;
    return (
        <div className="column-section-edit">
            <ImageUpload label="Upload background image" onUpload={(ev) => uploadImg(ev).then(url => onUploadImage(url))} />
            <WidthEdit name="flexGrow" value={flexGrow} onChange={onChange} min={0} max={12} />
            <PaddingEdit
                paddingTop={paddingTop}
                paddingRight={paddingRight}
                paddingBottom={paddingBottom}
                paddingLeft={paddingLeft}
                onChange={onChange} />
            <MarginEdit
                marginTop={marginTop}
                marginRight={marginRight}
                marginBottom={marginBottom}
                marginLeft={marginLeft}
                onChange={onChange} />

        </div>
    )
}