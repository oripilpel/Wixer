import { PrettoSlider } from "./PrettoSlider";

export function WidthEdit({name, value, onChange, min=0, max=100, }) {
    return <div>
        <label htmlFor="width">Width:</label>
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