import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getPosts } from "./../../../actions/home";
import './TopAchievementsHome.css';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const Posts= (props)=> {
  const posts = useSelector((state) => state.posts);

  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '0px',
    trackVisibility: true,
    delay: 200,
    initialInView: false,
    skip: false,
    debounce: 0,
    scrollableAncestor: null,
    unobserveOnEnter: false,
    onEnter: () => {
      setAnimateGallery(true);
    },
    onLeave: () => {
      setAnimateGallery(false);
    },
  });

  const [animateGallery, setAnimateGallery] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedImages, setLoadedImages] = useState(6);
  const galleryClassName = `gallery ${
    animateGallery ? 'animate_animated animate_fadeInUp' : ''
  }`;

  const toggleShowMore = () => {
    setLoadingMore(true);
    setShowMore((prevState) => !prevState);
  };

  useEffect(() => {
    if (loadingMore) {
      setTimeout(() => {
        setLoadedImages(posts.length);
        setLoadingMore(false);
      }, 2000);
    }
  }, [loadingMore]);

  useEffect(() => {
    if (galleryInView) {
      setAnimateGallery(true);
    }
  }, [galleryInView]);

  const handleEventSelect = (achievements) => {
    setSelectedEvent(achievements);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const Post = ({  setCurrentId, post })=>{
  const dispatch = useDispatch();

    return(
      <div
        className={`single ${
          animateGallery
            ? 'animate_animated animate_fadeInUp'
            : ''
        }`}
      >
        <div className="cardhar">
          <div className="image-content">
            <span className="overlay" />
            <div className="card-imagehar">
              <img
                src={post.image}
                className="card-imghar"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="namez">{post.title}</h2>
            <p className="descriptionz">
              {post.creator}
            </p>
            <p className="content">{post.message}</p>
          </div>
        </div>
      </div>
    );

  };

  return posts.length ?(
      <div ref={galleryRef}>
        {galleryInView && (
          <div className="Aiml wel" style={{ paddingLeft: '0rem' }}>
            {posts && (
              <div className="gallery12">
                <div className="areahead">
                  <p>NITRR-Achievements</p>
                </div>

                {isLoading ? (
                  <div className="loading">
                    <span>NITRR-Achievements LOADING...</span>
                  </div>
                ) : (
                  <>
                    <div className="galleryWrap">
                      {posts.map((post) => (
                             post.tags===props.tag ?(
                            <LazyLoad item key={post._id} height={200} offset={100} once>
                              <Post setCurrentId={props.setCurrentId} post={post} />
                            </LazyLoad>):null
                          ))}
                    </div>

                    {posts.length > 3 && (
                      <div className="showMoreButton">
                        <button className="button1 Acha">
                          <Link to="/Achievements" onclick={useEffect}>
                            Show More
                          </Link>
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>

  ): null;
}


const TopAchievements=(props)=>{
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
        <Posts setCurrentId={setCurrentId} tag={props.tag} />
  );

};



export default TopAchievements;
