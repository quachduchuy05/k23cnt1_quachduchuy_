import QdhFuncComp from "./components/QdhFuncComp";
import QdhJsxExpression from "./components/QdhJsxExpression";


function QdhApp() {
  return (
    <div className="container boder mt-3  bg-white">
      <h1> react day 3</h1>
        <QdhJsxExpression/>
       
       <hr/>
       {/*su dung function components*/}
       <QdhFuncComp/>
       {/* su dung class conphonent */}
       <QdhClassComp></QdhClassComp>
    </div>
  );
}

export default QdhApp;
