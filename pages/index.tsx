import type {NextPage} from 'next'
import Image from 'next/image'
import styles from '../styles/Homu.module.sass'
import works_1 from './../public/works-1.jpg'
import works_2 from './../public/works-2.jpg'
import works_3 from './../public/works-3.jpg'
import works_4 from './../public/works-4.jpg'
import works_5 from './../public/works-5.jpg'
import MyMap from "../components/map/map.component";
import {useEffect, useState} from "react";

const Home: NextPage = () => {

    let [check, setCheck] = useState(false)

    useEffect(() => {
        setCheck(window.innerWidth > 600)
    })

    return (
        <>
            <main className={styles.main}>
                <div className={styles.aboutMe}>
                    <div className={styles.imageWrapper}>
                        <Image
                            className={styles.aboutMe_img}
                            src="/../public/main-img.jpg"
                            alt='main-img'
                            layout="fill"
                            objectFit="contain"
                            objectPosition={check ? 'left' : 'center'}
                            quality={100}
                        />
                    </div>
                    <div className={styles.aboutMe_container}>
                        <div className={styles.aboutMe_label}>
                            <div className={styles.aboutMe_line}/>
                            <div>About me</div>
                            <div className={styles.aboutMe_line}/>
                        </div>
                        <p className={styles.aboutMe_text}>
                            I’m a freelance <span style={{fontFamily: 'CormorantGaramond-Light', fontStyle: 'italic'}}>
                                visual artist.
                            </span> My work is an expression of my <span>passion</span> for the natural <span>
                                world.</span> I love to <span
                            style={{fontFamily: 'CormorantGaramond-Light', fontStyle: 'italic'}}>
                                balance
                            </span> <span>light</span> and <span>shadow</span> in my paintings.
                        </p>
                    </div>
                </div>

                <div className={styles.myWorks}>
                    <div className={styles.myWorks_title}>
                        My Works
                    </div>
                    <div className={styles.myWorks_images}>
                        <div className={styles.myWorks_imageWrapper}>
                            <img
                                src={works_1.src}
                                alt="works-1"
                                className={styles.myWorks_image}
                            />
                        </div>
                        <div className={styles.myWorks_imageWrapper}>
                            <img
                                src={works_2.src}
                                alt="works-2"
                                className={styles.myWorks_image}
                            />
                        </div>
                        <div className={styles.myWorks_imageWrapper}>
                            <img
                                src={works_3.src}
                                alt="works-3"
                                className={styles.myWorks_image}
                            />
                        </div>
                        <div className={styles.myWorks_imageWrapper}>
                            <img
                                src={works_4.src}
                                alt="works-4"
                                className={styles.myWorks_image}
                            />
                        </div>
                        <div className={styles.myWorks_imageWrapper_spec}>
                            <img
                                src={works_5.src}
                                alt="works-5"
                                className={`${styles.myWorks_image} ${styles.myWorks_image_spec}`}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.myLocation}>
                    <p className={styles.myLocation_label}>Current Location</p>
                    <p className={styles.myLocation_text}>Marfa, Texas</p>
                    <MyMap/>
                </div>
            </main>
        </>
    )
}

export default Home
