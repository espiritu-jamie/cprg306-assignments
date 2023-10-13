export default function Item({name, quantity, category}) {
  return (
    <ul className="text-center">
        <li className="text-lg m-4 p-2 bg-slate-600 text-slate-100 w-5/12 rounded-lg">{name}
        <p className="text-sm">Buy {quantity} in {category}</p>
        </li>
    </ul>
    
  )
}