import styles from '../assets/styles/MortgageRepaymentCalculator.module.css';

export default function MortgageRepaymentCalculator() {
  return (
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
                            <div className={`${styles.textPreset3} ${styles.customizedInputSymbols} ${styles.borderRight0}`}>€</div>
                            <input className={`${styles.borderLeft0}`} id='mortgageAmount' type="text" />
                        </div>
                    </div>

                    <div className={styles.termAndRateContainer}>
                        <div>
                            <label className={styles.textPreset4} htmlFor='mortgageTerm'>Mortgage Term</label>
                            <div className={styles.mortageTerm}>
                                <input id='mortgageTerm' className={`${styles.borderRight0}`} type="text" />
                                <div className={`${styles.textPreset3} ${styles.customizedInputSymbols} ${styles.borderLeft0}`}>years</div>
                            </div>
                        </div>

                        <div>
                            <label className={styles.textPreset4} htmlFor='interestRate'>Interest Rate</label>
                            <div className={styles.interestRate}>
                                <input id='interestRate' className={`${styles.borderRight0}`} type="text" />
                                <div className={`${styles.textPreset3} ${styles.customizedInputSymbols} ${styles.borderLeft0}`}>%</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className={styles.textPreset4} htmlFor='radioButtons'>Mortage Type</label>
                        <div id='radioButtons' className={`${styles.radioButtonsContainer}`}>
                            <div className={styles.radioButtons}>
                                
                                <label className={`${styles.radioButtonAndLabelGap} ${styles.textPreset3}`}>
                                    <input type="radio" name="mortageType" id="repayment" />
                                    <span className={`${styles.customRadio}`}></span>
                                    Repayment
                                </label>
                            </div>

                            <div className={styles.radioButtons}>
                                <label className={`${styles.radioButtonAndLabelGap} ${styles.textPreset3}`}>
                                    <input type="radio" name="mortageType"/>
                                    <span className={styles.customRadio}></span>
                                    Interest Only
                                </label>
                            </div>
                            
                        </div>

                    </div>

                    

                </div>
                <div className={`${styles.repaymentButtonContainer}`}>
                    <div className={`${styles.repaymentButton}`}>
                        <img src="./images/mortageRepaymentCalculator/icon-calculator.svg" alt="calculator" />
                        <p className={`${styles.textPreset3} ${styles.textSlate900}`}>Calculate Repayment</p>
                    </div>
                </div>
            </div>

    

        {/* Second Section Starts*/}
            <div className={styles.shownRepayment}>
                <div className={`${styles.emptyContainer}`}>
                    <img src="./images/mortageRepaymentCalculator/illustration-empty.svg" width={192} alt="calculator" />
                    <p className={`${styles.textPreset2}`}>Results shown here</p>
                    <p className={`${styles.textPreset4} ${styles.emptyMessageText}`}>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
                </div>
            </div>


    </div>
  )
}
