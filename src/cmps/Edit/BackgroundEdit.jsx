export function BackgroundEdit({ backgroundColor, onChange }) {
    return (
        <div className="background-edit">
            <div className="bg-color-input">
                <div className="label">
                    <label htmlFor="background-color">
                        Color
                    </label>
                </div>
                <div className="item">
                    <input type="color" name="backgroundColor" id="background-color" value={backgroundColor || '#ffffff'} onChange={onChange} />
                </div>
            </div>
        </div>

    )
}