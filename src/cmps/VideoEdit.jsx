export function VideoEdit({ data, style, onUpdate }) {
    const onChange = ({ target }) => {
        const { name, value } = target;
        onUpdate('data', { videoId: value });
    }
    return (
        <div>
            {JSON.stringify(data)}
            <label htmlFor="video-id">Enter YouTube video Id</label>
            <input type="text" name="videoId" id="video-id" defaultValue={data.videoId} onChange={onChange} />
        </div>
    )
}