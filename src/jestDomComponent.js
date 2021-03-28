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
            <div>
                {/*toBeInvalid*/}
                <input data-testid='invalidInput' type="text" aria-invalid/>
                <input data-testid='validInput' type="text" aria-invalid='false'/>
                <form data-testid='invalidForm'>
                    <input type="text" required/>
                </form>
                <form data-testid='validForm'>
                    <input type="text" value='test text' readOnly required/>
                </form>
            </div>
            <div>
                {/*toBeRequired*/}
                <input data-testid='requiredElement' type="text" required/>
                <input data-testid='notRequiredElement' type="text"/>
            </div>
            <div>
                {/*toBeVisible*/}
                <div data-testid="tobeVisible-visible"></div>
                <div data-testid="tobeVisible-hiddenProperty" hidden></div>
                <div data-testid="tobeVisible-opacity" style={{opacity: 0}}></div>
                <div data-testid="toBeVisible-displayNone" style={{display: 'none'}}></div>
            </div>
            <div>
                {/*toContainElement*/}
                <div data-testid='toContainElement-parent'>
                    <div data-testid='toContainElement-child'></div>
                </div>
            </div>
            <div>
                {/*toContainHTML*/}
                <div data-testid='toContainHTML-parent'><p>test</p></div>
            </div>
            <div>
                {/*toHaveAttribute*/}
                <div data-testid='toHaveAttributeElement' data-myattribute='test'></div>
            </div>
            <div>
                {/**/}
                <div data-testid=''></div>
            </div>
        </div>
    )
}