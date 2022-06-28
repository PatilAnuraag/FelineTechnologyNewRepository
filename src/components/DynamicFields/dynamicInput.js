import './dynamicFields.css';
import { motion } from "framer-motion"
export default function DynamicInput({
  standardized_ui,
  options,
  question_id,
}) {
//   const data = {
//     status: true,
//     message: "success",
//     data: {
//       questionnaire: [
//         {
//           question_id: "1",
//           set_id: "LS123",
//           chatpter_name: "INTRODUCTION",
//           question_type: "Open Ended Questionnaires",
//           question: "Why are you here today ?",
//           options: "Users will give the answers",
//           explanation:
//             "In open ended questonnaires, the users will be able to enter the answer as text in the given text box.",
//           answer_ui: "1 Text Box",
//           standardized_ui: "text_box",
//         },
//         {
//           question_id: "2",
//           set_id: "LS123",
//           chatpter_name: "COMPLEXITY",
//           question_type: "Single Choice Questionnaires",
//           question: "Choose your request type",
//           options: ["Type 1", "Type 2", "Type 3"],
//           explanation:
//             "In single choice questionnaires, we let users pick any one option.(Options are displayed as boxes in this example.\nThe options can be either in boxes or in text)",
//           answer_ui: "Upto 8 Max options",
//           standardized_ui: "options_8",
//         },
//         {
//           question_id: "3",
//           set_id: "LS123",
//           chatpter_name: "PRELIMINARY",
//           question_type: null,
//           question: "Which domain does your business belong to?",
//           options: [
//             "Domain 1",
//             "Doman 2",
//             "Domain 3",
//             "Domain 4",
//             "Others, please specify",
//           ],
//           explanation:
//             "In this questionnaire type we let users pick any one option or let them enter their answers as text in the given text box.",
//           answer_ui: "Upto 8 Max options",
//           standardized_ui: "options_8",
//         },
//         {
//           question_id: "4",
//           set_id: "LS123",
//           chatpter_name: "QUESTION LOAD",
//           question_type: "Question Set Load",
//           question: "For which question set your raising this request for ?",
//           options: "Choose your question set",
//           explanation:
//             "User wil be redirected to a URL and will pick an item from that external URL, this will load a question set in JSON, In question set load, we construct & Invoke a URL from a external site - say http:\\\\localhost\\LS123 and get a json responce with a question set",
//           answer_ui: "Just redirect and loading responce question set",
//           standardized_ui: "redirect_reload",
//         },
//         {
//           question_id: "5",
//           set_id: "LS123",
//           chatpter_name: "DETAILS",
//           question_type: "Multiple Choice Questionnaires",
//           question:
//             "What are the top 3 features you will look for, when buying a laptop ?",
//           options: [
//             "Feature 1",
//             "Feature 2",
//             "Feature 3",
//             "Feature 4",
//             "Feature 5",
//             "Feature 6",
//           ],
//           explanation:
//             "For multiple choice questionnaires, we let users pick one or more answers from the given options.",
//           answer_ui: "Upto 8 Max options",
//           standardized_ui: "options_8",
//         },
//         {
//           question_id: "6",
//           set_id: "LS123",
//           chatpter_name: "DETAILS",
//           question_type: "Dropdown Questionnaires",
//           question: "What is the desired screen size for your laptop ?",
//           options: "Screen Size 1\nScreen Size 2\nScreen size 3\nScreen Size 4",
//           explanation:
//             "We let users pick any one option from the given drop down list",
//           answer_ui: "1 Drop Down",
//           standardized_ui: "drop_down_1",
//         },
//         {
//           question_id: "7",
//           set_id: "LS123",
//           chatpter_name: "DETAILS",
//           question_type: "Image Choice Questionnaires",
//           question: "Which laptop brand do you prefer to buy ?",
//           options: ["Image 1", "Image 2", "Image 3"],
//           explanation:
//             "For image choice questionnaires, all answer options will be provided as images and we let users pick an option",
//           answer_ui: "Upto 8 Max options",
//           standardized_ui: "options_8",
//         },
//         {
//           question_id: "8",
//           set_id: "LS123",
//           chatpter_name: "DETAILS",
//           question_type: "Ordinal Scale Questionnaires",
//           question:
//             "How do you like to prioritize your prefernces while ordering for a lpatop ?",
//           options: [
//             "Feature 1",
//             "Feature 2",
//             "Feature 3",
//             "Feature 4",
//             "Feature 5",
//             "Feature 6",
//           ],
//           explanation:
//             "We will provide a set of options for the user and we let them prioritize or rank the options based on their preferences by just clicking on it. For example when user clicks on Design, design will be given the first priority and so on...",
//           answer_ui: "Upto 8 Max options",
//           standardized_ui: "options_8",
//         },
//         {
//           question_id: "9",
//           set_id: "LS123",
//           chatpter_name: "DETAILS",
//           question_type: "Ratio Scale Questionnaires",
//           question: "How much time do you spend daily using your laptop ?",
//           options: [
//             "Less than 2 hours",
//             "2 - 4 hours",
//             "4 - 6 hours",
//             "More than 6 hours",
//           ],
//           explanation:
//             "Ratio scale is a type of variable measurement scale where options are quantitative in nature. We let users choose an option from the given list.",
//           answer_ui: "Upto 8 Max options",
//           standardized_ui: "options_8",
//         },
//         {
//           question_id: "10",
//           set_id: "LS123",
//           chatpter_name: "DETAILS",
//           question_type: "Dichotomous scale questionnaires",
//           question:
//             "Would you like to go ahead and place an order for your laptop ?",
//           options: "Yes\nNo",
//           explanation:
//             'User can choose between "Yes" or "No" option. We just offer two possible answers for the user to choose from.',
//           answer_ui: "Upto 2 Max options",
//           standardized_ui: "Options_2",
//         },
//         {
//           question_id: "11",
//           set_id: "LS123",
//           chatpter_name: "DETAILS",
//           question_type: "File Upload questionnaires",
//           question: "Attach documents that support your product.",
//           options: "Browse documents",
//           explanation: "We let users browse and attach a file.",
//           answer_ui: "1 File Upload",
//           standardized_ui: "file_upload_1",
//         },
//         {
//           question_id: "12",
//           set_id: "LS123",
//           chatpter_name: "SUMMARY",
//           question_type: "Summary",
//           question: "Summary of choices made",
//           options: "Show summary of full set",
//           explanation: "user will see entire question set and their choices ",
//           answer_ui: "Full List with page by page display",
//           standardized_ui: "full_list_page_display",
//         },
//         {
//           question_id: "13",
//           set_id: "LS123",
//           chatpter_name: "COMFIRMATION",
//           question_type: "Confirmation",
//           question: "Confirmation popup message",
//           options: "Popup showing confirmation of submit",
//           explanation: "user will see a confirmation of choices made",
//           answer_ui: "Popup message",
//           standardized_ui: "popup",
//         },
//       ],
//     },
//   };

  if (standardized_ui === "text_box") {
    return <textarea id="w3review" name="w3review" rows="4" cols="50" className='write_text' />;
  } else if (standardized_ui === "options_8") {
    return (
      <div className='radio-box'>
        {options.map((o) => {
          return (
            <div className='radio-control'>
              <input type="radio" id={o} name={question_id} value={o} />
              <label for={o} style={{fontSize:'1.7em'}}>{o}</label>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  } else if (standardized_ui === "drop_down_1") {
    let optionsList = options.split("\n");
    return (
      <div className='select'>
        <select name={question_id} id={question_id}>
          {optionsList.map((o) => {
            return <option value={o}>{o}</option>;
          })}
        </select>
      </div>
    );
  } else if (standardized_ui === "Options_2") {
    let optionsList = options.split("\n");
    return (
      <div className='wrapper-form-control-radio'>
        {optionsList.map((o) => {
          return (
          
            <div className='form-control-radio'>
              <input type="radio" id={o} name={question_id} value={o} />
              <label for={o}>{o}</label>
          <br></br> 
            
            </div>
          );
        })}
      </div>
    );
  } else if (standardized_ui === "file_upload_1") {
    return (
      <div>
        <input type="file" id={question_id} name="filename" className='custom_input_file' style={{background: 'linear-gradient(top, #f9f9f9, #e3e3e3)'}}></input>
      </div>
    );
  }

  return <div className='notification' style={{fontFamily:'Times New Roman',background:'#0a46c01f',fontSize:'1.5em'}}>Invalid input type for the given question</div>;
}
