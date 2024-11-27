import React, { Component } from 'react'
import '../style/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FaceboookIcon from '@mui/icons-material/Facebook'
import YoutubeIcon from '@mui/icons-material/YouTube'

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <TwitterIcon/>
            <FaceboookIcon/>
            <YoutubeIcon/>
          <p>
            &copy; 2024 Anson's Burger Place
          </p>
        </div>
      </div>
    )
  }
}

export default Footer
