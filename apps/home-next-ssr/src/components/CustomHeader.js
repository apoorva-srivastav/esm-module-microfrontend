import dynamic from 'next/dynamic' 
import {Header} from 'https://ui-l.vercel.app/Header@1.0.0.mjs'

function CustomHeader({count}){
   return (
    <Header title='Home Page' count={count}/>
  )
}

export default dynamic(() => Promise.resolve(CustomHeader), { ssr: false });