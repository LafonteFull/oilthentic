import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTotalCount, incrementSum } from '../store/actions/totalSharedAction'
import { FacebookShareCount } from "react-share";
import { LazyLoadImage } from 'react-lazy-load-image-component'
// import Fade from 'react-reveal/Fade';
import { shareFB, shareWA, shareTW, step0, step1, step2, step3, step4, bgWeb7 } from '../assets/index'
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from "react-share";

const Milestones = (props) => {
  const dispatch = useDispatch()
  const { totalShareAll } = useSelector(state => state.totalShared)
  const [filledForm, setFilledForm] = useState(false)
  const access_token = localStorage.getItem('access_token')
  const [twitter, setTwitter] = useState(false)
  const [whatsApp, setWhatApp] = useState(false)
  const [faceboook, setFaceboook] = useState(false)
  const [milestoneImage, setMileStoneImage] = useState(step0)

  useEffect(() => {
    dispatch(getTotalCount())
  }, [])

  useEffect(() => {
    if (access_token) setFilledForm(true)
  }, [access_token])

  useEffect(() => {
    if (totalShareAll <  100000) {
      setMileStoneImage(step0)
    } else if (totalShareAll <  200000) {
      setMileStoneImage(step1)
    } else if (totalShareAll <  300000) {
      setMileStoneImage(step2)
    } else if (totalShareAll <  400000) {
      setMileStoneImage(step3)
    } else if (totalShareAll >=  400000) {
      setMileStoneImage(step4)
    } else {
      setMileStoneImage(step0)
    }
  }, [totalShareAll])
  
  const increment = (e, socialMedia) => {
    e.preventDefault()
    if (socialMedia == 'Facebook' && !faceboook) {
      dispatch(incrementSum(socialMedia))
      setFaceboook(true)
    } else if (socialMedia == 'WhatsApp' && !whatsApp) {
      dispatch(incrementSum(socialMedia))
      setWhatApp(true)
    } else if (socialMedia == 'Twitter' && !twitter) {
      dispatch(incrementSum(socialMedia))
      setTwitter(true)
    }
  }

  return (
    <div id="pre-signup" className="merry-font bghalf"
    style={{ backgroundColor: '#E8E3DD',  backgroundImage: `url(${bgWeb7})` }}>
      <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center py-5 md:py-10">
        <div className="block xl:hidden flex justify-center flex-col items-center ">
          <h3 className="purple-text merry-font text-center text-lg font-bold px-10 mt-5 md:mb-10 md:text-3xl md:mt-10">Pencapaian Menuju Lebih Banyak Hadiah</h3>
          <div className="milestone-box w-64 md:w-96 flex justify-center flex-col rounded-3xl bg-white mt-10 h-32 md:h-44 relative">
              <div className="absolute purple-bg rounded-full py-2 px-8 text-2xl md:text-3xl text-full text-gray-100 relative merry-font
              share-count flex flex-col items-center text-center mx-auto rounded-xl w-3/4 md:w-3/4">
                <h1>{totalShareAll.toLocaleString()}</h1>
              </div>
              <div className="purple-text flex flex-col text-center text-sm py-10 flex flex-col items-center rounded-xl md:text-2xl md:font-bold">
                <p className="-mt-5 mb-3">Orang sudah bergabung</p>
                <div className="flex flex-row justify-center px-2 ">
                  { !filledForm && ( <>
                    <a href="#pre-signup"><img src={shareFB} alt="Share Facebook" className="cursor-pointer w-full"/></a>
                    <a href="#pre-signup"><img src={shareWA} alt="Share WhatsApp" className="cursor-pointer w-full"/></a>
                    <a href="#pre-signup"><img src={shareTW} alt="Share Twitter" className="cursor-pointer w-full"/></a>
                    </> )
                  }
                  { filledForm && ( <><FacebookShareButton 
                    url={"https://oilthentic-test.web.app"}
                    quote={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}
                    hashtag="#oilthenticday2021">
                    <img src={shareFB} alt="Share Facebook" onClick={(e) => increment(e, 'Facebook')}  className="cursor-pointer w-full"/>
                  </FacebookShareButton>
                  <WhatsappShareButton 
                    url={"https://oilthentic-test.web.app"}
                    title={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}>
                    <img src={shareWA} alt="Share WhatsApp" onClick={(e) => increment(e, 'WhatsApp')}  className="cursor-pointer w-full"/>
                  </WhatsappShareButton>
                  <TwitterShareButton 
                    url={"https://oilthentic-test.web.app"}
                    hashtag="#oilthenticday2021"
                    title={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}>
                    <img src={shareTW} alt="Share Twitter" onClick={(e) => increment(e, 'Twitter')} className="cursor-pointer w-full"/>
                  </TwitterShareButton></> )
                  }
                </div>
              </div>
            </div>
            <LazyLoadImage
              effect="opacity"
              src={milestoneImage} alt="Milestone progress" className="my-2 px-5" style={{width: 'auto' }} />
            {/* <img src={milestoneImage} alt="Milestone progress" className="my-2 px-5" style={{width: 'auto' }}/> */}
            <div className="flex justify-center flex-col items-center mt-4 px-3 w-full">
                <h2 className="purple-text merry-font text-center font-bold text-base md:text-2xl">Syarat dan Ketentuan</h2>
                  <div className="flex flex-row flex-wrap poppins-font purple-text my-5">
                    <div className="flex flex-col w-1/2 syarat px-2 text-justify md:px-5">
                      <ul className="list-disc text-xs m-2 md:text-base">
                        <li>Anda harus mengirim form yang tersedia terlebih dahulu sebelum dapat share gerakan ini. </li>
                        <li>Jumlah total akan bertambah setiap kali orang share di social media. Satu orang hanya bisa terhitung satu kali dalam jumlah total share. </li>
                      </ul>
                    </div>
                    <div className="flex flex-col w-1/2 syarat px-2 text-justify md:px-5">
                      <ul className="list-disc text-xs m-2 md:text-base">
                        <li>Anda tidak akan ditarik biaya apapun pada saat pengisian form.  </li>
                        <li>Hadiah bisa didapatkan setiap pembelian PEP Young Living Indonesia di acara Oilthentic Day 2021 tanggal 25 & 26 April 2021. </li>
                      </ul>
                    </div>
                    </div>
              </div>
        </div>
        {/* WEB VERSION */}
        <div className="w-full py-5 hidden xl:block">
          <div className="flex flex-row w-full">
            <div className=" py-10 px-20">
            <LazyLoadImage
              effect="opacity"
              src={milestoneImage} className="" alt="Milestone progress" style={{minHeight: 'auto', maxWidth: '40vw' }}/>
            </div>
            <div className="w-1/2 flex justify-center flex-col items-center">
              <div className="flex justify-center flex-col items-center w-full">
                <h3 className="purple-text merry-font text-center text-2xl my-10 font-bold px-10 lg:text-4xl leading-relaxed">Pencapaian Menuju Lebih Banyak Hadiah</h3>
                <div className="milestone-box w-100 flex justify-center flex-col rounded-3xl bg-white mt-10 h-64 relative">
                    <div className="absolute purple-bg rounded-full py-2 px-8 text-2xl text-full text-gray-100 relative merry-font
                    share-count flex flex-col items-center text-center mx-auto rounded-xl w-3/4 -top-5 ">
                      <h1 className="text-3xl lg:text-6xl">{totalShareAll.toLocaleString()}</h1>
                    </div>
                    <div className="purple-text flex flex-col text-center text-sm py-10 flex flex-col items-center rounded-xl md:text-base md:font-bold">
                      <p className="-mt- mb-3 text-2xl lg:text-3xl">Orang sudah bergabung</p>
                      <div className="flex flex-row justify-center px-2 mt-5">
                      { !filledForm && ( <>
                        <a href="#pre-signup"><img src={shareFB} alt="Share Facebook" className="cursor-pointer h-16"/></a>
                        <a href="#pre-signup"><img src={shareWA} alt="Share WhatsApp" className="cursor-pointer h-16"/></a>
                        <a href="#pre-signup"><img src={shareTW} alt="Share Twitter" className="cursor-pointer h-16"/></a>
                        </> )
                      }
                      { filledForm && <> 
                        <FacebookShareButton 
                          url={"https://oilthentic-test.web.app"}
                          quote={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}
                          hashtag="#oilthenticday2021">
                          <img src={shareFB} alt="Share Facebook" className="h-16 cursor-pointer" onClick={(e) => increment(e, 'Facebook')}/>
                        </FacebookShareButton>
                          {/* <a href="http://www.facebook.com/sharer.php?src=sp&u=http%3A%2F%2Fwww.myDomain.com%2Fpath%2F"><img src={shareFB} alt="Share Facebook" className="h-16 cursor-pointer"/></a> */}
                        <WhatsappShareButton 
                          url={"https://oilthentic-test.web.app"}
                          title={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}>
                          <img src={shareWA} alt="Share WhatsApp" className="h-16 cursor-pointer" onClick={(e) => increment(e, 'WhatsApp')}/>
                        </WhatsappShareButton>
                        <TwitterShareButton 
                          url={"https://oilthentic-test.web.app"}
                          hashtag="#oilthenticday2021"
                          title={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}>
                          <img src={shareTW} alt="Share Twitter" className="h-16 cursor-pointer" onClick={(e) => increment(e, 'Twitter')} />
                        </TwitterShareButton>
                        </> }
                      </div>
                    </div>
                  </div>
              </div>
              {/* DIVIDER */}
              <div className="flex justify-center my-10 flex-col items-center mt-40 px-20 w-full">
                <h2 className="purple-text text-lg merry-font text-center font-bold text-sm md:text-xl">Syarat dan Ketentuan</h2>
                  <div className="flex flex-row flex-wrap poppins-font purple-text my-5 text-sm m-2 lg:text-base">
                    <div className="flex flex-col syarat px-2 text-justify">
                      <ul className="list-disc mx-2">
                        <li>Anda harus mengirim form yang tersedia terlebih dahulu sebelum dapat share gerakan ini. </li>
                        <li>Jumlah total akan bertambah setiap kali orang share di social media. Satu orang hanya bisa terhitung satu kali dalam jumlah total share. </li>
                      </ul>
                    </div>
                    <div className="flex flex-col syarat px-2 text-justify">
                      <ul className="list-disc mx-2">
                        <li>Anda tidak akan ditarik biaya apapun pada saat pengisian form.  </li>
                        <li>Hadiah bisa didapatkan setiap pembelian PEP Young Living Indonesia di acara Oilthentic Day 2021 tanggal 25 & 26 April 2021. </li>
                      </ul>
                    </div>
                    </div>
              </div>
            </div>
            {/* END of section web syarat dan number milestone */}
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Milestones
