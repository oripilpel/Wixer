import { useState, useEffect } from "react";
import { uploadImg } from '../services/cloudinary-service';
import { utilService } from "../services/util.service";

import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export function CarouselEdit({ style, data, onUpdate }) {
  const [images, setImages] = useState([...data.images])
  useEffect(() => {
    setImages([...data.images])
  }, [data])

  function handleChange({ target }) {
    const label = target.value
    const imgIdx = target.name
    const newImages = [...images]
    newImages[imgIdx].label = label
    setImages(newImages)
    onUpdate('data', { images: newImages })
  }

  function onUploadImage(imgPath, imgIdx) {
    const newImages = [...images]
    newImages[imgIdx].imgPath = imgPath
    setImages(newImages)
    onUpdate('data', { images: newImages })
  }

  function onAdd() {
    const newImages = [...images]
    const image = {
      id: utilService.makeId(),
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format',
    }
    newImages.unshift(image)
    setImages(newImages)
    onUpdate('data', { images: newImages })
  }

  function onRemove(imgIdx) {
    const newImages = [...images]
    newImages.splice(imgIdx, 1)
    setImages(newImages)
    onUpdate('data', { images: newImages })
  }

  return (
    <div className="carousel-edit">
      <div className="add-image" title="add new image">
        <AddPhotoAlternateIcon onClick={onAdd} />
      </div>
      {images.map((image, idx) => {
        return (
          <div key={image.id} className="edit">
            <div className="image">
              <img src={image.imgPath} alt={image.label} />
            </div>
            <div className="label">
              <input type="text" title="image title" value={images[idx].label} name={idx} onChange={handleChange} />
            </div>
            <div className="actions">
              <div className="change-image">
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id={`raised-button-file${image.id}`}
                  type="file"
                  onChange={(ev) => uploadImg(ev).then(url => onUploadImage(url, idx))}
                />
                <label htmlFor={`raised-button-file${image.id}`}>
                  <div className="button" title="change image">
                    <InsertPhotoIcon />
                  </div>
                </label>
              </div>
              <div className="delete">
                <div className="button" onClick={() => onRemove(idx)} title="delete image">
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

}