import React from 'react'
import './main.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import image from '../foto.png'
import pp from '../pp.png'
import { faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import banner1 from '../banner1.jpg'
import banner2 from '../banner2.jpg'
import banner3 from '../banner3.jpg'

const Main = () => {
    const [text] = useTypewriter({
        words: ['Ciessna Putra Andika', 'From Indonesia', 'Programmer'],
        loop: {},
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    const [txt] = useTypewriter({
        words: ['More Information!'],
        loop: 1,
        typeSpeed: 50,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })

  return (
    <main>
    <div className='containerMain'>
        <div className="wraper">
                <h2 className='hi' style={{color: 'white'}}>Hello, Everyone</h2>
                <h1 className='name'>
                    I'm <span>{text}</span>
                    <span style={{color: 'rgb(255, 174, 0)'}}><Cursor /></span>
                </h1>
                <div className='hr'>
                </div>
                <p className='txt'><b>I am <span style={{color: 'rgb(255, 174, 0)'}}>Ciessna Putra Andika</span>, I come from <span style={{color: 'rgb(255, 174, 0)'}}>Indonesia</span>, I'm a student and my major is <br /><span style={{color: 'rgb(255, 174, 0)'}}>Software Engineering.</span></b></p>
                <a href="" className='button'><button><b>My Info</b></button></a>
                <h3 className='hua' style={{color: 'rgb(255, 174, 0)', textAlign: 'center'}}>{txt} <br />V</h3>
            <div className="main">
                <div className='foto'>
                </div>
                <div className='dm'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </div>

    <div className='cont-about'>
        <div className='wrapp'>
            <div className="about">
                <h1 style={{textAlign: 'center', color: 'rgb(255, 174, 0)'}}>About Me!</h1>
                <div className='garis'>

                </div>
                <h2 className='sub-judul'>HALLO, I'M A CIESSNA PUTRA ANDIKA</h2>
                <p className='tentang'>I am a <span style={{color: 'rgb(255, 174, 0)'}}><b>Junior Programmer</b></span>, I have studied as a programmer for <span style={{color: 'rgb(255, 174, 0)'}}><b>2 <br/>years.</b></span> I learned all this from school in 10-11th grade of vocational <br/>school, I have studied <span style={{color: 'rgb(255, 174, 0)'}}><b>HTML, CSS, JavaScript, REACT JS,</b></span> and i also<br /> studied <span style={{color: 'rgb(255, 174, 0)'}}><b>PHP</b></span> a little bit. If you're curious, I am a student from the<br /> <span style={{color: 'rgb(255, 174, 0)'}}><b>LETRIS INDONESIA 2</b></span> Vocational School.</p>

                <div className="pp">
                    <img src={pp} alt="" />
                </div>
            </div>
        </div>
    </div>

    <div className='cont-skill'>
        <div className='wrapper'>
            <div className='box'>
                <h1 className='subJudul' style={{textAlign: 'center', color: 'white'}}>Skills I<span style={{color: 'rgb(255, 174,0)'}}> "Learned"</span></h1>
                <p className='siap2'>Programming Languages That I Learn : </p>
                <button className='liat'><b>Lihat Semua</b></button>

                <a href=""><FontAwesomeIcon icon={faHtml5} className='skill' style={{color: 'orange'}}/></a>
                <a href=""><FontAwesomeIcon icon={faCss3} className='skill' style={{color: 'blue'}}/></a>
                <a href=""><FontAwesomeIcon icon={faJs} className='skill' style={{color: 'yellow'}}/></a>
                <a href=""><FontAwesomeIcon icon={faReact} className='skill' style={{color: 'aqua'}}/></a>
            </div>
        </div>
    </div>

    <div>
        <h1 className='hoh' style={{textAlign: 'center'}}>Project OnGoing!</h1>
    </div>

    <div className="cont-blog">
    <div className="containerBlog">
            <div className='blog'>
              <div className='banner'>
                <img src={banner1} alt="" />
                <ul className='tools'>
                  <h3>
                    <span>By <b>Team RPL25</b></span>
                  </h3>
                </ul>
                <ul className='judul'>
                  <h1>Project UI/UX!</h1>
                </ul>
                <ul className='btn'>
                  <a href=""><button>Info</button></a>
                </ul>
              </div>
            </div>

            <div className='blog'>
              <div className='banner'>
                <img src={banner2} alt="" />
                <ul className='tools'>
                  <h3>
                    <span>By <b>Ciessna Putra Andika</b></span>
                  </h3>
                </ul>
                <ul className='judul'>
                  <h1>Project Clone Web!</h1>
                </ul>
                <ul className='btn'>
                  <a href=""><button>Info</button></a>
                </ul>
              </div>
            </div>

            <div className='blog'>
              <div className='banner'>
                <img src={banner3} alt="" />
                <ul className='tools'>
                  <h3>
                    <span>By <b>Ciessna Putra Andika</b></span>
                  </h3>
                </ul>
                <ul className='judul'>
                  <h1>Project Portfolio!</h1>
                </ul>
                <ul className='btn'>
                  <a href=""><button>Info</button></a>
                </ul>
              </div>
            </div>
        </div>
        </div>
    </main>
  )
}

export default Main