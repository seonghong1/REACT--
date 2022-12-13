import React from 'react'

const Box = (props) => {
  //승패를 반대로 해주기(컴퓨터 승패값 표시)
  // props.result의 값을 result변수 안에 넣어서 한번 걸러줌
  let result;
  //타이틀의 이름이 컴퓨터고, 승패 결과가 비겼을때가 아닐때고, 승패 결과가 공백이 아닐경우
  if (props.title === 'Computer' && props.result !== 'TIE' && props.result !== "") {
    //나의 result값이 이김이면 let result의 값은 졌어요, 내가 졌으면 let result의 값은 이김 !!
    result = props.result === 'WIN' ? 'LOSE' : 'WIN'
  } else {
    result = props.result;
  }
  console.log(result)
  return (
    <div className={`box  ${result}`}>
      <h1>{props.title}</h1>
      {/*질문 usestate의 갱신값이 없어서? props에 아이템 존재 여부*/}
      <img src={props.item && props.item.img} alt="" className='img' />
      <h1>{result}</h1>

    </div>
  )
}

export default Box