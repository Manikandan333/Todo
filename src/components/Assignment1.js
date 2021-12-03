export default function Assignment1(props)
{
    const exp=[
    
    {
        id:1,
        name:chandra,
        age:25,

    },

    {
        id:22,
        name:charles,
        age:34,

    },
    {
        id:33,
        name:toyota,
        age:1996,

    },
    ];


return
(
<div>
    
<h1>Let's start</h1>
<exp
   id={exp[0].id}
   name={exp[0].name}
   age={exp[0].age}
 />
   <exp
   id={exp[1].id}
   name={exp[1].name}
   age={exp[1].age}
   />
</div>
)
}