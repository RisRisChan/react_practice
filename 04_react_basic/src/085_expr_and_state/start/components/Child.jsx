/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）

文：変数宣言、for文、if文、switch文やセミコロンで区切るもの
　　例えばfor文の実行結果を変数に代入することはできない

式は文になる場合があるが、文は式にならない

【式はJSX内で使用可能だが、文は使用不可】
*/

import "./Child.css";
// 式
const a = 1;
const fn = () => 'hello'
const b = fn();

// 文
if(true) {'hello'}

const Child = () => {

  return (
    <div className="component">
      <h3>式と文</h3>
      <h3>式：{1}</h3>
      <h3>式：{b}</h3>
      <h3>式：{1 === 1}</h3>
      <h3>式：{1 === 1 ? 'YES' : 'NO'}</h3>
      
    </div>
  );
};

export default Child;
