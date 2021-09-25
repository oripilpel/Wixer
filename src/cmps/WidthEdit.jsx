import { PrettoSlider } from "./PrettoSlider";

export function WidthEdit({name, value, onChange, min=0, max=100, }) {
    return <div>
        <label htmlFor="width">Width:</label>
        {/* <input type="range" name="flexGrow" id="flex-grow" value={flexGrow} min="1" max="12" onChange={onChange} /> */}
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={value}
            min={min}
            max={max}
            name={name}
            onChange={onChange}
            id="width"
        />
    </div>
}