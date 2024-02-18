import './Survey.css'
import {initJsPsych} from 'jspsych';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';

const jsPsych = initJsPsych();

const trial = {
    type: htmlKeyboardResponse,
    stimulus: 'Hello world!',
  }

jsPsych.run([trial]);


const Survey = (props) => {
    return (
    <div>
        Good morning!.
    </div>
    )
}


export default Survey;