import Header from './Header/Header'
import './App.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';

function App() {
  const containerRef = useRef(null);
  return (
   /*  <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={[
    // ... all the dependencies you want to watch to update the scroll.
    //  Basically, you would want to watch page/location changes
    //  For example, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criteria if the instance should be updated on locations with query parameters)
  ]}
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}> */
  <div className="App">
      <Header />
     
    </div>
/*  </main>
</LocomotiveScrollProvider> */
  )
}

export default App
