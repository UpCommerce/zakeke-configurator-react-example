import { useZakeke, ZakekeViewer } from "zakeke-configurator-react"
import Selector from "./selector"

function App() {
  const { isSceneLoading } = useZakeke()

  return (
    <div className="grid grid-cols-2 gap-10 h-full p-10">
      {isSceneLoading ? (
        <p>Loading scene...</p>
      ) : (
        <>
          <Selector />
          <div>
            <ZakekeViewer bgColor="#f2f2f2" />
          </div>
        </>
      )}
    </div>
  )
}

export default App
