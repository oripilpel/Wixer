import { connect } from 'react-redux';
import { removeItem } from '../store/layout.actions';

function _Actions({ path, removeItem }) {
    const onRemove = (ev) => {
        ev.stopPropagation();
        removeItem(path.split('-'))
    }
    return (
        <i className="fas fa-trash-alt" onClick={onRemove}></i>
    )
}

const mapDispatchToProps = {
    removeItem
}

export const Actions = connect(null, mapDispatchToProps)(_Actions);