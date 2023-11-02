import { useState } from "react";


function Swap() {
  // const [count, setCount] = useState(0)
  const [List, setList] = useState([
    {
      Name: "Cricket",
      isMarked: false,
      position: "left",
    },
    { Name: "Football", isMarked: false, position: "left" },
    {
      Name: "BasketBall",
      isMarked: false,
      position: "left",
    },
    {
      Name: "Karate",
      isMarked: false,
      position: "left",
    },
  ]);

  const [LeftList , setLeftList] = useState([]) 


  const ToggleCheck = (index) => {
   
    let Newarr = [...List];

    if (Newarr[index].isMarked === false) {
      Newarr[index].isMarked = true;
    } else {
      Newarr[index].isMarked = false;
    }

    setList(Newarr)
  };


   const RightToLeft = () =>{
    let rightarr = [...List];
    console.log("right " , rightarr)
     setList(() =>{
       
        return rightarr.filter((element) =>{
           
             if (element.isMarked === false){
                 
                  return element
             }
             else {
               element.position = "right"
               element.isMarked = false
               LeftList.push(element)
               
             }
        })
     })

     setList(() =>{
      return List.filter ((elem) =>{
              if (elem.position === "left"){
                   return elem
              }
        })
     })
     console.log(" List " , List)
     console.log("Left " , LeftList)
   

   const LeftToRight = () =>{
         let LeftDum = [...LeftList]
      
          setLeftList (() =>{

                    return  LeftDum.filter((elem) =>{
                      if (elem.position === "right" && elem.isMarked == true ){
                        
                        // LeftDum.pop(elem)
                        
                           elem.position = "left"
                           elem.isMarked = false
                           List.push(elem)
                           console.log("uppar")
                           LeftDum.pop(elem)
                      }
                      else {
                        console.log("return wale")
                        return elem
                           
                      }
                })
          })   

         setLeftList(LeftDum)
          console.log("LeftToright " , LeftList)
   }


   const LeftToggle = (index) =>{
       console.log("Left" , index)

       let NewLeft = [...LeftList]
       if (NewLeft[index].isMarked === false){
           NewLeft[index].isMarked = true
       }
       else {
        NewLeft[index].isMarked = false 
       }

       setLeftList(NewLeft)
       console.log(LeftList)
   }
  return (
    <>
      <div style={{ display: "flex", marginTop: "250px" }}>
        <div
          style={{
            display: " flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {List.map((elem, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => ToggleCheck(index)}
                />
                <h4>{elem.Name}</h4>
              </div>
            );
          })}
        </div>
        <button className="btn btn-primary"  onClick={RightToLeft}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button className="btn btn-primary" onClick={LeftToRight}>
          <i className="fa-solid fa-arrow-right  fa-rotate-180"></i>
        </button>

        <div style={{ border: "2px solid black", width: "400px" }}>

             {
               LeftList.map((elem , index) =>{
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      
                      onChange={() => LeftToggle(index)}
                    />
                    {  
                        <h4>{elem.Name}</h4>
                    }
                   
                  </div>
                );
               })
             }
        </div>
      </div>
    </>
  );
 }}

export default Swap;
