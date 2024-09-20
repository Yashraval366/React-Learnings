import { useState, useCallback, useRef } from 'react'
import './App.css'

function App() {
  
  const passwordref = useRef(null)

  const [length, setlength] = useState(8)

  const [numberAllowed, setnumberAllowd] = useState(false)

  const [charAllowed, setcharAllowed] = useState(false)

  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) {
      str += "01234589"
    }

    if(charAllowed){
    str += "<>?!@#$%^&*+_~[]{}`"
    }

    for(let i = 1; i <= length; i++){

      let char = Math.floor(Math.random() * str.length)

      pass +=  str.charAt(char)

    }

    setpassword(pass)

  }, [length, numberAllowed, charAllowed, setpassword])
  
  const generate = () => {
    passwordGenerator()
  }

  const copypassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0, 100)
  },[password])


  return ( 
    <> 
      <div className='main-box'>

        <h2>Password Generator</h2>


        <div className='second-box'>


          <input type="text"
          value={password}
          className='inpassword'
          placeholder='password'
          readOnly
          ref={passwordref}
            
          />
          <button onClick={copypassword} className='copybtn'>copy</button>
          
          <div className='fillters'>

            <div className='rangesetter'>
              <input type='range'
              min={6}
              max={60}
              value={length}
              onChange={(e) => {setlength(e.target.value)}}
                />
              <label>Length {length}</label>
            </div>


            <div className='numbercheckbox'>

              <input type= "checkbox"
              defaultChecked={numberAllowed}
              id='numberinput'
              onChange={() => {
                setnumberAllowd((prev) => !prev);
              }}
              /><label>Numbers</label>

            </div>

            <div className='charcheckbox'>

              <input type= "checkbox"
              defaultChecked={charAllowed}
              id='numberinput'
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
              /><label>Characters</label>

            </div>

          </div>

        </div>
        <button className='generate' onClick={generate}>Get Password</button>
      </div>
    </>
  )
}

export default App
