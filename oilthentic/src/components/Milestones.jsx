import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTotalCount, incrementSum } from '../store/actions/totalSharedAction'
import { FacebookShareCount } from "react-share";
// import Fade from 'react-reveal/Fade';
import { shareFB, shareWA, shareTW, step0, step1, step2, step3, step4, bgWeb7 } from '../assets/index'
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from "react-share";

const Milestones = (props) => {
  const dispatch = useDispatch()
  const { totalShareAll } = useSelector(state => state.totalShared)

  const [milestoneImage, setMileStoneImage] = useState(step0)

  useEffect(() => {
    dispatch(getTotalCount())
  }, [])

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
    // get user ID
      // user ID pernah share twitter?
      // user ID pernah share facebook?
      // user ID pernah share whatsapp?
    e.preventDefault()
    dispatch(incrementSum(socialMedia))
  }

  return (
    <div id="pre-signup" className="merry-font bghalf"
    style={{ backgroundColor: '#E8E3DD',  backgroundImage: `url(${bgWeb7})` }}>
      <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center py-5">
        <div className="block xl:hidden flex justify-center flex-col items-center ">
          <h3 className="purple-text merry-font text-center text-lg font-bold px-10 mt-10">Pencapaian Menuju Lebih Banyak Hadiah</h3>
          <div className="milestone-box w-64 md:w-80 flex justify-center flex-col rounded-3xl bg-white mt-10 h-32 relative">
              <div className="absolute purple-bg rounded-full py-2 px-8 text-2xl text-full text-gray-100 relative merry-font
              share-count flex flex-col items-center text-center mx-auto rounded-xl w-3/4 md:w-3/4">
                <h1>{totalShareAll.toLocaleString()}</h1>
              </div>
              <div className="purple-text flex flex-col text-center text-sm py-10 flex flex-col items-center rounded-xl md:text-base md:font-bold">
                <p className="-mt-5 mb-3">Orang sudah bergabung</p>
                <div className="flex flex-row justify-center px-2 ">
                  {/* <img  src={shareFB} onClick={(e) => increment(e, 'Facebook')} alt="Share Facebook" className="h-8 md:h-10 cursor-pointer" />
                  <img src={shareWA} onClick={(e) =>increment(e, 'WhatsApp')} alt="Share WhatsApp" className="h-8 md:h-10 cursor-pointer"/>
                  <img src={shareTW} onClick={(e) =>increment(e, 'Twitter')} alt="Share Twitter" className="h-8 md:h-10 cursor-pointer twitter-share-button outline-none focus:outline-none"/> */}
                  {/* <FacebookShareCount url={`https://oilthentic-test.web.app`}>
                  {shareCount => <span className="myShareCountWrapper bg-red-200 w-96">{shareCount}</span>}
                  </FacebookShareCount> */}
                   <FacebookShareButton 
                        url={"https://oilthentic-test.web.app"}
                        quote={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}
                        hashtag="#oilthenticday2021">
                        <img src={shareFB} alt="Share Facebook" onClick={(e) => increment(e, 'Facebook')}  className="h-10 cursor-pointer"/>
                      </FacebookShareButton>
                        {/* <a href="http://www.facebook.com/sharer.php?src=sp&u=http%3A%2F%2Fwww.myDomain.com%2Fpath%2F"><img src={shareFB} alt="Share Facebook" className="h-16 cursor-pointer"/></a> */}
                      <WhatsappShareButton 
                        url={"https://oilthentic-test.web.app"}
                        title={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}>
                        <img src={shareWA} alt="Share WhatsApp" onClick={(e) => increment(e, 'WhatsApp')}  className="h-10 cursor-pointer"/>
                      </WhatsappShareButton>
                      <TwitterShareButton 
                        url={"https://oilthentic-test.web.app"}
                        hashtags="#oilthenticday2021"
                        title={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}>
                        <img src={shareTW} alt="Share Twitter" onClick={(e) => increment(e, 'Twitter')} className="h-10 cursor-pointer"/>
                      </TwitterShareButton>
                      {/* <a class="twitter-share-button" onClick={(e) => increment(e, 'Twitter')} target="_blank"  href="https://twitter.com/intent/tweet?text=Jadilah%20bagian%20dari%20gerakan%20ini%20dan%20dapatkan%20promo%20Young%20Living%20https://oilthentic-test.web.app/">
                        <img src={shareTW} alt="Share Twitter" className="h-16 cursor-pointer" />
                      </a> */}
                </div>
              </div>
            </div>
            <img src={milestoneImage} alt="Milestone progress" className="my-2 px-5" style={{width: 'auto' }}/>
            <div className="flex justify-center flex-col items-center mt-4 px-3 w-full">
                <h2 className="purple-text text-lg merry-font text-center font-bold text-base">Syarat dan Ketentuan</h2>
                  <div className="flex flex-row flex-wrap poppins-font purple-text my-5">
                    <div className="flex flex-col w-1/2 syarat px-2 text-justify">
                      <ul className="list-disc text-xs m-2">
                        <li>Anda harus mengirim form yang tersedia terlebih dahulu sebelum dapat share gerakan ini. </li>
                        <li>Jumlah total akan bertambah setiap kali orang share di social media. Satu orang hanya bisa terhitung satu kali dalam jumlah total share. </li>
                      </ul>
                    </div>
                    <div className="flex flex-col w-1/2 syarat px-2 text-justify">
                      <ul className="list-disc text-xs m-2">
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
              <img src={milestoneImage} className="" alt="Milestone progress" style={{minHeight: '100vh', width: 'auto' }}/>
            </div>
            <div className="w-1/2 flex justify-center flex-col items-center">
              <div className="flex justify-center flex-col items-center w-full">
                <h3 className="purple-text merry-font text-center text-3xl my-10 font-bold px-10">Pencapaian Menuju Lebih Banyak Hadiah</h3>
                <div className="milestone-box w-100 flex justify-center flex-col rounded-3xl bg-white mt-10 h-64 relative">
                    <div className="absolute purple-bg rounded-full py-2 px-8 text-2xl text-full text-gray-100 relative merry-font
                    share-count flex flex-col items-center text-center mx-auto rounded-xl w-3/4 -top-5 ">
                      <h1 className="text-4xl">{totalShareAll.toLocaleString()}</h1>
                    </div>
                    <div className="purple-text flex flex-col text-center text-sm py-10 flex flex-col items-center rounded-xl md:text-base md:font-bold">
                      <p className="-mt- mb-3 text-2xl">Orang sudah bergabung</p>
                      <div className="flex flex-row justify-center px-2 mt-5">
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
                        hashtags="#oilthenticday2021"
                        title={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}>
                        <img src={shareTW} alt="Share Twitter" className="h-16 cursor-pointer" onClick={(e) => increment(e, 'Twitter')}/>
                      </TwitterShareButton>
                        {/* <a class="twitter-share-button" onClick={(e) => increment(e, 'Twitter')} target="_blank" href="https://twitter.com/intent/tweet?text=Jadilah%20bagian%20dari%20gerakan%20ini%20dan%20dapatkan%20promo%20Young%20Living%20https://oilthentic-test.web.app/"><img src={shareTW} alt="Share Twitter" className="h-16 cursor-pointer"/></a> */}
                      </div>
                    </div>
                  </div>
              </div>
              {/* DIVIDER */}
              <div className="flex justify-center my-10 flex-col items-center mt-40 px-20 w-full">
                <h2 className="purple-text text-lg merry-font text-center font-bold text-xl">Syarat dan Ketentuan</h2>
                  <div className="flex flex-row flex-wrap poppins-font purple-text my-5">
                    <div className="flex flex-col w-1/2 syarat px-2 text-justify">
                      <ul className="list-disc text-base m-2">
                        <li>Anda harus mengirim form yang tersedia terlebih dahulu sebelum dapat share gerakan ini. </li>
                        <li>Jumlah total akan bertambah setiap kali orang share di social media. Satu orang hanya bisa terhitung satu kali dalam jumlah total share. </li>
                      </ul>
                    </div>
                    <div className="flex flex-col w-1/2 syarat px-2 text-justify">
                      <ul className="list-disc text-base m-2">
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
