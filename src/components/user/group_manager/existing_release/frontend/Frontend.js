// import { useParams } from "react-router";
// import useFetch from "../../../../../useFetch";
// import Button from "./Button";
// import DatePickerHOC from "./DatePickerHOC";
// import Input from "./Input";

// const Frontend = () => {
//   const { id } = useParams();
//   // const [releases, setReleases] = useState(null);
//   const data = useFetch("http://localhost:8000/frontend");

//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log("Form submitted!");
//   };

//   const inputOptions1 = [
//     {
//       btnID: "featuresSummary",
//       btnType: "text",
//       btnClass: "validate",
//       btnText: "Features Summary",
//       btnWidth: "m12",
//       btnValue: data && data[1][1],
//     },
//   ];
//   const inputOptions2 = [
//     {
//       btnID: "platform",
//       btnType: "text",
//       btnClass: "",
//       btnText: "Platform",
//       btnWidth: "m4",
//       btnValue: data && data[2][1],
//     },
//     {
//       btnID: "releaseType",
//       btnType: "text",
//       btnClass: "",
//       btnText: "Release Type",
//       btnWidth: "m4",
//       btnValue: data && data[3][1],
//     },
//     {
//       btnID: "releaseVersion",
//       btnType: "text",
//       btnClass: "materialize-textarea",
//       btnText: "Release Version",
//       btnWidth: "m4",
//       btnValue: data && data[4][1],
//     },
//   ];
//   const inputOptions3 = [
//     {
//       btnID: "impact",
//       btnType: "text",
//       btnClass: "",
//       btnText: "Impact",
//       btnWidth: "m3",
//       btnValue: data && data[5][1],
//     },
//     {
//       btnID: "impactAreas",
//       btnType: "text",
//       btnClass: "",
//       btnText: "Impact Areas",
//       btnWidth: "m3",
//       btnValue: data && data[6][1],
//     },
//     {
//       btnID: "developerPOC",
//       btnType: "text",
//       btnClass: "",
//       btnText: "Developer Point of Contact",
//       btnWidth: "m3",
//       btnValue: data && data[7][1],
//     },
//     {
//       btnID: "qaPOC",
//       btnType: "text",
//       btnClass: "",
//       btnText: "QA Point of Contact",
//       btnWidth: "m3",
//       btnValue: data && data[8][1],
//     },
//   ];
//   const inputOptions4 = [
//     {
//       btnID: "releasePercentage",
//       btnType: "text",
//       btnClass: "",
//       btnText: "Release Percentage",
//       btnWidth: "m3",
//       btnValue: data && data[11][1],
//     },
//     {
//       btnID: "releaseWindow",
//       btnType: "text",
//       btnClass: "",
//       btnText: "Release Window",
//       btnWidth: "m3",
//       btnValue: data && data[12][1],
//     },
//   ];
//   const dateOptions = [
//     {
//       id: "releaseSignOffDate",
//       name: "Release SignOff Date",
//       width: "m3",
//       disabled: true,
//       btnValue: data && data[9][1],
//     },
//     {
//       id: "releaseDate",
//       name: "Release Date",
//       width: "m3",
//       disabled: false,
//       btnValue: data && data[10][1],
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="card z-depth-2 formStyle1">
//         <div className="padding-top-20px">
//           <form onSubmit={(event) => submitHandler(event)}>
//             <div className="row">
//               <div className="left">
//                 <button className="btn btn-floating red">{id}</button>
//               </div>
//             </div>
//             <Input
//               key={inputOptions1[0].btnID}
//               btnID={inputOptions1[0].btnID}
//               btnType={inputOptions1[0].btnType}
//               btnClass={inputOptions1[0].btnClass}
//               btnText={inputOptions1[0].btnText}
//               btnWidth={inputOptions1[0].btnWidth}
//               btnValue={inputOptions1[0].btnValue}
//               // changeHandler={this.changeHandler}
//             />
//             {[inputOptions2, inputOptions3].map((option) => (
//               <div className="row">
//                 {option.map((element) => (
//                   <Input
//                     key={element.btnID}
//                     btnID={element.btnID}
//                     btnType={element.btnType}
//                     btnClass={element.btnClass}
//                     btnText={element.btnText}
//                     btnWidth={element.btnWidth}
//                     btnValue={element.btnValue}
//                     // changeHandler={this.changeHandler}
//                   />
//                 ))}
//               </div>
//             ))}
//             <div className="row">
//               {inputOptions4.map((element) => (
//                 <Input
//                   key={element.btnID}
//                   btnID={element.btnID}
//                   btnType={element.btnType}
//                   btnClass={element.btnClass}
//                   btnText={element.btnText}
//                   btnWidth={element.btnWidth}
//                   btnValue={element.btnValue}
//                   // changeHandler={this.changeHandler}
//                 />
//               ))}
//               {dateOptions.map((element) => (
//                 <DatePickerHOC
//                   key={element.id}
//                   id={element.id}
//                   name={element.name}
//                   width={element.width}
//                   disabled={element.disabled}
//                   btnValue={element.btnValue}

//                   // changeHandler={this.dateHandler}
//                 />
//               ))}
//             </div>
//             <div className="input-field col s12 center">
//               <Button />
//               {/* <Button submitHandler={submitHandler} /> */}
//             </div>
//             <div className="padding-top-10px"></div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Frontend;
