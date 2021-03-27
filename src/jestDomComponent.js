import react from 'react';

export default function JestDomComponent () {
    return(
        <div>
            <div>
                {/*{toBeDisabled}*/}
                <input data-testid='inputDisabled' type="text" placeholder='disabled' disabled/>
                <input data-testid='inputEnabled' type="text" placeholder='enabled'/>
            </div>
        </div>
    )
}