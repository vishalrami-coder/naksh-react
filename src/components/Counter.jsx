import { useEffect, useRef } from "react";
import Odometer from "odometer";

import '../assets/css/Counter.css'

function DarkAboutCounter() {

  const counterRefs = useRef([]);

  const counters = [
    { title: "Connected OEM", value: 842 },
    { title: "Connected Traders", value: 6452 },
    { title: "Connected Panel", value: 2145 },
    { title: "Connected End Users", value: 1883 },
    { title: "Connected Solution Provider", value: 742 },
    { title: "Connected System Integrator", value: 566 },
  ];

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const el = entry.target;
          const finalValue = parseInt(el.dataset.value);

          const od = new Odometer({
            el: el,
            value: 0,
            duration: 1500,
            format: "(,ddd)"
          });

          od.update(finalValue);

          observer.unobserve(el);

        }

      });

    }, { threshold: 0.3 });

    counterRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

  }, []);

  return (
    <div className="DarkAboutCounter">

      {counters.map((item, index) => (
        <div className="DarkAboutCounterItem" key={index}>

          <div className="DarkAboutCounterContent">

            <h5>{item.title}</h5>

            <h2 className="counter-item DarkAboutCounterNum">

              <span
                ref={(el) => (counterRefs.current[index] = el)}
                data-value={item.value}
                className="odometer"
              >
                0
              </span>

              <em>+</em>

            </h2>

            <h5>Trust Our Services</h5>

          </div>

        </div>
      ))}

    </div>
  );
}

export default DarkAboutCounter;