import React, { useEffect, useState } from "react";
import blog1 from "../../images/blog-image-1.png";
import blog2 from "../../images/blog-image-2.png";
import blog3 from "../../images/blog-image-3.png";
import blog4 from "../../images/blog-image-4.png";
import blog5 from "../../images/blog-image-5.png";
import blog6 from "../../images/blog-image-6.png";
import blog7 from "../../images/blog-image-7.png";
import blog8 from "../../images/blog-image-8.png";
import blog9 from "../../images/blog-image-9.png";

import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import Loader from "../../component/Loader";

const BlogPage = () => {
  const BlogData = {
    blogs: [
      {
        id: 1,
        img: blog1,
        head: "Christmas Lights Limo Tour in Brisbane & Gold Coast",
        paragraph:
          "ClassyChauffeurs provide Christmas Lights Limo Tour in Brisbane & Gold Coast. Our luxurious....",
        more: "Read More",
        duration: 0.4,
      },
      {
        id: 2,
        img: blog2,
        head: "Brisbane Airport to Gold Coast Transfers",
        paragraph:
          "“With a ClassyChauffeurs, getting from Brisbane Airport to Gold Coast is a breeze.” Black Grandeur....",
        more: "Read More",
        duration: 0.6,
      },

      {
        id: 3,
        img: blog3,
        head: "Some Etiquette Tips to follow During Luxury Airport Transfers in Limo",
        paragraph:
          "Limos are ultimate vehicles when it comes to transporting people. Thus every transport company.....",
        more: "Read More",
        duration: 0.8,
      },
      {
        id: 4,
        img: blog4,
        head: "Features of the Limousine That You Can Hire For Your Wedding",
        paragraph:
          "If your wish to make your wedding day memorable, then choosing a luxury car is the perfect solution.....",
        more: "Read More",
        duration: 0.4,
      },
      {
        id: 5,
        img: blog5,
        head: "Things You Should Not Do While you Hire a Limo in Brisbane & Gold Coast",
        paragraph:
          "Hiring a limo underlines your style statement. It goes without saying that when you hire a limo, it adds a new dimension.....",
        more: "Read More",
        duration: 0.6,
      },
      {
        id: 6,
        img: blog6,
        head: "The Reasons Why Corporate Limo Hire Services are So Adored",
        paragraph:
          "The companies that hire out limos are extremely popular these days. There are certain reasons behind it. In this write.....",
        more: "Read More",
        duration: 0.8,
      },
      {
        id: 7,
        img: blog7,
        head: "Benefits You Derive When You Opt For Luxury Airport Transfers",
        paragraph:
          "When you look to hire a car for an airport transfer, there are several things that you should take into account, along..... ",
        more: "Read More",
        duration: 0.4,
      },
      {
        id: 8,
        img: blog8,
        head: "A Few Questions to Ask Before You Hire a Wedding Limo",
        paragraph:
          "Before you hire a limo for your wedding, it is better to ask a few questions that will give you a fair idea about the.....",
        more: "Read More",
        duration: 0.6,
      },
      {
        id: 9,
        img: blog9,
        head: "Why Hiring a Limo is Important for Attending a Corporate Meeting?",
        paragraph:
          "A Limousine is loved by all due to its elegance and when it comes to attending a corporate meeting in the....",
        more: "Read More",
        duration: 0.8,
      },
    ],
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  return (
    <div>
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] ">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          <div className="bredcrumbs-div wf-section"></div>
          <div className="breadcrumb wf-section">
            <h1 className="heading-7225">
              <strong className="bold-text-252">Blog</strong>
            </h1>
          </div>
          <div className="extra-section wf-section"></div>
          <div className="blog-section wf-section ">
            <div className="blog-container w-container   ">
              <AnimatePresence>
                <motion.div
                  data-w-id="e79edead-8a7e-49de-c80d-4fb4fdc65e5e"
                  // style="opacity:0"
                  className="header-box center"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="div-block-302"></div>
                  <div className="header-wrap">
                    <h4 className="h-3">Read Blogs</h4>
                    <h1 className="h-1">Blogs</h1>
                  </div>
                  <div className="div-block-302"></div>
                </motion.div>
              </AnimatePresence>
              <div className="main-div-blog ">
                <div className="content-div-blog ">
                  <div className="main-div-3 padding"></div>
                  <div
                    className="blog-div-main  grid  xxs:grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 md:mx-16 lg:mx-40  xl:mx-72"
                    // initial={{ y: 100, opacity: 0 }}
                    // animate={{ y: 0, opacity: 1 }}
                    // transition={{ duration: items?.duration }}
                  >
                    {BlogData.blogs.map((items) => (
                      <AnimatePresence>
                        <motion.div
                          data-w-id="dde6d2a4-8336-63a2-44b6-eddf339be137"
                          // style="opacity:0"
                          className="first-blog"
                          initial={{ y: 100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: items?.duration }}
                        >
                          <div>
                            <img
                              src={items.img}
                              loading="lazy"
                              width="512"
                              alt=""
                              className="image-32588"
                            />
                          </div>
                          <div className="div-block-56">
                            <h1 className="heading-7224">{items.head}</h1>
                            <p className="paragraph-204">{items.paragraph}</p>
                            <NavLink
                              to={`/blog/${items?.id}`}
                              className="button-13 w-button"
                            >
                              Read More
                            </NavLink>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BlogPage;
