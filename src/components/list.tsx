interface ListItemProps {
  selected?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="m-0 p-0 flex items-center mb-10 flex-wrap">
      {children}
    </ul>
  )
}

export function ListItem({ selected, onClick, children }: ListItemProps) {
  return (
    <li
      onClick={onClick}
      className={`
        flex flex-col items-center text-center justify-center
        px-7 py-5 border cursor-pointer mr-5
        hover:bg-gray-100
        ${selected ? 'border-red-500' : 'border-gray-300'}
      `}
    >
      {children}
    </li>
  )
}

export function ListItemImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="w-16 h-16 object-contain mb-5"
    />
  )
}
