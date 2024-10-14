
import "./Child.css";

//分割代入f
const Child = ({color = 'green', num, fn, bool, obj }) => {
  console.log(obj);

  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn('Props')}</h3>
      <h3>{bool ? 'true' : 'false'}</h3>
      <h3>{`${obj.name}は${obj.age}です`}</h3>
    </div>
  );
};

export default Child;
