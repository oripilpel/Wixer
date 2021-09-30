import { PrettoSlider } from "./PrettoSlider";

export function HeightEdit({value, onChange, min=50, max=1500}) {
    return(
        <>
        <label htmlFor="height">height:</label>
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={value}
            min={min}
            max={max}
            name="height"
            onChange={onChange}
            id="width"
        />
        </>
    )
}