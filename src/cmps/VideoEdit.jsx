import YouTubeIcon from '@mui/icons-material/YouTube';

export function VideoEdit({ data, onUpdate }) {
    const onChange = ({ target }) => {
        const { value } = target;
        onUpdate('data', { videoId: value });
    }
    return (
        <div className="video-edit">
            <label htmlFor="video-id">Enter YouTube video Id</label>
            <input type="text" name="videoId" id="video-id" defaultValue={data.videoId} onChange={onChange} />
            <div className="youtube">
                <YouTubeIcon />
            </div>
        </div>
    )
}