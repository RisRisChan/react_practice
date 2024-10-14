import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    // const o = {
    //     color: "red",
    //     num: 123
    // }
    return (
        <>
            <Child 
                // POINT propsには全てのタイプの値を渡すことができます。
                // {...o}
                color="blue"
                num={123}
                fn={hello}
                bool={false}
                obj={{ name: 'Tom', age: 18 }}
            />
            
        </>
    )
    
};

export default Example;
