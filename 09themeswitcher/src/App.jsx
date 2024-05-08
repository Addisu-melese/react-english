/**
    * @description      : 
    * @author           : Hello
    * @group            : 
    * @created          : 01/05/2024 - 14:41:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/05/2024
    * - Author          : Hello
    * - Modification    : 
**/
/**
    * @description      : 
    * @author           : Hello
    * @group            : 
    * @created          : 01/05/2024 - 14:37:42
    * 
    * MODIFICATION t
    * - Modification    : 
**/

import { useEffect, useState } from 'react'
import {ThemeProvider} from './context/Theme'
import Cards from './componenets/Cards'
import ThemeBtn from './componenets/ThemeBtn'
const App = () => {
  const [ThemeMode,setThemeMode]=useState("light")
  const DarkTheme =()=>{
    setThemeMode("dark")    
  }
  const LightTheme =()=>{
    setThemeMode("light")    
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector("html").classList.add(ThemeMode)
  },[ThemeMode])
  return (
    <ThemeProvider value={{ThemeMode,DarkTheme,LightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>
              <div className="w-full max-w-sm mx-auto">
                  <Cards />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App