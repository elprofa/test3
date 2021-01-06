import React from 'react';
import { RowIco } from './iconeposi.stc'

const EspaceRowIco = (props) => {
    const {icone} = props;
    return (
        <RowIco>
            {icone}
        </RowIco>
    )
}

export default EspaceRowIco;