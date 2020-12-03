import React ,{Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import TodoItem from './components/TodoItem';
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokeData from './data/jokesData';
import Product from './components/Product';
import productData from './data/schoolProducts';
import todoData from './data/todoData';
import FormContainer from './components/FormContainer'
import FormComponent from './components/FormComponent'
import MemeHeader from './components/MemeHeader'
import MemeGenerator from './components/MemeGenerator'
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos:todoData,
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   // componentDidMount(){
//   //   setTimeout(() => {
//   //     this.setState({
//   //       isLoading:false
//   //     })
      
//   //   }, 1500)
//   // }

//   handleChange(id){
//     console.log('id',id);
//     this.setState(prevState =>{
//       const updatedTodos = prevState.todos.map(todo=>{
//         if(todo.id === id){
//           todo.completed = !todo.completed
//         }
//         return  todo
//       })
//       return {
//         todos:updatedTodos
//       }
//     })

//   }

//   render() {
//     const todoItem = this.state.todos.map(item=><TodoItem key ={item.id} item = {item} handleChange = {this.handleChange}/>)
//     // let wordDisplay
//     // if(this.state.isLoggedIn ){
//     //   wordDisplay = 'in'
//     // }else{
//     //   wordDisplay ='out'
//     // }
//     return (
//       <div>
//         {todoItem}
//        {/* <h1>You are currently logged {wordDisplay}</h1> */}
//       </div>
//     );
//   }

//   //this is functional bassed Components.

//   // function App() {
//   //   const todoItems = todoData.map((item)=><TodoItem key ={item.id} item = {item}/>)

//   //   const productComponent = productData.map(product =><Product key ={product.id} product ={product}/>)
//   //     // return (
//   //     //   <Product
//   //     //     key={product.id}
//   //     //     name={product.name}
//   //     //     price={product.price}
//   //     //     description={product.description}
//   //     //   />
//   //     // );

//   //   const jokeComponents = jokeData.map((joke) => {
//   //     return (
//   //       <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
//   //     );
//   //   });

//   //   const firstName = 'sagar';
//   //   const lastName = 'Adhikari';

//   //   const date = new Date(2018, 6, 31, 5);
//   //   const hour = date.getHours();
//   //   let timeOfDay;
//   //   const styles = { fontSize: '30px', height: '40px' };

//   //   if (hour < 12) {
//   //     timeOfDay = 'Morning';
//   //     styles.color = 'red';
//   //   } else if (hour >= 12 && hour < 17) {
//   //     timeOfDay = 'Afternoon';
//   //     styles.color = 'purple';
//   //   } else {
//   //     timeOfDay = 'Night';
//   //     styles.color = 'green';
//   //   }
//   //   const nums = [1, 2, 3, 4, 5, 6, 7, 8];
//   //   const doubled = nums.map(function (num) {
//   //     return num * 2;
//   //   });

//   //   return (
//   //     <div className="todo-list">
//   //       {/* <h1 className ="h1"> Hello {firstName + " " + lastName}</h1>
//   //       <h2>Hello {`${firstName} ${lastName}`}</h2>
//   //       <h2 style = {styles} >Good {timeOfDay}</h2>

//   //       <Header/>
//   //       <Footer/>
//   //       <MainContent/> */}

//   //       {/* <ContactCard
//   //         contact ={{name:'Mr John',imgUrl:'http://placekitten.com/300/200',phone:'98765432',email:'sagradhkr48@gmail.com'}}

//   //       />
//   //       <ContactCard
//   //       contact ={{name:'Mr hari',imgUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.jakpost.net%2Fc%2F2019%2F06%2F18%2F2019_06_18_74603_1560829849._large.jpg&imgrefurl=https%3A%2F%2Fwww.thejakartapost.com%2Flife%2F2019%2F06%2F18%2Fmasters-of-manipulation-the-evolution-of-puppy-dog-eyes.html&tbnid=2VkdzPguUs5vdM&vet=10CAUQxiAoAmoXChMIsOuRvtGf7QIVAAAAAB0AAAAAEA0..i&docid=uQSnYKnopB0SkM&w=1000&h=536&itg=1&q=dog&ved=0CAUQxiAoAmoXChMIsOuRvtGf7QIVAAAAAB0AAAAAEA0",phone:'98765432',email:'sagradhkr48@gmail.com'}}
//   //       />
//   //       <ContactCard
//   //       contact ={{name:'Mr Ram',imgUrl:'http://placekitten.com/300/200',phone:'98765432',email:'sagradhkr48@gmail.com'}}
//   //       />
//   //       <ContactCard
//   //      contact ={{name:'Mr Kapil',imgUrl:'http://placekitten.com/300/200',phone:'98765432',email:'sagradhkr48@gmail.com'}}
//   //       />
//   //       <ContactCard
//   //       contact ={{name:'Mr Ravi',imgUrl:'http://placekitten.com/300/200',phone:'98765432',email:'sagradhkr48@gmail.com'}}
//   //       /> */}

//   //       {/*
//   //       <Joke   punchline ="fine"/>
//   //       <Joke question ="hello how are you?" punchline ="fine"/>
//   //       <Joke question ="hello how are you?" punchline ="fine"/>
//   //       <Joke question ="hello how are you?" punchline ="fine"/> */}

//   //       {/* {jokeComponents} */}

//   //       {/* {todoItems}

//   //       {productComponent}    */}

//   //     </div>
//   //   );
//   // }
// }

function App(){
  return(
    // <FormContainer/>
    <div>
        <MemeHeader/>
        <MemeGenerator/>
    </div>

  )

}

export default App;
