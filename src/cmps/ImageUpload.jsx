export function ImageUpload({ label, onUpload }) {
    return (
        <div>
            <label> {label}
                <input onChange={(ev) => onUpload(ev)} type="file" />
            </label>
        </div>
    )
}