import { reviewData } from "../Store/Data";
import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomerReview = () => {
  const DRAG_BUFFER = 50;

  const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
  };

  const [index, setIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setIndex((pv) => {
          if (pv === reviewData.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, 50000);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && index < reviewData.length - 1) {
      setIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && index > 0) {
      setIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="section" id="products">
      <div className=" place-items-center gap-6 overflow-hidden ">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${index * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing"
        >
          {reviewData.map((data, idx) => {
            return (
              <motion.div
                key={idx}
                animate={{
                  scale: index === idx ? 0.95 : 0.85,
                }}
                transition={SPRING_OPTIONS}
                className=""
              >
                <div className="sm:max-w-[1400px] sm:h-[650px]  h-1/2 m-auto py-16 px-4 relative group">
                <img
                  src={data.image}
                  alt="img"
                  className="w-full h-[40vh] sm:h-full rounded-none bg-center bg-cover"
                />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerReview;
