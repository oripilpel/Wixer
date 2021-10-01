import { PrettoSlider } from "./PrettoSlider";

export function PaddingEdit({ paddingTop, paddingRight, paddingBottom, paddingLeft, onChange }) {
    return (
        <>

            <div>
                <label htmlFor="padding-top">Padding-top:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={paddingTop || 0}
                    name="paddingTop"
                    onChange={onChange}
                    id="padding-top"
                />
            </div>
            <div>
                <label htmlFor="padding-right">Padding-right:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={paddingRight || 0}
                    name="paddingRight"
                    onChange={onChange}
                    id="padding-right"
                />
            </div>
            <div>
                <label htmlFor="padding-bottom">Padding-bottom:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={paddingBottom || 0}
                    name="paddingBottom"
                    onChange={onChange}
                    id="padding-bottom"
                />
            </div>
            <div>
                <label htmlFor="padding-left">Padding-left:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={paddingLeft || 0}
                    name="paddingLeft"
                    onChange={onChange}
                    id="padding-left"
                />
            </div>
        </>
    )
}