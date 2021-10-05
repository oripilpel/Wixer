import { PrettoSlider } from "../PrettoSlider";

export function SizeEdit({ paddingInline, paddingBlock, onChange }) {

    return (
        <div className="size-edit">
            <div className="padding-inline-edit">
                <label htmlFor="paddingInline">Width:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={+paddingInline}
                    min={16}
                    max={100}
                    name="paddingInline"
                    onChange={onChange}
                    id="paddingInline"
                />
            </div>
            <div className="padding-block-edit">
                <label htmlFor="paddingBlock">Height:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={+paddingBlock}
                    min={16}
                    max={100}
                    name="paddingBlock"
                    onChange={onChange}
                    id="paddingBlock"
                />
            </div>
        </div>
    )
}