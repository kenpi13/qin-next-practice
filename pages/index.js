import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header></Header>
      <div>Hello World</div>
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
