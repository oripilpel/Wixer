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
    const {
        flexGrow,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        backgroundColor,
        justifyContent,
        alignItem
    } = style;
    return (
        <div className="column-section-edit">
            <div>
                <label htmlFor="background-color">Background color</label>
                <input type="color" name="backgroundColor" id="background-color" value={backgroundColor || '#ffffff'} onChange={onChange} />
            </div>
            <ImageUpload label="Upload background image" onUpload={(ev) => uploadImg(ev).then(url => onUploadImage(url))} />
            <WidthEdit name="flexGrow" value={flexGrow} onChange={onChange} min={0} max={12} />
            <div>
                <label htmlFor="justify-content">Justify content</label>
                <select name="justifyContent" id="justify-content" value={justifyContent} onChange={onChange}>
                    <option value="center">Center</option>
                    <option value="flexStart">Flex start</option>
                    <option value="flexEnd">Flex end</option>
                    <option value="spaceBetween">Space between</option>
                    <option value="spaceAround">Space Around</option>
                </select>
            </div>
            <div>
                <label htmlFor="align-items">Align items</label>
                <select name="alignItems" id="align-items" value={justifyContent} onChange={onChange}>
                    <option value="center">Center</option>
                    <option value="flexStart">Flex start</option>
                    <option value="flexEnd">Flex end</option>
                </select>
            </div>
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