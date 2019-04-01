import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Box extends React.Component{
  selectBox = () => {
    this.props.seloectBox(this.props.row.props.col);
  }
  render(){
    return(
      <div
      className={this.props.boxClass}
      id={this.props.id}
      onClick={this.selectBox}
      />
    );
  }
}

class Grid extends React.Component {
    render() {
      const width = this.props.cols -14
      const rowsArr = []

         var boxClass = "";
         for(let i = 0; i < this.props.rows; i++){
              for(let j = 0; j < this.props.cols; j++){
                let boxId = i + "_" + j;

                boxClass = this.props.gridFull[i][j] ? "box on" : "box off"
                rowsArr.push(
                  <box
                  boxclass={boxClass}
                  key={boxId}
                  row={i}
                  col={j}
                  selectBox={this.props.selectBox}
                  />
                )
              }
         }


        return (
         <div className="grid" style={{width: width}}>
        {{rowsArr}}
         </div>
        );
   }
}

class Main extends React.Component{
    constructor() {
        super();
        this.speed = 100;
        this.rows = 30;
        this.col = 50;

        this.state = {
            generation : 0,
            gr4idFull: Array(this.rows).fill(() =>(this.col).fill(false)
          )
        }
    }
    render() {
        return (
            <div>
                <h1>The Game Of Life</h1>
                <grid
                  gridFull={this.state.gridFull}
                  rows={this.rows}
                  col={this.col}
                  selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generation} </h2>
            </div>
        )
    }
}

ReactDOM.render(<Main /> , document.getElementById('root'));
