import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useCallback } from 'react';

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
  const handleClick = useCallback((e) => {
    alert('おああ');
  },[]);
  return (
    <>
      <Header></Header>
      <div>Hello World</div>
      <button onClick={() => {alert('あああ')}}>ボタン</button>
      <a
        href="/about"
        onClick={(e) => {
          e.preventDefault();
        }}
      >Aboutへ遷移ボタン
      </a>
      <a
        href="/about"
        onClick={handleClick}
      >Aboutへ遷移ボタンメソッド取り出し
      </a>
      {
        items.map((item) => {
          return (
            <div key={item.name}>
              <ul>
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.sex}</li>
              </ul>
            </div>
          )
        })
      }
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
