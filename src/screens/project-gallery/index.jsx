import React from 'react';
import Carousel from 'react-elastic-carousel';
import GalleryCard from '../../components/project-gallery';
import Navbar from '../../components/navbar';
// importing images
import gallery_one from '../../assets/project-gallery/1.jpg';
import gallery_two from '../../assets/project-gallery/2.jpg'
import gallery_three from '../../assets/project-gallery/3.jpg'
import gallery_four from '../../assets/project-gallery/4.jpg'
import gallery_five from '../../assets/project-gallery/5.jpg'

import './style.css';

const ProjectGallery = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 2, itemsToScroll: 2}
      ];

    return (
        <>
            <Navbar title="PROJECT GALLERY"/>
            <div className="container-sec">
                <h1 className="gallery-title">Gallery</h1>
                <div className="container">
                    <div className="border-sec">
                            <div className="dashboard-carousel dashboard-carousel-gallery">
                                <Carousel breakPoints={breakPoints}>
                                    <GalleryCard image={gallery_one}/>
                                    <GalleryCard image={gallery_two}/>
                                    <GalleryCard image={gallery_three}/>
                                    <GalleryCard image={gallery_four}/>
                                    <GalleryCard image={gallery_five}/>
                                </Carousel>
                            </div>
                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectGallery;
