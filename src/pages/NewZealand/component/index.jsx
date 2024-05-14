import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const NewZeaLandTab = ({ items }) => {
  return (
    <div className="mx-4   ">
      <AnimatePresence>
        <motion.div
          data-w-tab="Tab 2"
          className="tab-pane-tab-2-2 w-tab-pane w--tab-active"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          <div>
            <div className="div-block-312466">
              <div className="div-block-31736">
                <div className="div-block-312464 chng-bg457 hide"></div>
              </div>
              <div
                data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee211d"
                className="div-block-312467"
              >
                <h1 className="heading-7214">
                  <strong className="bold-text-331">{items?.head}</strong>
                </h1>
                <p className="paragraph-2207">
                  {items?.para}

                  <br />
                </p>
              </div>
              <div className="div-block-31779">
                <p
                  data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee2125"
                  className="paragraph-2207 ilt"
                >
                  {items?.para2}

                  <br />
                </p>
                <div className="text-block-15481"></div>
              </div>
              <div className="div-block-312465">
                <div className="div-block-312468">
                  <div
                    data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee212c"
                    className="div-block-31775 top"
                  >
                    <div className="div-block-31776">
                      <div className="text-block-15478"></div>
                    </div>
                    <div className="div-block-31777">
                      <div className="text-block-15482">{items?.para3}</div>
                    </div>
                  </div>
                  <div
                    data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee2133"
                    className="div-block-31775 top"
                  >
                    <div className="div-block-31776">
                      <div className="text-block-15478"></div>
                    </div>
                    <div className="div-block-31777">
                      <div className="text-block-15482">{items?.para4}</div>
                    </div>
                  </div>
                  <div
                    data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee213a"
                    className="div-block-31775"
                  >
                    <div className="div-block-31776">
                      <div className="text-block-15478"></div>
                    </div>
                    <div className="div-block-31777">
                      <div className="text-block-15482">{items.para5}</div>
                    </div>
                  </div>
                  <div
                    data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee2141"
                    className="div-block-31775"
                  >
                    <div className="div-block-31776">
                      <div className="text-block-15478"></div>
                    </div>
                    <div className="div-block-31777">
                      <div className="text-block-15482">{items?.para6}</div>
                    </div>
                  </div>
                  <div
                    data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee2148"
                    className="div-block-31775"
                  >
                    <div className="div-block-31776">
                      <div className="text-block-15478"></div>
                    </div>
                    <div className="div-block-31777">
                      <div className="text-block-15482">{items?.para7}</div>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  <motion.div
                    data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee214f"
                    //   style="opacity:0"
                    className="div-block-312469"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      loading="lazy"
                      src={items.img}
                      alt=""
                      className="image-32585"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="div-block-312466">
              <div className="div-block-31736">
                <div className="div-block-312464 chng-bg457 hide"></div>
              </div>
              <div
                data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee2154"
                className="div-block-312467"
              >
                <h1 className="heading-7214">
                  <strong className="bold-text-332">{items?.para8}</strong>
                </h1>
                <p className="paragraph-2207">
                  {items.para9}

                  <br />
                </p>
              </div>
              <div className="div-block-31779">
                <p
                  data-w-id="d6c10dda-9332-9ae2-b245-b92b78ee215c"
                  className="paragraph-2207 ilt"
                >
                  {items?.para10}

                  <br />
                </p>
                <div className="text-block-15481"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NewZeaLandTab;
