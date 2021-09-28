import { connect } from 'react-redux';
import { removeItem, duplicateItem, setSelected } from '../store/layout.actions';

function _Actions({ path, selected, removeItem, duplicateItem, setSelected }) {
    const onRemove = (ev) => {
        ev.stopPropagation();
        removeItem(path.split('-'));
        if (selected.path.join('-') === path) setSelected(null);
    }
    const onDuplicate = (ev) => {
        ev.stopPropagation();
        duplicateItem(path.split('-'));
    }
    return (
        <div className="actions">
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
    duplicateItem,
    setSelected
}

export const Actions = connect(mapStateToProps, mapDispatchToProps)(_Actions);