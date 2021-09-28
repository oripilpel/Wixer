import { uploadImg } from '../services/cloudinary-service';
import { ImageUpload } from "./ImageUpload";
import { MarginEdit } from './MarginEdit';
import { PaddingEdit } from './PaddingEdit';
import { WidthEdit } from './WidthEdit';

export function ImageEdit({ data, style, onUpdate }) {
    const { paddingTop, paddingRight, paddingBottom, paddingLeft, marginTop, marginRight, marginBottom, marginLeft, width } = style;
    const onUploadImage = (url) => {
        onUpdate('data', { url });
    }
    const onChange = ({ target }) => {
        const { name, value } = target;
        const newStyle = { ...style };
        newStyle[name] = value;
        onUpdate('style', newStyle);
    }
    return (
        <div className="image-edit">
            <ImageUpload label="Upload image" onUpload={(ev) => uploadImg(ev).then(url => onUploadImage(url))} />
            <WidthEdit name="width" value={width || 100} onChange={onChange} />
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