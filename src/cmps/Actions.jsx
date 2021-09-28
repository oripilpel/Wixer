import { connect } from 'react-redux';
import { removeItem, duplicateItem } from '../store/layout.actions';

function _Actions({ path, removeItem, duplicateItem }) {
    const onRemove = (ev) => {
        ev.stopPropagation();
        removeItem(path.split('-'));
    }
    const onDuplicate = (ev) => {
        ev.stopPropagation();
        duplicateItem(path.split('-'));
    }
    return (
        <div className="actions" style={{zIndex: path.length}}>
            <i className="far fa-clone" onClick={onDuplicate}></i>
            <i className="fas fa-trash-alt" onClick={onRemove}></i>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        selected: state.layoutModule.selected,
    }
}

const mapDispatchToProps = {
    removeItem,
    duplicateItem
}

export const Actions = connect(mapStateToProps, mapDispatchToProps)(_Actions);