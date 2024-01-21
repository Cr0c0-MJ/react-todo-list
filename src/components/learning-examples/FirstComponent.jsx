export default function FirstComponent(){
    return (
      <div className='FirstComponent'>First Component</div>
    )
}

// default 가 아니기 때문에 사용하려면 app.js  에서 import 할 때 중괄호 써야함
export function FifthComponent() {
    return (
        <div>Fifth Component</div>
    )
}