import React,{Component} from 'react';
import "./Burger.css";


export default class Burger extends Component{
  state={
    lettuce:0,
    meat:0,
    tomato:0,
    cheese:0

  }
  addRemoveIngredient =(action,ingredient) => {
    let {
      lettuce,
      meat,
      tomato,
      cheese
    } = this.state

    let stateValue;

    switch(ingredient){
      case 'lettuce' :{
        stateValue=lettuce;
        break;
      }
      case 'meat' :{
        stateValue=meat;
        break;
      }
      case 'tomato' :{
        stateValue=tomato;
        break;
      }
      case 'cheese' :{
        stateValue=cheese;
        break;
      }
      default:break;
    }
    if(action === 'add'){
      stateValue=stateValue+1;
    }
    else{
      stateValue=stateValue-1;
    }
    this.setState({
      [ingredient] : stateValue >= 0 ? stateValue:0
    })
    
      
  }

  burgerContent = () => {
    let {
      lettuce,
      meat,
      tomato,
      cheese
    } = this.state;

    let burger=[];

    //outputing lettuce
    for(let i=0; i<lettuce;i++)
    {
        burger.push(<div key={burger.length} className="lettuceSide"></div>);
    }
    
    //outputing meat
    for(let i=0; i<meat;i++)
    {
        burger.push(<div key={burger.length} className="meatSide"></div>);
    }
    
    //outputing tomato
    for(let i=0; i<tomato;i++)
    {
        burger.push(<div key={burger.length} className="tomatoSide"></div>);
    }
    
    //outputing cheese
    for(let i=0; i<cheese;i++)
    {
        burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }
    return burger;
  }
  render(){
    return(
      <>
        <div className="burger">
          <div className="burgerIngredients">
            <div className="topSide"></div>
            {this.burgerContent()}
            <div className="bottomSide"></div>
          </div>
          <div className="ingredients">
           
            <div className="ingbuts">
            <button onClick={()=> {this.addRemoveIngredient('remove','lettuce') }} className="ingBut">-</button>
            <p>Lettuce</p>
            <button onClick={()=>this.addRemoveIngredient('add','lettuce') } className="ingBut">+</button>
            </div>
            
            <div className="ingbuts">
            <button onClick={()=>this.addRemoveIngredient('remove','meat') } className="ingBut">-</button>
            <p>meat</p>
            <button onClick={()=>this.addRemoveIngredient('add','meat') } className="ingBut">+</button>
            </div>
            
            <div className="ingbuts">
            <button onClick={()=>this.addRemoveIngredient('remove','tomato') } className="ingBut">-</button>
            <p>tomato</p>
            <button onClick={()=>this.addRemoveIngredient('add','tomato') } className="ingBut">+</button>
            </div>
            
            <div className="ingbuts">
            <button onClick={()=>this.addRemoveIngredient('remove','cheese') } className="ingBut">-</button>
            <p>cheese</p>
            <button onClick={()=>this.addRemoveIngredient('add','cheese') } className="ingBut">+</button>
            </div>
          </div>
          </div>
          
      </>
    );
  }
}
