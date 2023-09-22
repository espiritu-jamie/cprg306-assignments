export default function Item({name, quantity, category}) {
  return (
    <ul>
        <li className="text-lg m-4 p-2 bg-slate-700 text-slate-100 w-9/12-max">{name}
        <p className="text-sm">Buy {quantity} in {category}</p>
        </li>
    </ul>
    
  )
}