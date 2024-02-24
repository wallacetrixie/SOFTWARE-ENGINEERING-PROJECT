function Names(props) { 
    return (
        <div className="student">
            <p>My name is:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Date of birth:{props.date}</p>
            <p> Is he above 20 years?:{ props.isAbove ? "yes" :"no"}</p>
        </div>

    );
};

Names.defaultProps = {
    name: "guest",
    age: "0",
    date: "null"
};
export default Names;


//The below commented code shows the corresponding app.jsx code that renders the above,
// copy and paste on the App.jsx when you want to run and test the above code


// import Names from './props.jsx'
// function App() {
//   return (
//     <>
//       <Names
//         name="wallace wambulwa" age="19" date="01/5/2004" isAbove="true"
//       />
//       <Names
//         name="Mark johnson" age="45" date="9/8/2012" isAbove="false"
//       />
//       <Names
//         name="joseph ritchie" age="11" date="8/5/2013" isAbove="true"
//       />
//       <Names/>
//     </>
      
    
//   );

// }
// export default App;