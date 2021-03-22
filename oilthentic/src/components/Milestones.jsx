import React from 'react'
import Fade from 'react-reveal/Fade';
import imageplaceholder from '../assets/Milestone.png'
import facebook from '../assets/SocialMedia/FB.png'
import twitter from '../assets/SocialMedia/TW.png'
import instagram from '../assets/SocialMedia/IG.png'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share';

import {
  FacebookShareCount,
  TwitterShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
} from 'react-share';

const Milestones = () => {
  const shareUrl = 'https://www.kompas.com/tren/read/2021/03/17/103816765/6-vaksin-yang-digunakan-untuk-vaksinasi-virus-corona-di-indonesia'
  return (
    <div className="w-full p-10 flex justify-center items-center flex-col">
      <Fade top duration={1000}>
        <h2 className="text-4xl font-extrabold mb-5">SHAREDLINK MILESTONE</h2>
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl yellow-bg p-10 rounded-xl m-4">Current share: <br /> <span className="font-extrabold text-gray-900 text-5xl">289.760</span>
          <FacebookIcon size={32} round={true} />
          <p>HALOO</p>
          <FacebookShareCount url={shareUrl} className="bg-white" style={{width: '300px', height: '300px'}}/>
          </div>
        </div>
        <p className="font-bold text-xl">
            Share now to earn rewards!</p>
          <div className="flex justify-around mt-2 items-center">
            <img className="h-10 w-10 mx-5" src={facebook} alt="Facebook logo"/>
            <img className="h-10 w-10 mx-5" src={twitter} alt="twitter logo"/>
            <img className="h-10 w-10 mx-5" src={instagram} alt="instagram logo"/>
          </div>
          <p className="name">Facebook</p>
          <p data-sc-fb="http://www.cssscript.com"></p>

          <p className="name">Twitter</p>
          <p data-sc-tw="http://www.cssscript.com"></p>

          <p className="name">Google+</p>
          <p data-sc-gp="http://www.cssscript.com"></p>

          <p className="name">Pocket</p>
          <p data-sc-pk="http://www.cssscript.com"></p>

          <p className="name">Pinterest</p>
          <p data-sc-pr="https://www.google.com/"></p>

          <p className="name">Linkedin</p>
          <p data-sc-ln="https://www.yahoo.com/"></p>
        <img src={imageplaceholder} alt="Milestone"
        className="w-full md:w-3/4 lg:w-3/4 mt-10"
        style={{}}/>
      </Fade>
    </div>
  )
}

export default Milestones
