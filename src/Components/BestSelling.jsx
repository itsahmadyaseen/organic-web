import { bestsell } from "../Store/Data";
import BestProduct from "./BestProduct";
import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const BestSelling = () => {
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
          if (pv === ((bestsell.length/4)-1)) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, 5000);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && index < bestsell.length - 1) {
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
          {bestsell.map((product) => (
            
            <BestProduct key={product.id} {...product} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BestSelling;
