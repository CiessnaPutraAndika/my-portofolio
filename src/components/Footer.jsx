import React from 'react'
import './footer.css'
import footer from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='containerFooter'>
        <footer className="footer">
            <div className='logo'> 
              <img src={footer} alt="" />
            </div>
            <h2 style={{color: 'white'}}>All about <span style={{color: 'rgb(255, 174, 0)'}}>Ciessna Putra Andika</span> infortmation At Here!</h2>
            <div className='row'>
                <div className='footerRow'>
                <ul>
                <h3 className='h5' style={{color: 'white'}}>My Contact!</h3>
                <li><a href=""><FontAwesomeIcon icon={faEnvelope} className='col'/> <span style={{color: 'white'}}>ㅤciessnamax@gmail.com</span></a></li>
                <li><a href=""><FontAwesomeIcon icon={faInstagram} className='col'/> <span style={{color: 'white'}}>ㅤ@cirss_</span></a></li>
                </ul>
                </div>
            <div className='copyright'>
                <p style={{color: 'white'}}> Copyright By <span style={{color: 'rgb(255, 174, 0)'}}>&copy; Ciessna Putra Andika</span> | Kebijakan Privasi | Ketentuan Pribadi</p>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer