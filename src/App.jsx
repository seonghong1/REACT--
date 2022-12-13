import './App.css';
import React, { useState } from 'react';
import Box from './components/Box';

function App() {
  const [mySelect, setMySelect] = useState(null);
  const [computerSelect, setcomputerSelect] = useState(null);
  //승패 결과값
  const [result, setResult] = useState('');
  // 선택할 가위바위보 값들
  const choice = {
    scissors: { name: 'Scissors', img: 'scissors.png' },
    rock: { name: 'Rock', img: 'rock.png' },
    paper: { name: 'Paper', img: 'paper.png' }
  }

  //버튼을 클릭시 발생되는 함수
  const play = (myChoice) => {
    //키 값은 내가 클릭한 함수의 매개변수
    setMySelect(choice[myChoice])
    //컴퓨터의 랜덤 선택값을 randomChoice()함수를 만들어 값을 매겨줌
    let computerChoice = randomChoice();
    setcomputerSelect(computerChoice)
    //유저가 선택한 값, 컴퓨터가 선택한 값을 judgement에 매개변수로 전달
    setResult(judgement(choice[myChoice], computerChoice))
  }
  const judgement = (uu, cc) => {
    if (uu.name === cc.name) {
      return 'TIE'
    } else if (uu.name === 'Rock') { return cc.name === 'Scissors' ? 'WIN' : 'LOSE' }
    else if (uu.name === 'Scissors') { return cc.name === 'Paper' ? 'WIN' : 'LOSE' }
    else if (uu.name === 'Paper') { return cc.name === 'Rock' ? 'WIN' : 'LOSE' }
    console.log(uu, cc)
  }

  //컴퓨터가 선택한 랜덤값
  const randomChoice = () => {
    //오브젝트의 키값들을 갖고오기( Object.keys(객체명)js 내장함수) / 배열의 형태로 갖고옴
    let itemArray = Object.keys(choice);
    //0~2까지의 숫자를 랜덤으로 갖고옴
    let randomIem = Math.floor(Math.random() * itemArray.length)
    //가위바위보의배열[숫자랜덤값]
    let final = itemArray[randomIem]
    //{name:'Rock', img:'rock.png'} 형태의 값이 나옴
    return choice[final]
  }



  return (
    <>
    <div className="title">😀Rock Paper Scissors🤣</div>
      <div className='main'>
        <Box title='My' item={mySelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>
      <div className="main">
        {/*
    onClick 이벤트 사용시 함수를 function으로 한번 더 묶어줘야댐
    안하면 문서가 로드되자마자 실행됨 
     */}
        <button onClick={() => play('scissors')}><i class="fa-regular fa-hand-scissors"></i></button>
        <button onClick={() => play('rock')}><i class="fa-regular fa-hand-back-fist"></i></button>
        <button onClick={() => play('paper')}><i class="fa-regular fa-hand"></i></button>
      </div>

    </>
  );
}

export default App;
