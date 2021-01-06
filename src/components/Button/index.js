import React from 'react';
import {ButtonSuB} from './button.stc'

const BtnSubmit = (props) => {
    const {title} = props;
    return (
        <ButtonSuB>
            {title}
        </ButtonSuB>
    )
}

export default BtnSubmit;