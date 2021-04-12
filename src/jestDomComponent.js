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
                {/*toHaveAttribute*/}
                <div data-testid='toHaveClass' className='myClass'></div>
            </div>
            <div>
                {/*toHaveFocus*/}
                <input data-testid='toHaveFocus' type="text"/>
            </div>
            <div>
                {/*toHaveFormValues*/}
                <form data-testid='formValuesTest'>
                    <input type="text" name='username' value='vitaliyeb' readOnly/>
                    <input type="checkbox" name='agreement' checked readOnly/>
                </form>
            </div>
            <div>
                {/*toHaveStyle*/}
                <div data-testid='haveStyle' style={{padding: '20px', color: 'red'}}>padding</div>
            </div>
            <div>
                {/*toHaveTextContent*/}
                <div data-testid='haveTextContent'>
                    <p>
                        test text
                    </p>
                </div>
                <div data-testid='haveTextMyText'>my text</div>
                <div data-testid='notHaveTextContent'> not my text</div>
            </div>

            <div>
                {/*toHaveValue*/}
                <div data-testid=''>
                    <input type="text" data-testid='toHaveValueText' value='testValues' onChange={()=>{}}/>
                    <select data-testid='toHaveValueSelect' value={['banana', 'apple']} multiple onChange={()=>{}}>
                        <option value="apple" >Яблоки</option>
                        <option value="banana" >Банан</option>
                        <option value="kiwi">Киви</option>
                    </select>
                </div>
            </div>

            <div>
                {/*toHaveDisplayValue*/}
                <label htmlFor="nameLabel">Your name:</label>
                <input type="text" id='nameLabel' onChange={()=>{}} value='vitaliy'/>
            </div>

            <div>
                {/*toHaveChecked*/}
                <input data-testid='toBeCheckedTest' onChange={()=>{}} type="checkbox" checked/>
            </div>

            <div>
                {/*toHaveDescription*/}
                <div data-testid='divDescription' aria-describedby='my description'>

                </div>
            </div>
        </div>
    )
}