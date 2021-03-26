import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTotalCount } from '../store/actions/totalSharedAction'
// import Fade from 'react-reveal/Fade';
import { shareFB, shareWA, shareTW, step0, step1, step2, step3, step4, bgWeb7 } from '../assets/index'
import { FacebookShareButton, WhatsappShareButton } from "react-share";

const Milestones = (props) => {
  const dispatch = useDispatch()
  const { totalShareAll } = useSelector(state => state.totalShared)

  const [milestoneImage, setMileStoneImage] = useState(step0)
  console.log(milestoneImage, totalShareAll, '<<<< here');

  useEffect(() => {
    dispatch(getTotalCount())

    switch(totalShareAll) {
      case (totalShareAll <  100000):
        setMileStoneImage(step0)
        console.log('step 1');
        break
      case (totalShareAll <  200000):
        setMileStoneImage(step1)
        console.log('step 2');
        break
      case (totalShareAll <  300000):
        setMileStoneImage(step2)
        break
      case (totalShareAll <  400000):
        setMileStoneImage(step3)
        break
      case (totalShareAll >=  400000):
        setMileStoneImage(step4)
        break
      default:
        console.log('step default');
        setMileStoneImage(step0)
    }
  }, [totalShareAll])

  return (
    <div id="pre-signup" className="merry-font bghalf"
    style={{ backgroundColor: '#E8E3DD',  backgroundImage: `url(${bgWeb7})` }}>
      <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center py-5">
        <div className="block xl:hidden flex justify-center flex-col items-center ">
          <h3 className="purple-text merry-font text-center text-lg font-bold px-10 mt-10">Pencapaian Menuju Lebih Banyak Hadiah</h3>
          <div className="milestone-box w-64 md:w-80 flex justify-center flex-col rounded-3xl bg-white mt-10 h-32 relative">
              <div className="absolute purple-bg rounded-full py-2 px-8 text-2xl text-full text-gray-100 relative merry-font
              share-count flex flex-col items-center text-center mx-auto rounded-xl w-3/4 md:w-3/4">
                <h1>123,000</h1>
              </div>
              <div className="purple-text flex flex-col text-center text-sm py-10 flex flex-col items-center rounded-xl md:text-base md:font-bold">
                <p className="-mt-5 mb-3">Orang sudah bergabung</p>
                <div className="flex flex-row justify-center px-2 ">
                  <img src={shareFB} alt="Share Facebook" className="h-8 md:h-10 cursor-pointer"/>
                  <img src={shareWA} alt="Share WhatsApp" className="h-8 md:h-10 cursor-pointer"/>
                  <img src={shareTW} alt="Share Twitter" className="h-8 md:h-10 cursor-pointer twitter-share-button outline-none focus:outline-none"/>
                </div>
              </div>
            </div>
            <img src={milestoneImage} alt="Milestone progress" className="my-2 relative left-10" style={{width: 'auto' }}/>
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
                      <h1 className="text-4xl">123,000</h1>
                    </div>
                    <div className="purple-text flex flex-col text-center text-sm py-10 flex flex-col items-center rounded-xl md:text-base md:font-bold">
                      <p className="-mt- mb-3 text-2xl">Orang sudah bergabung</p>
                      <div className="flex flex-row justify-center px-2 mt-5">
                      <FacebookShareButton 
                        url={"https://oilthentic-test.web.app"}
                        quote={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}
                        hashtag="#oilthenticday2021">
                        <img src={shareFB} alt="Share Facebook" className="h-16 cursor-pointer"/>
                      </FacebookShareButton>
                        {/* <a href="http://www.facebook.com/sharer.php?src=sp&u=http%3A%2F%2Fwww.myDomain.com%2Fpath%2F"><img src={shareFB} alt="Share Facebook" className="h-16 cursor-pointer"/></a> */}
                      <WhatsappShareButton 
                        url={"https://oilthentic-test.web.app/"}
                        title={"Jadilah bagian dari gerakan ini dan dapatkan promo Young Living"}>
                        <img src={shareWA} alt="Share WhatsApp" className="h-16 cursor-pointer"/>
                      </WhatsappShareButton>
                        <a class="twitter-share-button" target="_blank" href="https://twitter.com/intent/tweet?text=Jadilah%20bagian%20dari%20gerakan%20ini%20dan%20dapatkan%20promo%20Young%20Living%20https://oilthentic-test.web.app/"><img src={shareTW} alt="Share Twitter" className="h-16 cursor-pointer"/></a>
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
      {/* <div className="h-full bg-center flex justify-center items-center" > */}
    {/* <div className="w-screen merry-font h-screen flex flex-col"
    style={{ backgroundColor: '#E8E3DD' }}> */}
    {/* <div className="flex md:flex-row lg:flex-row flex-col">
      <div className="px-5 flex flex-col items-center md:w-1/2 ">
        <div className="flex flex-col lg:absolute milestone-placement justify-center items-center">
          <h3 className="purple-text merry-font text-center text-xl md:text-3xl font-bold px-10 py-10">Pencapaian Menuju Lebih Banyak Hadiah</h3> */}
          {/* MILESTONE NUMBER */}
          {/* <div className="milestone-box w-64 md:w-80 flex justify-center flex-col rounded-3xl bg-white mt-10 h-36 relative">
            <div className="absolute purple-bg rounded-full py-2 px-8 text-2xl text-full text-gray-100 relative merry-font
            share-count top-2 flex flex-col items-center text-center mx-auto rounded-xl w-3/4 md:w-3/4">
              <h1>123,000</h1>
            </div>
            <div className="purple-text flex flex-col text-center text-sm py-10 flex flex-col items-center rounded-xl md:text-base md:font-bold">
              <p className="-mt-5 mb-3">Orang sudah bergabung</p>
              <div className="flex flex-row justify-center px-2 ">
                <img src={shareFB} alt="Share Facebook" className="h-8 md:h-10 cursor-pointer"/>
                <img src={shareWA} alt="Share WhatsApp" className="h-8 md:h-10 cursor-pointer"/>
                <img src={shareTW} alt="Share Twitter" className="h-8 md:h-10 cursor-pointer"/>
              </div>
            </div>
          </div>
        </div> */}
        {/* END OF MILESTONE NUMBER */}
      {/* </div> */}
      {/* <div className="min-w-screen h-full bg-center bg-cover flex lg:flex-row md:flex-row sm:flex-col justify-center"
        style={{ backgroundImage: `url(${bgWeb7})` , backgroundSize: 'cover' }} > */}
          {/* <img src={step2} className="" style={{ objectFit: 'cover' }}/>
          <div className="flex flex-col relative md:bottom-80 px-5 md:w-1/2 md:self-end" >
            <h2 className="purple-text text-lg merry-font text-center font-bold md:text-3xl">Syarat dan Ketentuan</h2>
            <div className="flex flex-row flex-wrap poppins-font purple-text my-5"
            style={{fontSize: '.5rem'}}>
              <div className="flex flex-col w-1/2 syarat px-2 text-justify">
                <ul className="list-disc md:text-base m-2">
                  <li>Anda harus mengirim form yang tersedia terlebih dahulu sebelum dapat share gerakan ini. </li>
                  <li>Jumlah total akan bertambah setiap kali orang share di social media. Satu orang hanya bisa terhitung satu kali dalam jumlah total share. </li>
                </ul>
              </div>
              <div className="flex flex-col w-1/2 syarat px-2 text-justify">
                <ul className="list-disc md:text-base m-2">
                  <li>Anda tidak akan ditarik biaya apapun pada saat pengisian form.  </li>
                  <li>Hadiah bisa didapatkan setiap pembelian PEP Young Living Indonesia di acara Oilthentic Day 2021 tanggal 25 & 26 April 2021. </li>
                </ul>
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* </div> */}
    </div> 
  )
}

export default Milestones
