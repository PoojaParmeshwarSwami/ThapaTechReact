
function UseStateArray(){

    const bioData =[
        {
            id:0,
            MyName:"pooja",
            age:21
        },
        {
            id:1,
            MyName:"parmeshwar",
            age:23
        },
        {
            id:2,
            MyName:"meena",
            age:25
        }
    ]
    console.log(bioData)
    return(<>
    {
    bioData.map((curr)=><h1>name:{curr.MyName}age:{curr.age}</h1>)
    }

    
    </>)


        
    
}
export default UseStateArray;