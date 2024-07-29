/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import styles from '../assets/styles/MortgageRepaymentCalculator.module.css';
import ChangeColor from './ChangeColor';

export default function MortgageRepaymentCalculator() {

    function inputControl(e){
        e.target.value = e.target.value.replace(/[^0-9]/,'');
    }
    
    function calculateRepaymentMortgage(principal, annualInterestRate, years) {
        // Yıllık faiz oranını aylık faiz oranına çevir
        let monthlyInterestRate = annualInterestRate / 12 / 100;
        
        // Toplam ödeme dönemi sayısı (ay cinsinden)
        let totalPayments = years * 12;
        
        // Mortgage ödemesi formülü
        let monthlyPayment = principal * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), totalPayments) /
                             (Math.pow((1 + monthlyInterestRate), totalPayments) - 1);
        
        return monthlyPayment;
    }

    function calculateInterestOnlyMortgage(principal, annualInterestRate) {
        // Yıllık faiz oranını aylık faiz oranına çevir
        let monthlyInterestRate = annualInterestRate / 12 / 100;
        
        // Aylık faiz ödemesi
        let monthlyInterestPayment = principal * monthlyInterestRate;
        console.log(monthlyInterestPayment);
        return monthlyInterestPayment;
    }

    function calculateResults(){
        const results = document.getElementById('results');
        const emptyPage = document.getElementById('emptyPage')
        
        var required = 0;

        //INPUT'S Values
        const repaymentRadio = document.getElementById('repaymentRadio').checked;
        const interestRadio = document.getElementById('interestRadio').checked;
        const mortgageAmountInput = document.getElementById('mortgageAmount');
        const mortgageTermInput = document.getElementById('mortgageTerm');
        const interestRateInput = document.getElementById('interestRate');

        //Required Text
        const requiredRadioButtons = document.getElementById('requiredRadioButtons');
        const requiredMortgageAmount = document.getElementById('requiredMortgageAmount');
        const requiredMortageTerm = document.getElementById('requiredMortgageTerm');
        const requiredInterestRate = document.getElementById('requiredInterestRate');

        //InputSigns
        const euroSign = document.getElementById('euroSign');
        const percentSign = document.getElementById('percentSign');
        const yearText = document.getElementById('yearText');

        //repayments
        const monthlyElemet = document.getElementById('monthlyRepayment');
        const totalElement = document.getElementById('totalRepayment');

        if(!repaymentRadio && !interestRadio){
            requiredRadioButtons.style.display = 'flex'
            required += 1;
        }

        if(mortgageAmountInput.value == ''){
            requiredMortgageAmount.style.display = 'flex'
            euroSign.classList.add(...[styles.borderRedRight0, styles.redBg]);
            mortgageAmountInput.classList.add(styles.borderRedLeft0);
            required += 1;
        }

        if(mortgageTermInput.value == ''){
            requiredMortageTerm.style.display = 'flex';
            yearText.classList.add(...[styles.borderRedLeft0, styles.redBg]);
            mortgageTermInput.classList.add(styles.borderRedRight0);
            required += 1;
        }

        if(interestRateInput.value == ''){
            requiredInterestRate.style.display = 'flex'
            percentSign.classList.add(...[styles.borderRedLeft0, styles.redBg]);
            interestRateInput.classList.add(styles.borderRedRight0);
            required += 1;
        }

        if(!(required > 0)){

            //Mortage Repayment Calculation
            const amount = Number(mortgageAmountInput.value);
            const term = Number(mortgageTermInput.value);
            const interestRate = Number(interestRateInput.value);
            var monthlyRepayment;
            var totalRepayment;

            if(repaymentRadio == true){
                monthlyRepayment = calculateRepaymentMortgage(amount, interestRate, term);
                totalRepayment = monthlyRepayment * 12 * term
            }else if(interestRadio == true){
                monthlyRepayment = calculateInterestOnlyMortgage(amount, interestRate);
                totalRepayment = (monthlyRepayment * 12 * term) + amount;
            }

            monthlyElemet.innerHTML ="€"+monthlyRepayment.toLocaleString('en-us');
            totalElement.innerHTML ="€"+totalRepayment.toLocaleString('en-us');


            emptyPage.style.display = "none";
            results.style.display = "flex";
        }
        

    }

    function repaymentRadio(){
        document.getElementById("repaymentRadio").checked = true;
        document.getElementById("interestOnly").style.backgroundColor = "white";
        document.getElementById("interestOnly").style.borderColor = "#6b94a8";
        document.getElementById("repayment").style.backgroundColor = "#d8db2f43";
        document.getElementById("repayment").style.borderColor = "#d8db2f43";
        document.getElementById('requiredRadioButtons').style.display = 'none';

        
    }

    function interestRadio(){
        document.getElementById("interestRadio").checked = true;
        document.getElementById("repayment").style.backgroundColor = "white";
        document.getElementById("repayment").style.borderColor = "#6b94a8";
        document.getElementById("interestOnly").style.backgroundColor = "#d8db2f43";
        document.getElementById("interestOnly").style.borderColor = "#d8db2f43";
        document.getElementById('requiredRadioButtons').style.display = 'none';
        
    }

    function inputFocus(e){
        
        
       
        

        
        switch (e.target.id) {
            case "mortgageAmount":
               
                const element = document.getElementById('euroSign');
                const mortgageAmountInput = document.getElementById('mortgageAmount');
                
                const requiredMortgageAmount = document.getElementById('requiredMortgageAmount');

                requiredMortgageAmount.style.display = 'none';
                mortgageAmountInput.classList.remove(styles.borderRedLeft0)
                element.classList.remove(...[styles.borderRedRight0, styles.redBg]);
                element.classList.add(...[styles.limeBg,styles.borderLimeRight0])
                break;

            case "interestRate":
                const element2 = document.getElementById('percentSign');
                const interestRateInput = document.getElementById('interestRate');
                const requiredInterestRate = document.getElementById('requiredInterestRate');
                requiredInterestRate.style.display='none';
                interestRateInput.classList.remove(styles.borderRedRight0);
                element2.classList.remove(...[styles.borderRedLeft0, styles.redBg]);
                element2.classList.add(...[styles.limeBg,styles.borderLimeLeft0])
                break;
            
            case "mortgageTerm":
                // eslint-disable-next-line no-case-declarations
                const element3 = document.getElementById('yearText');
                const mortgageTermInput = document.getElementById('mortgageTerm');
                const requiredMortageTerm = document.getElementById('requiredMortgageTerm');
                requiredMortageTerm.style.display = 'none';
                mortgageTermInput.classList.remove(styles.borderRedRight0)
                element3.classList.remove(...[styles.borderRedLeft0, styles.redBg]);
                element3.classList.add(...[styles.limeBg,styles.borderLimeLeft0])
                break;
        
            default:
                break;
        }

    }

    function inputBlur(e){
        switch (e.target.id) {
            case "mortgageAmount":
                // eslint-disable-next-line no-case-declarations
                const element = document.getElementById('euroSign');
                element.classList.remove(...[styles.limeBg,styles.borderLimeRight0])
                break;
            
            case "interestRate":
                // eslint-disable-next-line no-case-declarations
                const element2 = document.getElementById('percentSign');
                element2.classList.remove(...[styles.limeBg,styles.borderLimeLeft0])
                break;
            
            case "mortgageTerm":
                // eslint-disable-next-line no-case-declarations
                const element3 = document.getElementById('yearText');
                element3.classList.remove(...[styles.limeBg,styles.borderLimeLeft0])
                break;
        
            default:
                break;
        }

        

    }

    


  return (
    <ChangeColor color={'#e4f4fd'}>
         <div className={styles.container}>
            <div className={styles.formContainer}>
                {/* Title */}
                <div className={styles.title}>
                    <h4 className={styles.textPreset2}>Mortgage Calculator</h4>
                    <a className={styles.textPreset4} href="">Clear All</a>
                </div>
                {/* Title Ends*/}

                <div className={`${styles.gapBetweenInputHorizontally}`}>
                    <div>
                        <label htmlFor='mortgageAmount' className={styles.textPreset4}>Mortgage Amount</label>
                        <div className={styles.mortgageAmount}>
                            <div id='euroSign' className={`${styles.textPreset3} ${styles.customizedInputSymbols} ${styles.borderRight0}`}>€</div>
                            <input onFocus={inputFocus} onBlur={inputBlur} onInput={inputControl} className={`${styles.borderLeft0}`} id='mortgageAmount' type="text"/>
                        </div>
                        <div id='requiredMortgageAmount' className={`${styles.textPreset5} ${styles.requiredText}`}>This field is required</div>
                    </div>

                    <div className={styles.termAndRateContainer}>
                        <div>
                            <label className={styles.textPreset4} htmlFor='mortgageTerm'>Mortgage Term</label>
                            <div className={styles.mortageTerm}>
                                <input onFocus={inputFocus} onBlur={inputBlur} onInput={inputControl} id='mortgageTerm' className={`${styles.borderRight0}`} type="text" />
                                <div id='yearText'  className={`${styles.textPreset3} ${styles.customizedInputSymbols} ${styles.borderLeft0}`}>years</div>
                            </div>
                            <div id='requiredMortgageTerm' className={`${styles.textPreset5} ${styles.requiredText}`}>This field is required</div>
                        </div>

                        <div>
                            <label className={styles.textPreset4} htmlFor='interestRate'>Interest Rate</label>
                            <div className={styles.interestRate}>
                                <input onFocus={inputFocus} onBlur={inputBlur} onInput={inputControl} id='interestRate' className={`${styles.borderRight0}`} type="text" />
                                <div id='percentSign' className={`${styles.textPreset3} ${styles.customizedInputSymbols} ${styles.borderLeft0}`}>%</div>
                            </div>
                            <div id='requiredInterestRate' className={`${styles.textPreset5} ${styles.requiredText}`}>This field is required</div>
                        </div>
                    </div>

                    <div>
                        <label className={styles.textPreset4} htmlFor='radioButtons'>Mortage Type</label>
                        <div id='radioButtons' className={`${styles.radioButtonsContainer}`}>
                            <div onClick={repaymentRadio} name="name" id="repayment" className={styles.radioButtons}>
                                
                                <label  className={`${styles.radioButtonAndLabelGap} ${styles.textPreset3}`}>
                                    <input id='repaymentRadio' type="radio" name="mortageType" value="repayment" />
                                    <span className={`${styles.customRadio}`}></span>
                                    Repayment
                                </label>
                            </div>

                            <div onClick={interestRadio} id="interestOnly" className={styles.radioButtons}>
                                <label className={`${styles.radioButtonAndLabelGap} ${styles.textPreset3}`}>
                                    <input id='interestRadio' type="radio" name="mortageType" value="interestOnly"/>
                                    <span className={styles.customRadio}></span>
                                    Interest Only
                                </label>
                            </div>
                            
                        </div>
                        <div id='requiredRadioButtons' className={`${styles.textPreset5} ${styles.requiredText}`}>This field is required</div>

                    </div>

                    

                </div>
                <div onClick={calculateResults} className={`${styles.repaymentButtonContainer}`}>
                    <div className={`${styles.repaymentButton}`}>
                        <img src="./images/mortageRepaymentCalculator/icon-calculator.svg" alt="calculator" />
                        <p className={`${styles.textPreset3} ${styles.textSlate900}`}>Calculate Repayment</p>
                    </div>
                </div>
            </div>

    

        {/* Second Section Starts*/}
            <div className={styles.shownRepayment}>
                <div id='emptyPage' className={`${styles.emptyContainer}`}>
                    <img src="./images/mortageRepaymentCalculator/illustration-empty.svg" width={192} alt="calculator" />
                    <p className={`${styles.textPreset2}`}>Results shown here</p>
                    <p className={`${styles.textPreset4} ${styles.emptyMessageText}`}>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
                </div>

                <div id='results' className={`${styles.results}`}>
                    <div>
                    <p className={`${styles.textPreset2}`}>Your Results</p>
                    <p className={`${styles.textPreset4} ${styles.resultText}`}>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
                    </div>
                    
                    <div className={styles.resultsBg}>
                        <div>
                        <p className={`${styles.textPreset4} ${styles.resultText}`}>Your Monthly Repayments</p>
                        <p id='monthlyRepayment' className={`${styles.textPreset1} ${styles.textLime}`}>$1,797.74</p>
                        </div>
                        <div>
                        <hr />
                        </div>
                        
                        <div>
                        <p className={`${styles.textPreset4} ${styles.resultText}`}>{`Total You'll repay over the term`}</p>
                        <p id='totalRepayment' className={`${styles.textPreset2}`}>£539,322.94</p>
                        </div>
                    </div>
                </div>
            </div>


    </div>
    </ChangeColor>
   
  )
}
