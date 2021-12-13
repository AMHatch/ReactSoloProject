import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa"
import { FaBootstrap} from "react-icons/fa"
import { FaGithubSquare} from "react-icons/fa"
import { FaGitAlt} from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiMaterialui } from "react-icons/si"




function About() {
    return (
        <>
        <div className="container  mt-5 text-kombu">
        <div className='mt-5 mb-5'> &nbsp;</div>
        <div className="row">
            <div className="col-12 ">
                <div className="row d-flex justify-content-center ">
                    <div className="col-12 d-flex justify-content-center">
                        <Card className="text-kombu">
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;Nicks Boots React Project&nbsp;
                            </CardContent>
                        </Card>
                    </div>
                    <div className='mt-3 mb-3'> &nbsp;</div>
                    <div className="col-sm-12 col-lg-6 ">
                        <Card className="text-kombu mb-5 ">
                            <CardContent className='d-flex align-items-center justify-content-center text-center text-kombu '>
                            
                                Nicks Boots is a handmade boot manufacturer in Spokane, Wa. <br />
                                Nicks Boots Official Links Below
                                </CardContent>
                                <CardContent className='text-kombu d-flex justify-content-center align-items-center'>
                                

                                <ul className='list d-flex d-inline ' >
                                    <li><a className='link text-kombu '  href="https://nicksboots.com/" target="_blank" rel="noreferrer"><WebIcon sx={{fontSize:'50px'}}/>  </a></li>
                                    <li><a className='link text-kombu' href="https://www.youtube.com/channel/UCvCF7zgsHhUlbqQ6MDHEgOA" target="_blank" rel="noreferrer"><YouTubeIcon sx={{fontSize:'50px'}}/></a></li>
                                    <li><a className='link text-kombu' href="https://www.instagram.com/nickshandmadeboots/" target="_blank" rel="noreferrer"><InstagramIcon sx={{fontSize:'50px'}}/></a></li>
                                    <li><a className='link text-kombu' href="https://www.facebook.com/nickshandmadeboots/" target="_blank" rel="noreferrer"><FacebookIcon sx={{fontSize:'50px'}}/></a></li>
                                </ul>

                                

                                </CardContent>
                                </Card>

                                <Card className="text-kombu mb-5 ">
                                <CardContent className='text-kombu d-flex align-items-center'>
                                I am a fan of Nicks Boot's products so I decided to remake a portion of their website using basic HTML/CSS at the beginning of my coding journey. <br />
                                This project is me revisiting my original work to familiarize myself with  React, Redux, and Material UI. 

                                </CardContent>
                                <CardContent className='text-kombu'>
                                My goals for this site are to: 
                                <ul className='lists'>
                                <li>Build a Mobile resposive e-commerce website. </li>
                                <li>Have a main products page that can be sorted by Price, Type and Name.</li>
                                <li>Have a Saved for Later items list that can be displayed in the cart and on other pages. </li>
                                <li>Be able to move items between the cart and saved lists. </li>
                                </ul>
                            </CardContent>
                            <CardContent className='text-kombu text-center'>
                                The GitHub repository for this site is <a className=' link text-liver' target='_blank' rel="noreferrer"  href="https://github.com/AMHatch/ReactSoloProject">here</a> <br />
                                My <a  className=' link text-liver' target='_blank' rel="noreferrer"  href="https://www.linkedin.com/in/amhatch/"> LinkedIn</a>, my <a  className=' link text-liver' target='_blank' rel="noreferrer"  href="https://github.com/AMHatch">GitHub</a> and my <a className=' link text-liver' target='_blank'  href="https://www.amhatch.com">Portfolio</a>
                            </CardContent>
                            </Card>


            <div className="col-12 mb-5 ">
                <div className="row mb-5">
                    <div className="col-4 d-flex justify-content-center mb-5 mt-5">
                        <Card className="text-kombu" sx={{width:'150px'}}>
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;< FaReact />&nbsp; <br />
                            <span className='display-6'>React</span>
                            
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-4 d-flex justify-content-center mb-5 mt-5">
                        <Card className="text-kombu"  sx={{width:'150px'}}>
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;< SiRedux />&nbsp; <br />
                                <span className='display-6'>Redux</span>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-4 d-flex justify-content-center mb-5 mt-5">
                        <Card className="text-kombu "  sx={{width:'150px'}}>
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;< SiJavascript />&nbsp; <br />
                            <span className='display-6'>JavaScript</span>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-4 d-flex justify-content-center mb-5 mt-5">
                        <Card className="text-kombu" sx={{width:'150px'}}>
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;< FaHtml5 />&nbsp; <br />
                            <span className='display-6'>HTML 5</span>
                            
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-4 d-flex justify-content-center mb-5 mt-5">
                        <Card className="text-kombu" sx={{width:'150px'}}>
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;< FaCss3 />&nbsp; <br />
                            <span className='display-6'>CSS 3</span>
                            
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-4 d-flex justify-content-center mb-5 mt-5">
                        <Card className="text-kombu" sx={{width:'150px'}}>
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;< FaBootstrap />&nbsp; <br />
                            <span className='display-6'>Bootstrap</span>
                            
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-4 d-flex justify-content-center mb-5 mt-5">
                        <Card className="text-kombu" sx={{width:'150px'}}>
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;< SiMaterialui />&nbsp; <br />
                            <span className='display-6'>MaterialUI</span>
                            
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-4 d-flex justify-content-center mb-5 mt-5">
                        <Card className="text-kombu" sx={{width:'150px'}}>
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;< FaGitAlt />&nbsp; <br />
                            <span className='display-6'>Git</span>
                            
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-4 d-flex justify-content-center mb-5 mt-5">
                        <Card className="text-kombu" sx={{width:'150px'}}>
                            <CardContent className='display-1 text-kombu text-center '>
                            &nbsp;< FaGithubSquare />&nbsp; <br />
                            <span className='display-6'>GitHub</span>
                            
                            </CardContent>
                        </Card>
                    </div>
                    </div>
                    </div>


                        
                    <div className='mt-5 mb-5'> &nbsp;</div>
                        
                    </div>
                </div>
            
            

            </div>

        </div>
            

            </div>
        </>
    )
}

export default About
