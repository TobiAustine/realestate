import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //     proxy:{
  //       '/': {
  //         target:'http://localhost:8000',
  //         secure:false  
  //       }     
  //       }
  //     },
  
 
  plugins: [react()],
})
 // build:{
  //   base:'http://localhost:8000',
  // },