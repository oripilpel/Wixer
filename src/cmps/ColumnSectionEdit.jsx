import { MarginEdit } from "./MarginEdit";
import { PaddingEdit } from "./PaddingEdit";
import { uploadImg } from '../services/cloudinary-service';
import { ImageUpload } from "./ImageUpload";
import { WidthEdit } from "./WidthEdit";
import { Flex } from "./Flex";

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
    const { flexGrow, paddingTop, paddingRight, paddingBottom, paddingLeft, marginTop, marginRight, marginBottom, marginLeft, backgroundColor } = style;
    return (
        <div className="column-section-edit">
            <div>
                <label htmlFor="background-color">Background color</label>
                <input type="color" name="backgroundColor" id="background-color" value={backgroundColor || '#ffffff'} onChange={onChange} />
            </div>
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
            <Flex />

        </div>
    )
}