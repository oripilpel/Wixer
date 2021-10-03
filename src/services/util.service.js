export const utilService = {
    makeId
}

function makeId(length = 10) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

export const translateStyle = (style) => {
    if (style.paddingTop) style.paddingTop = `${style.paddingTop}px`;
    if (style.paddingRight) style.paddingRight = `${style.paddingRight}px`;
    if (style.paddingBottom) style.paddingBottom = `${style.paddingBottom}px`;
    if (style.paddingLeft) style.paddingLeft = `${style.paddingLeft}px`;
    if (style.marginTop) style.marginTop = `${style.marginTop}px`;
    if (style.marginRight) style.paddingRight = `${style.marginRight}px`;
    if (style.marginBottom) style.marginBottom = `${style.marginBottom}px`;
    if (style.marginLeft) style.marginLeft = `${style.marginLeft}px`;
    if (style.fontSize) style.fontSize = `${style.fontSize}px`;
    if (style.width) style.width = `${style.width}px`;
    if (style.height) style.height = `${style.height}px`
    if (style.borderWidth) style.borderWidth = `${style.borderWidth}px`
    return style;
}
