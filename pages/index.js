import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useCallback, useEffect } from 'react';
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

  // useEffect
  useEffect(() => {
    document.body.style.backgroundColor = "lightBlue"
    return () => {
      document.body.style.backgroundColor = ""
    }
  },[]);
  return (
    <>
      <Header></Header>
      <div>Hello World</div>
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
