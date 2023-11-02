import React , {useState} from "react";

function DictionaryFormat() {
 
     const [word , setWord] = useState("bright")
    const HandleChange = (e) =>{
         setWord(e.target.value)
    }

   
    // API calling starts here :-
    const getMeaning = () =>{
        const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e9aa0559a3msh52c36dd91bfe9b0p1e6584jsn8669a8781902',
                'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        try {
            fetch(url , options)
            .then((raw) => raw.json())
            .then((actual) => setWord(actual) )
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div className="container" style={{ display : "flex" , flexDirection :'column' , rowGap : "40px", marginTop : "40px"}}>
      <h1>MyWordDictionary</h1>
      <div className="container">
        <div className="mb-3 " style={{width : "300px" , display : "flex" , alignItems : "center" , justifyContent : "center"}}>
         <div>
            {/* {word} */}
         <label htmlFor="formGroupExampleInput" className="form-label">
           Put Word Here!!!
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter you word"
            onChange={HandleChange}
          />
         </div>
         <span><button className="btn btn-success mx-4 " style={{marginTop : "30px"}} onClick={getMeaning} ><i className="fa-solid fa-magnifying-glass fa-beat"></i></button></span> 
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Here's the meaning 
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Meaning will show Here"
            value={word.definition ? word.definition : "Sorry word not available"}
          />
        </div>
      </div>
    </div>
  );
}

export default DictionaryFormat;
