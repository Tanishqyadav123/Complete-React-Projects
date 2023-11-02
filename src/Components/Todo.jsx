import React from "react";

import { useState } from "react";
import { useEffect } from "react";

function Todo() {
  const details = {
    id: "",
    todo: "",
    isEditable: false,
  };
  const [data, setData] = useState(details);
  const [list, setList] = useState([]);
  const [editedVal , setEditedVal] = useState("")

  const handleChange = (e) => {
    setData({ id: Date.now(), todo: e.target.value, isEditable: false });

    // console.log(data);
    // list.push(data)
  };

  const AddTodo = () => {
    // let Newarr = []
    // Newarr.push(data)
    setList([...list, data]);
    // console.log(list);
  };

   const addAgain = (element) =>{
       element.isEditable = false
       console.log(list)
   }
  const deleteTodo = (id) => {
    console.log(id);
    setList(() => {
      return list.filter((element) => {
        if (id !== element.id) {
          return element;
        }
      });
    });
    // console.log(list);
  };

  const updateTodo = (element) => {
    let newList = [...list];
       
   
      
      // element.isEditable = !element.isEditable;
      setList([...newList , {...element , isEditable : !element.isEditable} ])
   

    console.log(element);
    // setList (list.map(elem))
  };

  const AddEdit =(element) =>{
        console.log(element.todo)
        setList([...list , {...element , todo : editedVal}])
  }
  return (
    <>
      <h1>Todo List Again </h1>
      <div className="container my-5 ">
        <input
          type="text"
          style={{
            padding: "6px 12px",
            margin: "10px",
            width: "40vw",
            borderRadius: "18px",
          }}
          placeholder="Enter your Task..."
          onChange={handleChange}
         
        />
        <button className="btn  btn-success" onClick={AddTodo}>
          <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      </div>

      <div className="m-3">
        {list.map((element, index) => {
          return element.isEditable ? (
            <div className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "40vw",
              padding: "6px",
              backgroundColor: "#646cffaa",
              borderRadius: "20px",
              marginBlock: "10px"}} key={index}>
              <input
              type="text"
              style={{
                padding: "6px 12px",
                margin: "10px",
                width: "40vw",
                borderRadius: "18px",
                backgroundColor : "transparent"
              }}
              
              onChange={(e) => setEditedVal (e.target.value)}
              
            />
              <button className="btn  btn-secondary" onClick={() => AddEdit(element)}>
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
          ) : (
      
            <div
              className="container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "40vw",
                padding: "6px",
                backgroundColor: "#646cffaa",
                borderRadius: "20px",
                marginBlock: "10px",
              }}
              key={index}
            >
              <p className="mt-2 mr-4" style={{ fontWeight: "bolder" }}>
                {element.todo}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: "10px",
                }}
              >
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => updateTodo(element)}
                >
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>

                <button
                  className="btn btn-sm btn-danger "
                  onClick={() => deleteTodo(element.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
       {/* {
          useEffect (() =>{
           return <div className="m-3">
            {list.map((element, index) => {
              return element.isEditable ? (
                <div className="container"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "40vw",
                  padding: "6px",
                  backgroundColor: "#646cffaa",
                  borderRadius: "20px",
                  marginBlock: "10px"}} key={index}>
                  <input
                    type="text"
                    style={{
                      padding: "6px 12px",
                      margin: "10px",
                      width: "40vw",
                      borderRadius: "18px",
                      backgroundColor : "transparent"
                    }}
                    value={element.todo}
                    {...element.isEditable ? {"readOnly" : false } : ("readOnly") }
                    onChange={handleChange}
                  />
                  <button className="btn  btn-secondary" onClick={() => AddTodo()}>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>
              ) : (
                <div
                  className="container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "40vw",
                    padding: "6px",
                    backgroundColor: "#646cffaa",
                    borderRadius: "20px",
                    marginBlock: "10px",
                  }}
                  key={index}
                >
                  <p className="mt-2 mr-4" style={{ fontWeight: "bolder" }}>
                    {element.todo}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      columnGap: "10px",
                    }}
                  >
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => updateTodo(element)}
                    >
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>
    
                    <button
                      className="btn btn-sm btn-danger "
                      onClick={() => deleteTodo(element.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          } , [updateTodo , AddTodo , deleteTodo])
       } */}
    </>
  );
}

export default Todo;
