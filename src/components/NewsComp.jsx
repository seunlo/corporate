"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function NewsComp() {
  const targetRef = useRef < HTMLElement > null;
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, -1], [1, -0.5, 0]);
  return (
    <div className="gap-2">
      <img
        src="https://colormadehappy.com/wp-content/uploads/2022/11/Christmas-Tree-Drawing-scaled-e1667860123547.jpg"
        alt=""
      />
      <p
        ref={targetRef}
        className="justify-center text-[20px] font-bold text-center mb-5"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore
        aperiam voluptas a ducimus! Nemo vero voluptate distinctio, alias
        doloribus voluptatibus veritatis non mollitia fugiat repellendus sequi
        provident iste! Veritatis!
      </p>
      <p className="justify-center text-[20px] font-bold text-center mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore
        aperiam voluptas a ducimus! Nemo vero voluptate distinctio, alias
        doloribus voluptatibus veritatis non mollitia fugiat repellendus sequi
        provident iste! Veritatis!
      </p>
      <p className="justify-center text-[20px] font-bold text-center mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore
        aperiam voluptas a ducimus! Nemo vero voluptate distinctio, alias
        doloribus voluptatibus veritatis non mollitia fugiat repellendus sequi
        provident iste! Veritatis!
      </p>
      <p className="justify-center text-[20px] font-bold text-center mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore
        aperiam voluptas a ducimus! Nemo vero voluptate distinctio, alias
        doloribus voluptatibus veritatis non mollitia fugiat repellendus sequi
        provident iste! Veritatis!
      </p>
      <p className="justify-center text-[20px] font-bold text-center mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore
        aperiam voluptas a ducimus! Nemo vero voluptate distinctio, alias
        doloribus voluptatibus veritatis non mollitia fugiat repellendus sequi
        provident iste! Veritatis!
      </p>
    </div>
  );
}
