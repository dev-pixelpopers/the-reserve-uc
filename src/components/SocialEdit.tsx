import { FaTiktok, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function SocialEdit() {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center items-center px-[5%] lg:px-[3.5%] py-[80px] lg:py-[5.5%] gap-[40px] lg:gap-[20px] xl:gap-[25px] 2xl:gap-[31px]'>
            <div className='w-full lg:w-[30%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>

                <h2 className='font-iconscript capitalize text-[clamp(42px,7vw,70px)] leading-[1.1] lg:leading-[100px] lg:-mb-4 text-[#FAF1E1]'>
                    the
                </h2>

                <h2 className='font-midland capitalize text-[clamp(30px,3vw,45px)] leading-[1.1] lg:leading-[80px] text-[#FAF1E1]'>
                    social edit
                </h2>
            </div>
            <div className='w-full lg:w-[70%] flex flex-col lg:flex-row justify-center items-stretch gap-[30px] lg:gap-[10px] xl:gap-[15px] 2xl:gap-[31px]'>
                <Link href="https://www.tiktok.com/@thereserveuc?_r=1&_t=ZS-96YPoMhtm8V" target='_blank' className='w-full lg:w-[51%] flex flex-col justify-start items-start rounded-[26px] bg-[#202020] py-[14px] gap-[20px] lg:h-fit'>
                    <div className='w-full flex flex-row justify-center items-center gap-5 px-[5%] lg:px-[40px]'>
                        <div>
                            <FaTiktok size={25} className='text-white' />
                        </div>
                        <div className='w-full flex flex-row justify-center items-center gap-5'>
                            <p className='text-[clamp(14px,2vw,16px)] text-[#FAF4ED]'>
                                Following
                            </p>

                            <p className='text-[clamp(14px,2vw,16px)] font-bold text-[#FAF4ED]'>
                                For You
                            </p>
                        </div>
                        <div />
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-5 pl-[5%] pr-[2%] lg:pl-[40px] lg:pr-[5px]'>
                        <div className='w-full flex flex-row justify-between items-center gap-[10px]'>
                            <div className='w-[80%] flex flex-col 2xl:gap-5 lg:gap-3'>

                                <img
                                    src="/images/tiktok-img.png"
                                    className='h-[420px] sm:h-[48vh] w-full rounded-[27px] object-cover'
                                    alt=""
                                />

                                <div className='flex flex-col justify-start items-start gap-2'>
                                    <p className='text-[clamp(14px,2vw,16px)] text-[#FAF4ED]'>
                                        @thereserveu
                                    </p>

                                    <p className='text-[clamp(14px,2vw,16px)] text-[#FAF4ED]'>
                                        There were so many people that had...
                                    </p>

                                    <p className='text-[clamp(14px,2vw,16px)] text-[#FAF4ED]'>
                                        #tags
                                    </p>

                                    <span className='flex flex-row gap-2 text-[clamp(14px,2vw,16px)] text-white'>
                                        <img
                                            src="/images/tiktok-music-3.png"
                                            className='w-[15px] object-contain'
                                            alt=""
                                        />
                                        Song
                                    </span>
                                </div>
                            </div>
                            <div className="w-[20%] h-full flex flex-col justify-end items-center gap-[20px] lg:gap-[clamp(20px,2.083vw,40px)]">
                                <img className="w-[clamp(42px,3.385vw,65px)]" alt="" src="/images/tiktok-user.png" />
                                <img className="w-[clamp(42px,3.385vw,65px)]" alt="" src="/images/tiktok-heart.png" />
                                <img className="w-[clamp(42px,3.385vw,65px)]" alt="" src="/images/tiktok-comment.png" />
                                <img className="w-[clamp(42px,3.385vw,65px)]" alt="" src="/images/tiktok-share.png" />
                                <img className="w-[clamp(42px,3.385vw,65px)]" alt="" src="/images/tiktok-music.png" />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="https://www.instagram.com/thereserveuc?igsh=bjAwbTg1d21wcHN2" target="_blank" className='w-full lg:w-[49%] flex flex-col justify-start items-start rounded-[26px] bg-white py-5 px-5 gap-5'>
                    <div className='w-full flex flex-row justify-start items-center gap-2'>

                        <img
                            src="/images/instagram-heading.png"
                            className='w-[90px] lg:w-25'
                            alt=""
                        />
                        <FaInstagram
                            size={22}
                            className='lg:w-[25px] lg:h-[25px]'
                        />
                    </div>
                    <img
                        src="/images/instagram.png"
                        className='h-[420px] sm:h-[48vh] w-full rounded-[27px] object-cover'
                        alt=""
                    />
                    <div className="w-full flex flex-row justify-between gap-0">

                        <div className='flex flex-row justify-start gap-4'>

                            <img
                                src="/images/instagram-liked.png"
                                className='w-5 lg:w-6.5 object-contain'
                                alt=""
                            />

                            <img
                                src="/images/instagram-comment.png"
                                className='w-5 lg:w-6.5 object-contain'
                                alt=""
                            />

                            <img
                                src="/images/instagram-share.png"
                                className='w-5 lg:w-6.5 object-contain'
                                alt=""
                            />
                        </div>

                        <div>
                            <img
                                src="/images/instagram-save.png"
                                className='w-5 lg:w-6.5 object-contain'
                                alt=""
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}