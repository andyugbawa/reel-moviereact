import React,{useState,useEffect,useRef} from 'react'
import "./film.css"
import {Link} from "react-router-dom"
import { SliderData } from './SliderData'
import { MovieCap } from './MovieCap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


const Film = () => {
    const [toggle,setToggle]=useState(false);
    const[screen,setScreen]= useState(window.innerWidth)
    const [current,setCurrent]=useState(0)
    const [display,setDisplay]= useState(0)
    const [kraven,setkraven] =useState(false)
    const [glad,setGlad] =useState(false)
    const [war,setWar] =useState(false)
    const [city,setCity] =useState(false)
    const [moan,setMoan]=useState(false)
    const [max,setMax]=useState(false)
    const [venom,setVenom]=useState(false)
    const [dune,setDune]=useState(false)
    const [pool,setPool]=useState(false)
    const displayRef = useRef(display);

    const length= SliderData.length
    const length1= MovieCap.length 

    const navToggle=()=>{
      setToggle(!toggle)
    }

    const nextSlide=()=>{
      setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevSlide=()=>{
      setCurrent(current === 0 ? length-1 : current-1)
    }

    useEffect(() => {
      displayRef.current = display;
    }, [display]);


    useEffect(() => {
      const interval = setInterval(() => {
        setDisplay((current) => (current === length1 - 1 ? 0 : current + 1));
      }, 2000);
  
      return () => clearInterval(interval); 
    }, [length1]);


    
  useEffect(()=>{
    const changeWidth=()=>{
        setScreen(window.innerWidth)
    }
    window.addEventListener("resize",changeWidth)
    return()=>{
        window.removeEventListener("resize",changeWidth)
    }
    
},[])

   const handleFlip=()=>{
    setkraven(!kraven)
   }

   const handleFlyMode=()=>{
    setGlad(!glad)
   }

   const handleWar=()=>{
    setWar(!war)
   }
   const handleCity=()=>{
    setCity(!city)
  }

   const handleMoan=()=>{
    setMoan(!moan)
  }

   const handleMax=()=>{
    setMax(!max)
  }
   const handleVenom=()=>{
    setVenom(!venom)
  }

   const handleDune=()=>{
    setDune(!dune)
  }
   const handlePool=()=>{
    setPool(!pool)
  }





    
  return (
    <div>
       <div>
        <div className='nav'>
          <div className='logo'>
            <div className='clap_logo'>
               <img className='clap' src="./images/clap.png" alt="show"/>
            </div>
            <h2 className='nav_brand'>Movie</h2>
            <h2 className='nav_reel'>Reel</h2>
          </div>
          {(toggle || screen>500)&&(
          <ul className={`nav-list ${toggle? "show-nav":""}`}>
            
            <li className='nav_item'><Link to="/series">Tv-Series</Link> </li>
            <li className='nav_item'><Link to="/top movies">Top Movies</Link> </li>
            <div className='button'>
              <button className='nav_item log-out' ><Link to="/">Log-Out</Link> </button>
            </div>
          </ul>

          )}
          <div onClick={navToggle} className={`nav_toggler ${toggle ?"toggle":"" }`}>
             <div className='line1'></div>
             <div className='line2'></div>
             <div className='line3'></div>
          </div>

        </div>
       </div>



  <div className='main'>
    <section className='slider-display'>
      <div className='rate'>
          {
            MovieCap.map((slides,index)=>{
              return(
              <div className={index===display ? "slide-active":"slide"} key={index}>
                {index===display && (<img src={`/${slides.images}`} alt="show" className='display-images'/>)}
                  
              </div>

              )
              
            })
          }
      </div>


  </section> 
      <div className='image-class'>
       <React.Fragment>
       <main>
        <div className='container'>
         <div  className={`cardless cardses ${kraven ? "cardFlip":""}`}>
            <div className='front-image tell'>
               <img src="./images/kraven.jpeg" alt="show"  className='tell'/>
               <button className='read-btn' onClick={handleFlip}>Read More</button>
            </div>
            <div className="back-image tell">
              <h2 className='title'>KRAVEN</h2>
              <div className='about'>
               <p className='snip'>Kraven's complex relationship with his ruthless father starts him down a path of vengeance, motivating him to become not only the greatest hunter in the world, but also one of its most feared.</p>
              </div>
              <div className='cast'>
                <p className='snip'>Cast:Aaron Perry Taylor-Johnson,Russell Crowe,Ariana Debose,Alessandro Nivola</p>
              </div>
             
              <div className='return-btn'>
                <button className='read-btn' onClick={handleFlip}>Go Back</button>
              </div>
            </div>
         </div>
         </div> 
    </main>
   </React.Fragment>

    <React.Fragment>
       <main>
        <div className='container'>
         <div  className={`cardless cardses ${glad ? "cardFlip":""}`}>
            <div className='front-image tell'>
               <img src="./images/gladiator2.jpeg" alt="show"  className='tell'/>
               <button className='read-btn' onClick={handleFlyMode}>Read More</button>
            </div>
            <div className="back-image tell">
              <h2 className='title'>GLADIATOR2</h2>
              <div className='about'>
               <p className='snip'>Years after witnessing the death of Maximus at the hands of his uncle, Lucius must enter the Colosseum after the powerful emperors of Rome conquer his home. With rage in his heart and the future of the empire at stake, he looks to the past to find the strength and honor needed to return the glory of Rome to its people..</p>
              </div>
              <div className='cast'>
                <p className='snip'>Cast:Paul Mescal,Pedro Pascal,Denzel Wasshington,Connie Nielsen</p>
              </div>
                  
                <div  className='return-btn'>
                  <button className='read-btn' onClick={handleFlyMode}>Go Back</button>

                </div>
            </div>
         </div>
        </div>
    </main>
  </React.Fragment>

  <React.Fragment>
       <main>
        <div className='container'>
         <div  className={`cardless cardses ${war ? "cardFlip":""}`}>
            <div className='front-image tell'>
               <img src="./images/taipei.jpeg" alt="show"  className='tell'/>
               <button className='read-btn'  onClick={handleWar}>Read More</button>
            </div>
            <div className="back-image tell">
            <h2 className='title'>WEEKEND IN TAIPEI</h2>
              <div className='about'>
               <p className='snip'>A former DEA agent and an ex-undercover operative rekindle their romance during a weekend in Taipei. As they reconnect, they're oblivious to the looming dangers stemming from their past operations.</p>
              </div>
              <div className='cast'>
                <p className='snip'>Cast:Luke Evans,Sung Kang,Gwei Lun-mei,Patrick lee</p>
              </div>
            <div className='return-btn' >
                <button className='read-btn' onClick={handleWar}>Go Back</button>
            </div>
          </div>
         </div>
        </div>
     </main>
     </React.Fragment>
  </div>

  <div className='image-class1'>
    <React.Fragment>
    <main>
      <div className='container'>
      <div  className={`cardless cardses ${city ? "cardFlip":""}`}>
          <div className='front-image tell'>
            <img src="./images/city hunter.jpeg" alt="show" className='tell'/>
            <button  className='read-btn' alt="show" onClick={handleCity}>Read More</button>
          </div>
          <div className="back-image tell">
          <h2 className='title'>CITY HUNTER</h2>
              <div className='about'>
               <p className='snip'>An exceptional marksman and hopeless playboy, private eye Ryo Saeba reluctantly forms an alliance with his late partner's sister to investigate his death.</p>
              </div>
              <div className='cast'>
                <p className='snip'>Cast:Misato Morita,Ryohei Suzuki,Ayame Misaki,Asuka Hanamura</p>
              </div>
            <div className='return-btn'>
              <button className='read-btn' onClick={handleCity}>Go Back</button>
            </div>
          
          </div>
      </div>
      </div> 
  </main>
 </React.Fragment>

  <React.Fragment>
    <main>
      <div className='container'>
      <div  className={`cardless cardses ${moan ? "cardFlip":""}`}>
          <div className='front-image tell'>
            <img src="./images/moana2.jpeg" alt="show" className='tell'/>
            <button className='read-btn' onClick={handleMoan}>Read More</button>
          </div>
          <div className="back-image tell">
          <h2 className='title'>MOANA2</h2>
              <div className='about'>
               <p className='snip'>After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.</p>
              </div>
              <div className='cast'>
                <p className='snip'>Cast:Dwayne Johnson,Nicole Sherzinger,Alan Tudyk,Rose Matafeo</p>
              </div>
              <div className='return-btn'>
                <button className='read-btn' onClick={handleMoan}>Go Back</button>

              </div>
          </div>
      </div>
      </div>
  </main>
</React.Fragment>

<React.Fragment>
    <main>
      <div className='container'>
      <div  className={`cardless cardses ${max ? "cardFlip":""}`}>
          <div className='front-image tell'>
            <img src="./images/mad max .jpeg" alt="show"  className='tell'/>
            <button className='read-btn' onClick={handleMax}>Read More</button>
          </div>
          <div className="back-image tell">
          <h2 className='title'>FURIOSA:MAD MAX SAGA</h2>
              <div className='about'>
               <p className='snip'>Snatched from the Green Place of Many Mothers, young Furiosa gets caught in the crossfire of two tyrannical warlords; as the tyrants fight for dominance, Furiosa soon finds herself in a nonstop battle to make her way home.</p>
              </div>
              <div className='cast'>
                <p className='snip'>Cast:Chris Hemsworth,Elsa Pataky,Tom Burke,Charlee Fraser</p>
              </div>
              <div className='return-btn'>
                <button className='read-btn' onClick={handleMax}>Go Back</button>
              </div>
          </div>
      </div>
      </div>
  </main>
 </React.Fragment>
</div>

  <div className='image-class2'>
    <React.Fragment>
    <main>
    <div className='container'>
      <div  className={`cardless cardses ${venom ? "cardFlip":""}`}>
        <div className='front-image tell'>
            <img src="./images/venom.jpeg" alt="show" className='tell'/>
            <button className='read-btn'  onClick={handleVenom}>Read More</button>
        </div>
        <div className="back-image tell">
        <h2 className='title'>VENOM THE LAST DANCE</h2>
              <div className='about'>
               <p className='snip'>Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world.</p>
              </div>
              <div className='cast'>
                <p className='snip'>Cast:Tom Hardy,Juno Temple,Chiwetel Ejiofor,Pegi Lu</p>
              </div>
          <div className='return-btn'>
            <button className='read-btn' onClick={handleVenom}>Go Back</button>
          </div>
        </div>
      </div>
      </div> 
</main>
</React.Fragment>

<React.Fragment>
    <main>
    <div className='container'>
      <div  className={`cardless cardses ${dune ? "cardFlip":""}`}>
        <div className='front-image tell'>
            <img src="./images/dune part2.jpeg" alt="show" className='tell'/>
            <button  className='read-btn' onClick={handleDune}>Read More</button>
        </div>
        <div className="back-image tell">
        <h2 className='title'>DUNE PART TWO</h2>
              <div className='about'>
               <p className='snip'>Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.</p>
              </div>
              <div className='cast'>
                <p className='snip'>Cast:Austin Butler,Florence pugh,Thimotee Chalamet,Zendaya</p>
              </div>
            <div className='return-btn'>
              <button  className='read-btn' onClick={handleDune}>Go Back</button>

            </div>
        </div>
      </div>
    </div>
</main>
</React.Fragment>

<React.Fragment>
    <main>
    <div className='container'>
      <div  className={`cardless cardses ${pool ? "cardFlip":""}`}>
        <div className='front-image tell'>
            <img src="./images/deadpool and wolverine.jpeg" alt="show" className='tell'/>
            <button className='read-btn' onClick={handlePool}>Read More</button>
        </div>
        <div className="back-image tell">
        <h2 className='title'>DEADPOOL & WOLVERINE</h2>
              <div className='about'>
               <p className='snip'>Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.</p>
              </div>
              <div className='cast'>
                <p className='snip'>Cast:Ryan Reynolds,Hugh Jackman,Leslie uggams,Channing Tatum</p>
              </div>
            <div className='return-btn'>
            <button className='read-btn' onClick={handlePool}>Go Back</button>

            </div>
        </div>
      </div>
    </div>
  </main>
</React.Fragment>
</div>

  <section className='slider'>

  <FontAwesomeIcon className='right-arrow'  icon={faCircleArrowRight} onClick={nextSlide}/>
  <FontAwesomeIcon className='left-arrow'  icon={faCircleArrowLeft}  onClick={prevSlide}/>
    {
    SliderData.map((slides,index)=>{
      return(
      <div className={index===current ? "slide-active":"slide"} key={index}>
        {index===current && (<img src={`/${slides.images}`} alt="show" className='images'/>)}
          
      </div>

      )
      
    })
    }
  </section>

  <div className='footer-container'>
     
     <ul className='link-tags'>
     <li className='nav_item contacts'><Link to="/series">Tv-Series</Link> </li>
     <li className='nav_item contacts'><Link to="/top movies">Top Movies</Link> </li>
     </ul>
     <div className='copy'>
        <div className='code'>
        <p className='reserved'> ©:2024 your Company all Rights Reserved </p>
        </div>
     </div>

  </div>

</div>
    
</div>
  )
}

export default Film
