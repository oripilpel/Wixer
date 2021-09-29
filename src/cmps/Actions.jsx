import { connect } from 'react-redux';
import { removeItem, duplicateItem, setSelected } from '../store/layout.actions';

function _Actions({ path, removeItem, duplicateItem, type }) {
    const onRemove = (ev) => {
        ev.stopPropagation();
        setSelected(null)
        removeItem(path.split('-'), type);

    }
    const onDuplicate = (ev) => {
        ev.stopPropagation();
        duplicateItem(path.split('-'), type);
    }
    return (
        <div className="actions" style={{ color:'black', zIndex: path.length }}>
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