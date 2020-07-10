import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    Color of the sky?
                    <i className={'fa fa-times ' + classes.error}></i>
                </li>

                <li>
                    <strong>2.</strong>
                    Color of the sky?
                    <i className={'fa fa-check ' + classes.success}></i>
                </li>

            </ul>

            <p>True 4 from 5</p>

            <div>
                <button>Repeat</button>
            </div>
        </div>
    )
}

export default FinishedQuiz