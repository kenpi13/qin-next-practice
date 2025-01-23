import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const items = [
    {
      name: "kenpi",
      age: 31,
      sex: "men"
    },
    {
      name: "kenta",
      age: 31,
      sex: "men"
    },
    {
      name: "jefy",
      age: 31,
      sex: "women"
    },
    {
      name: "sily",
      age: 19,
      sex: "women"
    }
  ];
  // useCallBackを使って再生成を防ぐ
  // const handleClick = useCallback((e) => {
  //   alert('おああ');
  // },[]);
  const [foo, setFoo] = useState(0);
  const [text, setText] = useState("aaa");
  const handleClick = () => {
    setFoo(foo => foo + 1);
  }
  const textChange = useCallback((e) => {
    if(e.target.value.length > 5) {
      alert("文字数オーバーです");
      setText("");
      return
    }
    setText(e.target.value);
  })
  // const handleClick = useCallback((e) => {
  //   setFoo(foo => foo + 1);
  // },[]);
  // useEffect
  useEffect(() => {
    console.log("foo");
    document.body.style.backgroundColor = "lightBlue"
    return () => {
      document.body.style.backgroundColor = ""
    }
  },[]);
  return (
    <>
      <Header></Header>
      <div>Hello World</div>
      <h1>{foo}</h1>
      <button onClick={handleClick}>+1</button>
      <input type='text' value={text} onChange={e => textChange(e)} />
      <Link href="/about">Aboutへ</Link>
      <Footer
        name="kenpi"
        number={111}
        array={[1,3,5]}
        bool={true}
        comp={<div>あああ</div>}
      >
        あいうえお
      </Footer>
    </>
  );
}
