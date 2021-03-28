import react from 'react';

export default function JestDomComponent () {
    return(
        <div>
            <div>
                {/*{toBeDisabled}*/}
                <input data-testid='inputDisabled' type="text" placeholder='disabled' disabled/>
                <input data-testid='inputEnabled' type="text" placeholder='enabled'/>
            </div>
            <div>
            {/*toBeEmpty*/}
                <div data-testid='divEmpty'></div>
                <div data-testid='divNotEmpty'><p>about text</p></div>
            </div>
            <div>
                {/*toBeEmptyDOMElement*/}
                <div data-testid='filledTextDOMElement'>testing test</div>
                <div data-testid='emptyDOMElement'></div>
            </div>
            <div>
                {/*toBeInTheDocument*/}
                <div data-testid='elementInDocument'></div>
            </div>
        </div>
    )
}