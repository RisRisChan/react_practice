//defaultエクスポートの名前は任意の名前をつけて良い
//一般的にはファイル名にする
import Child from "./component/Child";

const Example = () => {
  return (
    <div>
      <h3>練習問題</h3>           
      <p>/componentsフォルダをstart内に作成して、Childにコンポーネントを分離して、Exampleコンポーネントで読み込んでください。</p>
      { /* ↓↓↓ Childコンポーネントに移動 */ }
      <Child />
      { /* ↑↑↑ Childコンポーネントに移動 */ }
    </div>
  );
};
 
export default Example;

