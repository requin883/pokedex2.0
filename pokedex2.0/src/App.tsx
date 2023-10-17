import { Pokedex } from "./Components/Pokedex";

export default function app() {
  return(
    <div className="grid place-items-center bg-amber-200/50">
      <div className="grid w-[100vw] h-[100vh] place-items-center">
    <h1 className="font-bold justify-self-center text-[5em]">Pokedex</h1>
    <Pokedex/>
      </div>
    </div>
  )
}