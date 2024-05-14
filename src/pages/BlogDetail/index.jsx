import React, { useEffect, useState } from "react";
import Blog from "../../pages/BlogDetail/Blog";

import { useAtom } from "jotai";
import { Link, useParams } from "react-router-dom";
import Loader from "../../component/Loader";

const BlogDetails = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  const { blogId } = useParams();
  const filteredData = Blog.filter((val) => val?.id === +blogId);

  return (
    <div>
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          <div class="bredcrumbs-div wf-section"></div>
          <div class="breadcrumb wf-section">
            <h1 class="heading-7225">
              <div class="bold-text-252">Blog-Detail</div>
            </h1>
          </div>
          <div class="extra-section wf-section"></div>
          <div class="blog-content wf-section">
            <div class="container-1 w-container  xxs:px-2  lg:px-8 xl:px-44">
              <div class="div-block-924 hide">
                <div class="blog-header">
                  <h1 class="blog-h1">
                    Christmas Lights Limo Tour in Brisbane & Gold Coast
                  </h1>
                </div>
                <div class="div-block-930">
                  <img
                    src="images/header.jpg"
                    loading="lazy"
                    sizes="100vw"
                    srcset="images/header-p-500.jpg 500w, images/header-p-800.jpg 800w, images/header-p-1080.jpg 1080w, images/header.jpg 1514w"
                    alt=""
                    class="image-32531"
                  />
                </div>
                <div class="div-block-925">
                  <p class="paragraph-hero">
                    ClassyChauffeurs provide Christmas Lights Limo Tour in
                    Brisbane & Gold Coast. Our luxurious chauffeur driven cars
                    will take you to a tour that you will never forget.
                    Wandering through the streets full of bright and colourful
                    lights in an executive car or a stretch limousine with your
                    family or friends is a one of its kind experience. Add
                    Christmas lights tour to your holiday todo list and book a
                    luxury car with ClassyChauffeurs.
                  </p>
                  <p class="paragraph-hero">
                    If you had ever wished to see Christmas lightings and
                    decoration in Brisbane and Gold Coast then its the right
                    time to make your wish come true. Our chauffeur cars will be
                    available every night till new year. You can book your night
                    tour slot as per your convenience.
                    <br />
                  </p>
                  <p class="paragraph-hero">
                    We have a fleet of luxurious sedans, SUVs, vans and stretch
                    limos. Our stretch sedan can accommodate upto 6 passengers
                    and stretch SUV can accommodate upto 14 passengers. Book
                    limo for Christmas lights tour in Brisbane and Gold Coast.
                    <br />
                  </p>
                  <div class="div-block-31296">
                    <div class="div-block-927"></div>
                    <a href="#" class="link-block-59 w-inline-block">
                      <div class="text-block-15221">
                         <span class="text-span-70">Back to Blog</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="blog-detail-box">
                <div class="right-side-div">
                  <div>
                    {filteredData.map((items) => (
                      <div>
                        <div>
                          <img
                            src={items?.img}
                            loading="lazy"
                            data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16ba"
                            alt=""
                            class="image-32412"
                          />
                          <div class="conertndiv-wrapper">
                            <h1
                              data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16bc"
                              class="heading-7235"
                            >
                              <div class="bold-text-321">{items?.head}</div>
                            </h1>
                            <p
                              data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16c0"
                              class="paragraph-6"
                            >
                              {items?.para}
                            </p>

                            <h1
                              data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16bc"
                              class="heading-7235"
                            >
                              <div class="bold-text-321">{items?.head1}</div>
                            </h1>
                            <p
                              data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16be"
                              class="paragraph-6"
                            >
                              {items?.para1}
                            </p>
                            <h1
                              data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16bc"
                              class="heading-7235"
                            >
                              <div class="bold-text-321">{items?.head2}</div>
                            </h1>
                            <p
                              data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16c0"
                              class="paragraph-6"
                            >
                              {items?.para2}
                            </p>
                            <h1
                              data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16bc"
                              class="heading-7235"
                            >
                              <div class="bold-text-321">{items?.head3}</div>
                            </h1>

                            <p
                              data-w-id="118ad719-ea30-3abb-ada5-3fe439154d73"
                              class="paragraph-6"
                            >
                              {items?.para3}
                            </p>
                            <h1
                              data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16bc"
                              class="heading-7235"
                            >
                              <div class="bold-text-321">{items?.head4}</div>
                            </h1>
                            <p
                              data-w-id="118ad719-ea30-3abb-ada5-3fe439154d73"
                              class="paragraph-6"
                            >
                              {items?.para4}
                            </p>
                            <h1
                              data-w-id="9422962e-2df8-8a71-2b2e-61ed79de16bc"
                              class="heading-7235"
                            >
                              <div class="bold-text-321">{items?.head5}</div>
                            </h1>
                            <p
                              data-w-id="118ad719-ea30-3abb-ada5-3fe439154d73"
                              class="paragraph-6"
                            >
                              {items?.para5}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div class="left-side-div">
                  <div class="div-block-312393">
                    <Link
                      to=""
                      data-w-id="9422962e-2df8-8a71-2b2e-61ed79de1683"
                      class="link-block-57 w-inline-block"
                    >
                      <div class="header-div">
                        <h1 class="heading-17">Recent posts</h1>
                      </div>
                    </Link>
                    <Link
                      to=""
                      data-w-id="9422962e-2df8-8a71-2b2e-61ed79de1689"
                      class="link-block-57 w-inline-block"
                    >
                      <div class="link-div">
                        <div class="text-block-15446"></div>
                        <h1 class="heading-17">
                          Christmas Lights Limo Tour in Brisbane & Gold Coast
                        </h1>
                      </div>
                    </Link>
                    <Link
                      data-w-id="9422962e-2df8-8a71-2b2e-61ed79de168f"
                      class="link-block-57 w-inline-block"
                    >
                      <div class="link-div">
                        <div class="text-block-15446"></div>
                        <h1 class="heading-17">
                          Brisbane Airport to Gold Coast Transfers
                        </h1>
                      </div>
                    </Link>
                    <Link to="" class="link-block-57 w-inline-block">
                      <div
                        data-w-id="9422962e-2df8-8a71-2b2e-61ed79de1696"
                        class="link-div"
                      >
                        <div class="text-block-15446"></div>
                        <h1 class="heading-17">
                          Some Etiquette Tips to follow During Luxury Airport
                          Transfers in Limo
                        </h1>
                      </div>
                      <div
                        data-w-id="0e254dd3-991b-ed3f-6427-aa4c4b8d0470"
                        class="link-div"
                      >
                        <div class="text-block-15446"></div>
                        <h1 class="heading-17">
                          Features of the Limousine That You Can Hire For Your
                          Wedding
                        </h1>
                      </div>
                      <div
                        data-w-id="e83c9d28-e9b5-401e-7f3d-fdfcf774332d"
                        class="link-div"
                      >
                        <div class="text-block-15446"></div>
                        <h1 class="heading-17">
                          Things You Should Not Do While you Hire a Limo in
                          Brisbane & Gold Coast
                        </h1>
                      </div>
                      <div
                        data-w-id="e83c9d28-e9b5-401e-7f3d-fdfcf774332d"
                        class="link-div"
                      >
                        <div class="text-block-15446"></div>
                        <h1 class="heading-17">
                          The Reasons Why Corporate Limo Hire Services are So
                          Adored
                        </h1>
                      </div>
                      <div
                        data-w-id="e83c9d28-e9b5-401e-7f3d-fdfcf774332d"
                        class="link-div"
                      >
                        <div class="text-block-15446"></div>
                        <h1 class="heading-17">
                          Benefits You Derive When You Opt For Luxury Airport
                          Transfers
                        </h1>
                      </div>
                      <div
                        data-w-id="e83c9d28-e9b5-401e-7f3d-fdfcf774332d"
                        class="link-div"
                      >
                        <div class="text-block-15446"></div>
                        <h1 class="heading-17">
                          A Few Questions to Ask Before You Hire a Wedding Limo
                        </h1>
                      </div>
                      <div
                        data-w-id="e83c9d28-e9b5-401e-7f3d-fdfcf774332d"
                        class="link-div"
                      >
                        <div class="text-block-15446"></div>
                        <h1 class="heading-17">
                          Why Hiring a Limo is Important for Attending a
                          Corporate Meeting?
                        </h1>
                      </div>
                    </Link>
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

export default BlogDetails;
