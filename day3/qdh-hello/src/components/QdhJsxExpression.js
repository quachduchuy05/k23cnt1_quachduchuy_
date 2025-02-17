import React from "react";

export default function QdhJsxExpression(){
    // bien
    const name="quach duc huy";
// bien doi tuong
    const user={
        firstName:"quach"
        lastName:"huy";

    }
    // ham
    const fullName=(user)=>{
            return "<h2>" + user.firstName +' '+ user.lastName + "</h2>";

    }
    //element
    const element = (
        <div>
            {/*bieu thuc jsx */}
            {fullName(user)}
            <hr/>
            <h3> Wecome to, {name} </h3>
        </div>
    )
    //ham
    const sayWelcome =(name)=>{
        if(name){

        }else{
            return <h3>Welcome to {name}</h3>
        }
    }
    return (
        <div>
                <h1> Qdh - Jsx Expression</h1>
                {/* su dung bien element*/}
                {element}
        </div>
    )
}