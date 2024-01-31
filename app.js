/*
<div>
    <div>
        <h1>this is h1 tag</h1>
    </div>
</div>
how can we do nested tags with help of react
*/
   
   
   const parent = React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"this is h1 tag"),
        React.createElement("h2",{},"this is h2 tag")
        ])
   );

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);
   
   
//    const heading = React.createElement(
//         "h1",
//         {id:"heading"},
//         "hello world by react");
//     const root= ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);